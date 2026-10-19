import { InventoryRecord } from '../types';

interface TreeNode {
  isLeaf: boolean;
  value?: number;
  featureIndex?: number;
  threshold?: number;
  left?: TreeNode;
  right?: TreeNode;
}

// Pseudo-random number generator for reproducible trees
function createRng(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

class DecisionTreeRegressor {
  private root: TreeNode | null = null;
  private minSamplesLeaf: number;
  private maxDepth: number;

  constructor(minSamplesLeaf = 2, maxDepth = 8) {
    this.minSamplesLeaf = minSamplesLeaf;
    this.maxDepth = maxDepth;
  }

  fit(X: number[][], y: number[], rng: () => number, maxFeaturesCount: number) {
    this.root = this.buildNode(X, y, 0, rng, maxFeaturesCount);
  }

  private buildNode(
    X: number[][],
    y: number[],
    depth: number,
    rng: () => number,
    maxFeaturesCount: number
  ): TreeNode {
    const n = y.length;
    const mean = y.reduce((a, b) => a + b, 0) / n;

    if (depth >= this.maxDepth || n <= this.minSamplesLeaf) {
      return { isLeaf: true, value: mean };
    }

    const numFeatures = X[0].length;
    // Pick random subset of feature indices
    const featureIndices: number[] = [];
    while (featureIndices.length < Math.min(numFeatures, maxFeaturesCount)) {
      const idx = Math.floor(rng() * numFeatures);
      if (!featureIndices.includes(idx)) {
        featureIndices.push(idx);
      }
    }

    let bestVarReduction = -Infinity;
    let bestFeature = -1;
    let bestThreshold = 0;
    let bestLeftIndices: number[] = [];
    let bestRightIndices: number[] = [];

    const currentVariance = this.calculateVariance(y, mean);

    for (const fIdx of featureIndices) {
      // Collect unique values to test
      const vals = X.map(row => row[fIdx]);
      vals.sort((a, b) => a - b);

      // Test candidate split midpoints
      for (let i = 0; i < vals.length - 1; i += Math.max(1, Math.floor(vals.length / 15))) {
        if (vals[i] === vals[i + 1]) continue;
        const thresh = (vals[i] + vals[i + 1]) / 2;

        const leftIdx: number[] = [];
        const rightIdx: number[] = [];

        for (let rowIdx = 0; rowIdx < n; rowIdx++) {
          if (X[rowIdx][fIdx] <= thresh) {
            leftIdx.push(rowIdx);
          } else {
            rightIdx.push(rowIdx);
          }
        }

        if (leftIdx.length < this.minSamplesLeaf || rightIdx.length < this.minSamplesLeaf) {
          continue;
        }

        const leftY = leftIdx.map(i => y[i]);
        const rightY = rightIdx.map(i => y[i]);

        const leftMean = leftY.reduce((a, b) => a + b, 0) / leftY.length;
        const rightMean = rightY.reduce((a, b) => a + b, 0) / rightY.length;

        const leftVar = this.calculateVariance(leftY, leftMean);
        const rightVar = this.calculateVariance(rightY, rightMean);

        const weightedVar = (leftY.length * leftVar + rightY.length * rightVar) / n;
        const varReduction = currentVariance - weightedVar;

        if (varReduction > bestVarReduction) {
          bestVarReduction = varReduction;
          bestFeature = fIdx;
          bestThreshold = thresh;
          bestLeftIndices = leftIdx;
          bestRightIndices = rightIdx;
        }
      }
    }

    if (bestVarReduction <= 0 || bestLeftIndices.length === 0 || bestRightIndices.length === 0) {
      return { isLeaf: true, value: mean };
    }

    const leftX = bestLeftIndices.map(i => X[i]);
    const leftY = bestLeftIndices.map(i => y[i]);
    const rightX = bestRightIndices.map(i => X[i]);
    const rightY = bestRightIndices.map(i => y[i]);

    return {
      isLeaf: false,
      featureIndex: bestFeature,
      threshold: bestThreshold,
      left: this.buildNode(leftX, leftY, depth + 1, rng, maxFeaturesCount),
      right: this.buildNode(rightX, rightY, depth + 1, rng, maxFeaturesCount),
    };
  }

  private calculateVariance(y: number[], mean: number): number {
    return y.reduce((acc, val) => acc + (val - mean) ** 2, 0) / y.length;
  }

  predictRow(row: number[]): number {
    let curr = this.root;
    while (curr && !curr.isLeaf) {
      if (curr.featureIndex !== undefined && curr.threshold !== undefined) {
        if (row[curr.featureIndex] <= curr.threshold) {
          curr = curr.left || null;
        } else {
          curr = curr.right || null;
        }
      } else {
        break;
      }
    }
    return curr?.value ?? 0;
  }
}

export class SimpleRandomForestRegressor {
  private trees: DecisionTreeRegressor[] = [];
  private numEstimators: number;
  private minSamplesLeaf: number;

  constructor(numEstimators = 60, minSamplesLeaf = 2) {
    this.numEstimators = numEstimators;
    this.minSamplesLeaf = minSamplesLeaf;
  }

  fit(X: number[][], y: number[], seed = 42) {
    this.trees = [];
    const rng = createRng(seed);
    const n = X.length;
    const maxFeatures = Math.max(2, Math.floor(Math.sqrt(X[0].length) + 1));

    for (let t = 0; t < this.numEstimators; t++) {
      const tree = new DecisionTreeRegressor(this.minSamplesLeaf, 7);
      // Bootstrap sample
      const bootX: number[][] = [];
      const bootY: number[] = [];
      for (let i = 0; i < n; i++) {
        const idx = Math.floor(rng() * n);
        bootX.push(X[idx]);
        bootY.push(y[idx]);
      }
      tree.fit(bootX, bootY, rng, maxFeatures);
      this.trees.push(tree);
    }
  }

  predict(row: number[]): number {
    if (this.trees.length === 0) return 0;
    const sum = this.trees.reduce((acc, tree) => acc + tree.predictRow(row), 0);
    return sum / this.trees.length;
  }
}

/**
 * Forecasts future demand for a given medicine series.
 * Matches python implementation logic:
 * Features:
 *   t: time index
 *   dow: day of week (0 = Monday, 6 = Sunday)
 *   lag7: consumption 7 days ago
 *   lag14: consumption 14 days ago
 *   roll7: 7-day rolling mean ending yesterday
 */
export function forecastMedicine(
  hist: InventoryRecord[],
  horizon: number = 14
): number[] {
  // Sort by date ascending
  const sorted = [...hist].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const consumptions = sorted.map(r => r.dailyConsumption);
  const n = sorted.length;

  if (n < 30) {
    const tail7 = consumptions.slice(-7);
    const meanTail = tail7.reduce((a, b) => a + b, 0) / (tail7.length || 1);
    return Array(horizon).fill(Math.round(meanTail));
  }

  // Feature engineering
  const X: number[][] = [];
  const y: number[] = [];

  for (let i = 14; i < n; i++) {
    const t = i;
    const dateObj = new Date(sorted[i].date);
    // python dayofweek: Monday=0, Sunday=6
    const jsDay = dateObj.getDay();
    const dow = (jsDay + 6) % 7;

    const lag7 = consumptions[i - 7];
    const lag14 = consumptions[i - 14];

    // roll7: mean of daily_consumption from (i-7) to (i-1)
    const window7 = consumptions.slice(i - 7, i);
    const roll7 = window7.reduce((a, b) => a + b, 0) / window7.length;

    X.push([t, dow, lag7, lag14, roll7]);
    y.push(consumptions[i]);
  }

  const model = new SimpleRandomForestRegressor(50, 2);
  model.fit(X, y, 42);

  const history = [...consumptions];
  const lastDate = new Date(sorted[n - 1].date);
  const preds: number[] = [];

  for (let i = 0; i < horizon; i++) {
    const t = n + i;
    const futureDate = new Date(lastDate);
    futureDate.setDate(lastDate.getDate() + (i + 1));
    const dow = (futureDate.getDay() + 6) % 7;

    const lag7 = history.length >= 7 ? history[history.length - 7] : history.reduce((a, b) => a + b, 0) / history.length;
    const lag14 = history.length >= 14 ? history[history.length - 14] : history.reduce((a, b) => a + b, 0) / history.length;

    const last7Slice = history.slice(-7);
    const roll7 = last7Slice.reduce((a, b) => a + b, 0) / (last7Slice.length || 1);

    const featureRow = [t, dow, lag7, lag14, roll7];
    let pred = model.predict(featureRow);
    pred = Math.max(0, pred);
    preds.push(pred);
    history.push(pred);
  }

  return preds;
}
