export interface RawInventoryRecord {
  date: string;
  medicine: string;
  form: string;
  daily_consumption: number;
  received_qty: number;
  stock_on_hand: number;
  nearest_expiry: string;
}

export const INITIAL_INVENTORY_DATA: RawInventoryRecord[] = [
  {
    "date": "2026-05-01",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 185,
    "received_qty": 0,
    "stock_on_hand": 1015,
    "nearest_expiry": "2026-07-30"
  },
  {
    "date": "2026-05-02",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 186,
    "received_qty": 0,
    "stock_on_hand": 829,
    "nearest_expiry": "2026-07-31"
  },
  {
    "date": "2026-05-03",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 140,
    "received_qty": 2520,
    "stock_on_hand": 3209,
    "nearest_expiry": "2026-08-01"
  },
  {
    "date": "2026-05-04",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 205,
    "received_qty": 1260,
    "stock_on_hand": 4264,
    "nearest_expiry": "2026-08-02"
  },
  {
    "date": "2026-05-05",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 202,
    "received_qty": 0,
    "stock_on_hand": 4062,
    "nearest_expiry": "2026-08-03"
  },
  {
    "date": "2026-05-06",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 197,
    "received_qty": 1260,
    "stock_on_hand": 5125,
    "nearest_expiry": "2026-08-04"
  },
  {
    "date": "2026-05-07",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 183,
    "received_qty": 1260,
    "stock_on_hand": 6202,
    "nearest_expiry": "2026-08-05"
  },
  {
    "date": "2026-05-08",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 190,
    "received_qty": 0,
    "stock_on_hand": 6012,
    "nearest_expiry": "2026-08-06"
  },
  {
    "date": "2026-05-09",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 181,
    "received_qty": 0,
    "stock_on_hand": 5831,
    "nearest_expiry": "2026-08-07"
  },
  {
    "date": "2026-05-10",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 191,
    "received_qty": 0,
    "stock_on_hand": 5640,
    "nearest_expiry": "2026-08-08"
  },
  {
    "date": "2026-05-11",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 201,
    "received_qty": 0,
    "stock_on_hand": 5439,
    "nearest_expiry": "2026-08-09"
  },
  {
    "date": "2026-05-12",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 230,
    "received_qty": 1260,
    "stock_on_hand": 6469,
    "nearest_expiry": "2026-08-10"
  },
  {
    "date": "2026-05-13",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 175,
    "received_qty": 0,
    "stock_on_hand": 6294,
    "nearest_expiry": "2026-08-11"
  },
  {
    "date": "2026-05-14",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 193,
    "received_qty": 0,
    "stock_on_hand": 6101,
    "nearest_expiry": "2026-08-12"
  },
  {
    "date": "2026-05-15",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 191,
    "received_qty": 0,
    "stock_on_hand": 5910,
    "nearest_expiry": "2026-08-13"
  },
  {
    "date": "2026-05-16",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 215,
    "received_qty": 2520,
    "stock_on_hand": 8215,
    "nearest_expiry": "2026-08-14"
  },
  {
    "date": "2026-05-17",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 168,
    "received_qty": 0,
    "stock_on_hand": 8047,
    "nearest_expiry": "2026-08-15"
  },
  {
    "date": "2026-05-18",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 219,
    "received_qty": 0,
    "stock_on_hand": 7828,
    "nearest_expiry": "2026-08-16"
  },
  {
    "date": "2026-05-19",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 205,
    "received_qty": 0,
    "stock_on_hand": 7623,
    "nearest_expiry": "2026-08-17"
  },
  {
    "date": "2026-05-20",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 170,
    "received_qty": 0,
    "stock_on_hand": 7453,
    "nearest_expiry": "2026-08-18"
  },
  {
    "date": "2026-05-21",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 199,
    "received_qty": 1260,
    "stock_on_hand": 8514,
    "nearest_expiry": "2026-08-19"
  },
  {
    "date": "2026-05-22",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 164,
    "received_qty": 0,
    "stock_on_hand": 8350,
    "nearest_expiry": "2026-08-20"
  },
  {
    "date": "2026-05-23",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 167,
    "received_qty": 1260,
    "stock_on_hand": 9443,
    "nearest_expiry": "2026-08-21"
  },
  {
    "date": "2026-05-24",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 181,
    "received_qty": 0,
    "stock_on_hand": 9262,
    "nearest_expiry": "2026-08-22"
  },
  {
    "date": "2026-05-25",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 227,
    "received_qty": 0,
    "stock_on_hand": 9035,
    "nearest_expiry": "2026-08-23"
  },
  {
    "date": "2026-05-26",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 223,
    "received_qty": 0,
    "stock_on_hand": 8812,
    "nearest_expiry": "2026-08-24"
  },
  {
    "date": "2026-05-27",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 192,
    "received_qty": 0,
    "stock_on_hand": 8620,
    "nearest_expiry": "2026-08-25"
  },
  {
    "date": "2026-05-28",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 160,
    "received_qty": 1260,
    "stock_on_hand": 9720,
    "nearest_expiry": "2026-08-26"
  },
  {
    "date": "2026-05-29",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 179,
    "received_qty": 0,
    "stock_on_hand": 9541,
    "nearest_expiry": "2026-08-27"
  },
  {
    "date": "2026-05-30",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 175,
    "received_qty": 0,
    "stock_on_hand": 9366,
    "nearest_expiry": "2026-08-28"
  },
  {
    "date": "2026-05-31",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 165,
    "received_qty": 0,
    "stock_on_hand": 9201,
    "nearest_expiry": "2026-08-29"
  },
  {
    "date": "2026-06-01",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 175,
    "received_qty": 1260,
    "stock_on_hand": 10286,
    "nearest_expiry": "2026-08-30"
  },
  {
    "date": "2026-06-02",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 215,
    "received_qty": 0,
    "stock_on_hand": 10071,
    "nearest_expiry": "2026-08-31"
  },
  {
    "date": "2026-06-03",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 202,
    "received_qty": 0,
    "stock_on_hand": 9869,
    "nearest_expiry": "2026-09-01"
  },
  {
    "date": "2026-06-04",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 183,
    "received_qty": 0,
    "stock_on_hand": 9686,
    "nearest_expiry": "2026-09-02"
  },
  {
    "date": "2026-06-05",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 206,
    "received_qty": 0,
    "stock_on_hand": 9480,
    "nearest_expiry": "2026-09-03"
  },
  {
    "date": "2026-06-06",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 159,
    "received_qty": 0,
    "stock_on_hand": 9321,
    "nearest_expiry": "2026-09-04"
  },
  {
    "date": "2026-06-07",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 166,
    "received_qty": 0,
    "stock_on_hand": 9155,
    "nearest_expiry": "2026-09-05"
  },
  {
    "date": "2026-06-08",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 216,
    "received_qty": 0,
    "stock_on_hand": 8939,
    "nearest_expiry": "2026-09-06"
  },
  {
    "date": "2026-06-09",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 204,
    "received_qty": 1260,
    "stock_on_hand": 9995,
    "nearest_expiry": "2026-09-07"
  },
  {
    "date": "2026-06-10",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 203,
    "received_qty": 0,
    "stock_on_hand": 9792,
    "nearest_expiry": "2026-09-08"
  },
  {
    "date": "2026-06-11",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 200,
    "received_qty": 0,
    "stock_on_hand": 9592,
    "nearest_expiry": "2026-09-09"
  },
  {
    "date": "2026-06-12",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 184,
    "received_qty": 0,
    "stock_on_hand": 9408,
    "nearest_expiry": "2026-09-10"
  },
  {
    "date": "2026-06-13",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 162,
    "received_qty": 0,
    "stock_on_hand": 9246,
    "nearest_expiry": "2026-09-11"
  },
  {
    "date": "2026-06-14",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 176,
    "received_qty": 0,
    "stock_on_hand": 9070,
    "nearest_expiry": "2026-09-12"
  },
  {
    "date": "2026-06-15",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 226,
    "received_qty": 0,
    "stock_on_hand": 8844,
    "nearest_expiry": "2026-09-13"
  },
  {
    "date": "2026-06-16",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 230,
    "received_qty": 0,
    "stock_on_hand": 8614,
    "nearest_expiry": "2026-09-14"
  },
  {
    "date": "2026-06-17",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 185,
    "received_qty": 0,
    "stock_on_hand": 8429,
    "nearest_expiry": "2026-09-15"
  },
  {
    "date": "2026-06-18",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 160,
    "received_qty": 0,
    "stock_on_hand": 8269,
    "nearest_expiry": "2026-09-16"
  },
  {
    "date": "2026-06-19",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 168,
    "received_qty": 2520,
    "stock_on_hand": 10621,
    "nearest_expiry": "2026-09-17"
  },
  {
    "date": "2026-06-20",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 193,
    "received_qty": 0,
    "stock_on_hand": 10428,
    "nearest_expiry": "2026-09-18"
  },
  {
    "date": "2026-06-21",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 179,
    "received_qty": 2520,
    "stock_on_hand": 12769,
    "nearest_expiry": "2026-09-19"
  },
  {
    "date": "2026-06-22",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 210,
    "received_qty": 0,
    "stock_on_hand": 12559,
    "nearest_expiry": "2026-09-20"
  },
  {
    "date": "2026-06-23",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 197,
    "received_qty": 0,
    "stock_on_hand": 12362,
    "nearest_expiry": "2026-09-21"
  },
  {
    "date": "2026-06-24",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 176,
    "received_qty": 1260,
    "stock_on_hand": 13446,
    "nearest_expiry": "2026-09-22"
  },
  {
    "date": "2026-06-25",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 211,
    "received_qty": 0,
    "stock_on_hand": 13235,
    "nearest_expiry": "2026-09-23"
  },
  {
    "date": "2026-06-26",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 204,
    "received_qty": 0,
    "stock_on_hand": 13031,
    "nearest_expiry": "2026-09-24"
  },
  {
    "date": "2026-06-27",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 176,
    "received_qty": 1260,
    "stock_on_hand": 14115,
    "nearest_expiry": "2026-09-25"
  },
  {
    "date": "2026-06-28",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 189,
    "received_qty": 0,
    "stock_on_hand": 13926,
    "nearest_expiry": "2026-09-26"
  },
  {
    "date": "2026-06-29",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 225,
    "received_qty": 0,
    "stock_on_hand": 13701,
    "nearest_expiry": "2026-09-27"
  },
  {
    "date": "2026-06-30",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 255,
    "received_qty": 0,
    "stock_on_hand": 13446,
    "nearest_expiry": "2026-09-28"
  },
  {
    "date": "2026-07-01",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 176,
    "received_qty": 0,
    "stock_on_hand": 13270,
    "nearest_expiry": "2026-09-29"
  },
  {
    "date": "2026-07-02",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 201,
    "received_qty": 0,
    "stock_on_hand": 13069,
    "nearest_expiry": "2026-09-30"
  },
  {
    "date": "2026-07-03",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 213,
    "received_qty": 0,
    "stock_on_hand": 12856,
    "nearest_expiry": "2026-10-01"
  },
  {
    "date": "2026-07-04",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 217,
    "received_qty": 0,
    "stock_on_hand": 12639,
    "nearest_expiry": "2026-10-02"
  },
  {
    "date": "2026-07-05",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 178,
    "received_qty": 1260,
    "stock_on_hand": 13721,
    "nearest_expiry": "2026-10-03"
  },
  {
    "date": "2026-07-06",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 213,
    "received_qty": 0,
    "stock_on_hand": 13508,
    "nearest_expiry": "2026-10-04"
  },
  {
    "date": "2026-07-07",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 236,
    "received_qty": 0,
    "stock_on_hand": 13272,
    "nearest_expiry": "2026-10-05"
  },
  {
    "date": "2026-07-08",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 169,
    "received_qty": 0,
    "stock_on_hand": 13103,
    "nearest_expiry": "2026-10-06"
  },
  {
    "date": "2026-07-09",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 205,
    "received_qty": 0,
    "stock_on_hand": 12898,
    "nearest_expiry": "2026-10-07"
  },
  {
    "date": "2026-07-10",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 239,
    "received_qty": 0,
    "stock_on_hand": 12659,
    "nearest_expiry": "2026-10-08"
  },
  {
    "date": "2026-07-11",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 199,
    "received_qty": 0,
    "stock_on_hand": 12460,
    "nearest_expiry": "2026-10-09"
  },
  {
    "date": "2026-07-12",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 151,
    "received_qty": 0,
    "stock_on_hand": 12309,
    "nearest_expiry": "2026-10-10"
  },
  {
    "date": "2026-07-13",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 205,
    "received_qty": 0,
    "stock_on_hand": 12104,
    "nearest_expiry": "2026-10-11"
  },
  {
    "date": "2026-07-14",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 210,
    "received_qty": 0,
    "stock_on_hand": 11894,
    "nearest_expiry": "2026-10-12"
  },
  {
    "date": "2026-07-15",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 222,
    "received_qty": 1260,
    "stock_on_hand": 12932,
    "nearest_expiry": "2026-10-13"
  },
  {
    "date": "2026-07-16",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 197,
    "received_qty": 0,
    "stock_on_hand": 12735,
    "nearest_expiry": "2026-10-14"
  },
  {
    "date": "2026-07-17",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 167,
    "received_qty": 0,
    "stock_on_hand": 12568,
    "nearest_expiry": "2026-10-15"
  },
  {
    "date": "2026-07-18",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 192,
    "received_qty": 0,
    "stock_on_hand": 12376,
    "nearest_expiry": "2026-10-16"
  },
  {
    "date": "2026-07-19",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 196,
    "received_qty": 0,
    "stock_on_hand": 12180,
    "nearest_expiry": "2026-10-17"
  },
  {
    "date": "2026-07-20",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 215,
    "received_qty": 0,
    "stock_on_hand": 11965,
    "nearest_expiry": "2026-10-18"
  },
  {
    "date": "2026-07-21",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 204,
    "received_qty": 0,
    "stock_on_hand": 11761,
    "nearest_expiry": "2026-10-19"
  },
  {
    "date": "2026-07-22",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 245,
    "received_qty": 1260,
    "stock_on_hand": 12776,
    "nearest_expiry": "2026-10-20"
  },
  {
    "date": "2026-07-23",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 219,
    "received_qty": 0,
    "stock_on_hand": 12557,
    "nearest_expiry": "2026-10-21"
  },
  {
    "date": "2026-07-24",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 222,
    "received_qty": 0,
    "stock_on_hand": 12335,
    "nearest_expiry": "2026-10-22"
  },
  {
    "date": "2026-07-25",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 192,
    "received_qty": 0,
    "stock_on_hand": 12143,
    "nearest_expiry": "2026-10-23"
  },
  {
    "date": "2026-07-26",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 182,
    "received_qty": 0,
    "stock_on_hand": 11961,
    "nearest_expiry": "2026-10-24"
  },
  {
    "date": "2026-07-27",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 218,
    "received_qty": 0,
    "stock_on_hand": 11743,
    "nearest_expiry": "2026-10-25"
  },
  {
    "date": "2026-07-28",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 199,
    "received_qty": 1260,
    "stock_on_hand": 12804,
    "nearest_expiry": "2026-10-26"
  },
  {
    "date": "2026-07-29",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 236,
    "received_qty": 1260,
    "stock_on_hand": 13828,
    "nearest_expiry": "2026-10-27"
  },
  {
    "date": "2026-07-30",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 202,
    "received_qty": 0,
    "stock_on_hand": 13626,
    "nearest_expiry": "2026-10-28"
  },
  {
    "date": "2026-07-31",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 231,
    "received_qty": 1260,
    "stock_on_hand": 14655,
    "nearest_expiry": "2026-10-29"
  },
  {
    "date": "2026-08-01",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 189,
    "received_qty": 0,
    "stock_on_hand": 14466,
    "nearest_expiry": "2026-10-30"
  },
  {
    "date": "2026-08-02",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 205,
    "received_qty": 0,
    "stock_on_hand": 14261,
    "nearest_expiry": "2026-10-31"
  },
  {
    "date": "2026-08-03",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 234,
    "received_qty": 2520,
    "stock_on_hand": 16547,
    "nearest_expiry": "2026-11-01"
  },
  {
    "date": "2026-08-04",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 199,
    "received_qty": 0,
    "stock_on_hand": 16348,
    "nearest_expiry": "2026-11-02"
  },
  {
    "date": "2026-08-05",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 241,
    "received_qty": 0,
    "stock_on_hand": 16107,
    "nearest_expiry": "2026-11-03"
  },
  {
    "date": "2026-08-06",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 198,
    "received_qty": 0,
    "stock_on_hand": 15909,
    "nearest_expiry": "2026-11-04"
  },
  {
    "date": "2026-08-07",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 184,
    "received_qty": 0,
    "stock_on_hand": 15725,
    "nearest_expiry": "2026-11-05"
  },
  {
    "date": "2026-08-08",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 211,
    "received_qty": 2520,
    "stock_on_hand": 18034,
    "nearest_expiry": "2026-11-06"
  },
  {
    "date": "2026-08-09",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 199,
    "received_qty": 0,
    "stock_on_hand": 17835,
    "nearest_expiry": "2026-11-07"
  },
  {
    "date": "2026-08-10",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 240,
    "received_qty": 0,
    "stock_on_hand": 17595,
    "nearest_expiry": "2026-11-08"
  },
  {
    "date": "2026-08-11",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 235,
    "received_qty": 0,
    "stock_on_hand": 17360,
    "nearest_expiry": "2026-11-09"
  },
  {
    "date": "2026-08-12",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 165,
    "received_qty": 0,
    "stock_on_hand": 17195,
    "nearest_expiry": "2026-11-10"
  },
  {
    "date": "2026-08-13",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 191,
    "received_qty": 0,
    "stock_on_hand": 17004,
    "nearest_expiry": "2026-11-11"
  },
  {
    "date": "2026-08-14",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 190,
    "received_qty": 1260,
    "stock_on_hand": 18074,
    "nearest_expiry": "2026-11-12"
  },
  {
    "date": "2026-08-15",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 219,
    "received_qty": 0,
    "stock_on_hand": 17855,
    "nearest_expiry": "2026-11-13"
  },
  {
    "date": "2026-08-16",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 201,
    "received_qty": 0,
    "stock_on_hand": 17654,
    "nearest_expiry": "2026-11-14"
  },
  {
    "date": "2026-08-17",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 246,
    "received_qty": 0,
    "stock_on_hand": 17408,
    "nearest_expiry": "2026-11-15"
  },
  {
    "date": "2026-08-18",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 227,
    "received_qty": 0,
    "stock_on_hand": 17181,
    "nearest_expiry": "2026-11-16"
  },
  {
    "date": "2026-08-19",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 221,
    "received_qty": 2520,
    "stock_on_hand": 19480,
    "nearest_expiry": "2026-11-17"
  },
  {
    "date": "2026-08-20",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 207,
    "received_qty": 1260,
    "stock_on_hand": 20533,
    "nearest_expiry": "2026-11-18"
  },
  {
    "date": "2026-08-21",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 206,
    "received_qty": 0,
    "stock_on_hand": 20327,
    "nearest_expiry": "2026-11-19"
  },
  {
    "date": "2026-08-22",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 206,
    "received_qty": 0,
    "stock_on_hand": 20121,
    "nearest_expiry": "2026-11-20"
  },
  {
    "date": "2026-08-23",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 204,
    "received_qty": 0,
    "stock_on_hand": 19917,
    "nearest_expiry": "2026-11-21"
  },
  {
    "date": "2026-08-24",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 296,
    "received_qty": 0,
    "stock_on_hand": 19621,
    "nearest_expiry": "2026-11-22"
  },
  {
    "date": "2026-08-25",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 216,
    "received_qty": 1260,
    "stock_on_hand": 20665,
    "nearest_expiry": "2026-11-23"
  },
  {
    "date": "2026-08-26",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 181,
    "received_qty": 1260,
    "stock_on_hand": 21744,
    "nearest_expiry": "2026-11-24"
  },
  {
    "date": "2026-08-27",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 219,
    "received_qty": 0,
    "stock_on_hand": 21525,
    "nearest_expiry": "2026-11-25"
  },
  {
    "date": "2026-08-28",
    "medicine": "Paracetamol 500mg",
    "form": "TABLET",
    "daily_consumption": 197,
    "received_qty": 1260,
    "stock_on_hand": 22588,
    "nearest_expiry": "2026-11-26"
  },
  {
    "date": "2026-05-01",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 94,
    "received_qty": 0,
    "stock_on_hand": 606,
    "nearest_expiry": "2026-06-30"
  },
  {
    "date": "2026-05-02",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 103,
    "received_qty": 840,
    "stock_on_hand": 1343,
    "nearest_expiry": "2026-07-01"
  },
  {
    "date": "2026-05-03",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 141,
    "received_qty": 0,
    "stock_on_hand": 1202,
    "nearest_expiry": "2026-07-02"
  },
  {
    "date": "2026-05-04",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 123,
    "received_qty": 0,
    "stock_on_hand": 1079,
    "nearest_expiry": "2026-07-03"
  },
  {
    "date": "2026-05-05",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 111,
    "received_qty": 0,
    "stock_on_hand": 968,
    "nearest_expiry": "2026-07-04"
  },
  {
    "date": "2026-05-06",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 147,
    "received_qty": 0,
    "stock_on_hand": 821,
    "nearest_expiry": "2026-07-05"
  },
  {
    "date": "2026-05-07",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 108,
    "received_qty": 840,
    "stock_on_hand": 1553,
    "nearest_expiry": "2026-07-06"
  },
  {
    "date": "2026-05-08",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 156,
    "received_qty": 0,
    "stock_on_hand": 1397,
    "nearest_expiry": "2026-07-07"
  },
  {
    "date": "2026-05-09",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 112,
    "received_qty": 0,
    "stock_on_hand": 1285,
    "nearest_expiry": "2026-07-08"
  },
  {
    "date": "2026-05-10",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 137,
    "received_qty": 0,
    "stock_on_hand": 1148,
    "nearest_expiry": "2026-07-09"
  },
  {
    "date": "2026-05-11",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 133,
    "received_qty": 840,
    "stock_on_hand": 1855,
    "nearest_expiry": "2026-07-10"
  },
  {
    "date": "2026-05-12",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 143,
    "received_qty": 0,
    "stock_on_hand": 1712,
    "nearest_expiry": "2026-07-11"
  },
  {
    "date": "2026-05-13",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 121,
    "received_qty": 0,
    "stock_on_hand": 1591,
    "nearest_expiry": "2026-07-12"
  },
  {
    "date": "2026-05-14",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 119,
    "received_qty": 0,
    "stock_on_hand": 1472,
    "nearest_expiry": "2026-07-13"
  },
  {
    "date": "2026-05-15",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 125,
    "received_qty": 0,
    "stock_on_hand": 1347,
    "nearest_expiry": "2026-07-14"
  },
  {
    "date": "2026-05-16",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 123,
    "received_qty": 0,
    "stock_on_hand": 1224,
    "nearest_expiry": "2026-07-15"
  },
  {
    "date": "2026-05-17",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 120,
    "received_qty": 0,
    "stock_on_hand": 1104,
    "nearest_expiry": "2026-07-16"
  },
  {
    "date": "2026-05-18",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 139,
    "received_qty": 840,
    "stock_on_hand": 1805,
    "nearest_expiry": "2026-07-17"
  },
  {
    "date": "2026-05-19",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 128,
    "received_qty": 0,
    "stock_on_hand": 1677,
    "nearest_expiry": "2026-07-18"
  },
  {
    "date": "2026-05-20",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 122,
    "received_qty": 0,
    "stock_on_hand": 1555,
    "nearest_expiry": "2026-07-19"
  },
  {
    "date": "2026-05-21",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 143,
    "received_qty": 0,
    "stock_on_hand": 1412,
    "nearest_expiry": "2026-07-20"
  },
  {
    "date": "2026-05-22",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 114,
    "received_qty": 0,
    "stock_on_hand": 1298,
    "nearest_expiry": "2026-07-21"
  },
  {
    "date": "2026-05-23",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 122,
    "received_qty": 0,
    "stock_on_hand": 1176,
    "nearest_expiry": "2026-07-22"
  },
  {
    "date": "2026-05-24",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 133,
    "received_qty": 0,
    "stock_on_hand": 1043,
    "nearest_expiry": "2026-07-23"
  },
  {
    "date": "2026-05-25",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 146,
    "received_qty": 0,
    "stock_on_hand": 897,
    "nearest_expiry": "2026-07-24"
  },
  {
    "date": "2026-05-26",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 152,
    "received_qty": 840,
    "stock_on_hand": 1585,
    "nearest_expiry": "2026-07-25"
  },
  {
    "date": "2026-05-27",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 111,
    "received_qty": 840,
    "stock_on_hand": 2314,
    "nearest_expiry": "2026-07-26"
  },
  {
    "date": "2026-05-28",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 128,
    "received_qty": 0,
    "stock_on_hand": 2186,
    "nearest_expiry": "2026-07-27"
  },
  {
    "date": "2026-05-29",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 121,
    "received_qty": 0,
    "stock_on_hand": 2065,
    "nearest_expiry": "2026-07-28"
  },
  {
    "date": "2026-05-30",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 117,
    "received_qty": 0,
    "stock_on_hand": 1948,
    "nearest_expiry": "2026-07-29"
  },
  {
    "date": "2026-05-31",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 138,
    "received_qty": 0,
    "stock_on_hand": 1810,
    "nearest_expiry": "2026-07-30"
  },
  {
    "date": "2026-06-01",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 137,
    "received_qty": 0,
    "stock_on_hand": 1673,
    "nearest_expiry": "2026-07-31"
  },
  {
    "date": "2026-06-02",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 145,
    "received_qty": 0,
    "stock_on_hand": 1528,
    "nearest_expiry": "2026-08-01"
  },
  {
    "date": "2026-06-03",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 104,
    "received_qty": 0,
    "stock_on_hand": 1424,
    "nearest_expiry": "2026-08-02"
  },
  {
    "date": "2026-06-04",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 148,
    "received_qty": 0,
    "stock_on_hand": 1276,
    "nearest_expiry": "2026-08-03"
  },
  {
    "date": "2026-06-05",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 137,
    "received_qty": 0,
    "stock_on_hand": 1139,
    "nearest_expiry": "2026-08-04"
  },
  {
    "date": "2026-06-06",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 121,
    "received_qty": 0,
    "stock_on_hand": 1018,
    "nearest_expiry": "2026-08-05"
  },
  {
    "date": "2026-06-07",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 118,
    "received_qty": 1680,
    "stock_on_hand": 2580,
    "nearest_expiry": "2026-08-06"
  },
  {
    "date": "2026-06-08",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 150,
    "received_qty": 0,
    "stock_on_hand": 2430,
    "nearest_expiry": "2026-08-07"
  },
  {
    "date": "2026-06-09",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 159,
    "received_qty": 0,
    "stock_on_hand": 2271,
    "nearest_expiry": "2026-08-08"
  },
  {
    "date": "2026-06-10",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 149,
    "received_qty": 0,
    "stock_on_hand": 2122,
    "nearest_expiry": "2026-08-09"
  },
  {
    "date": "2026-06-11",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 138,
    "received_qty": 0,
    "stock_on_hand": 1984,
    "nearest_expiry": "2026-08-10"
  },
  {
    "date": "2026-06-12",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 128,
    "received_qty": 0,
    "stock_on_hand": 1856,
    "nearest_expiry": "2026-08-11"
  },
  {
    "date": "2026-06-13",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 135,
    "received_qty": 0,
    "stock_on_hand": 1721,
    "nearest_expiry": "2026-08-12"
  },
  {
    "date": "2026-06-14",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 132,
    "received_qty": 840,
    "stock_on_hand": 2429,
    "nearest_expiry": "2026-08-13"
  },
  {
    "date": "2026-06-15",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 144,
    "received_qty": 0,
    "stock_on_hand": 2285,
    "nearest_expiry": "2026-08-14"
  },
  {
    "date": "2026-06-16",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 154,
    "received_qty": 0,
    "stock_on_hand": 2131,
    "nearest_expiry": "2026-08-15"
  },
  {
    "date": "2026-06-17",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 138,
    "received_qty": 1680,
    "stock_on_hand": 3673,
    "nearest_expiry": "2026-08-16"
  },
  {
    "date": "2026-06-18",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 128,
    "received_qty": 1680,
    "stock_on_hand": 5225,
    "nearest_expiry": "2026-08-17"
  },
  {
    "date": "2026-06-19",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 122,
    "received_qty": 0,
    "stock_on_hand": 5103,
    "nearest_expiry": "2026-08-18"
  },
  {
    "date": "2026-06-20",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 132,
    "received_qty": 840,
    "stock_on_hand": 5811,
    "nearest_expiry": "2026-08-19"
  },
  {
    "date": "2026-06-21",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 111,
    "received_qty": 0,
    "stock_on_hand": 5700,
    "nearest_expiry": "2026-08-20"
  },
  {
    "date": "2026-06-22",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 127,
    "received_qty": 0,
    "stock_on_hand": 5573,
    "nearest_expiry": "2026-08-21"
  },
  {
    "date": "2026-06-23",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 150,
    "received_qty": 0,
    "stock_on_hand": 5423,
    "nearest_expiry": "2026-08-22"
  },
  {
    "date": "2026-06-24",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 138,
    "received_qty": 0,
    "stock_on_hand": 5285,
    "nearest_expiry": "2026-08-23"
  },
  {
    "date": "2026-06-25",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 134,
    "received_qty": 840,
    "stock_on_hand": 5991,
    "nearest_expiry": "2026-08-24"
  },
  {
    "date": "2026-06-26",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 135,
    "received_qty": 0,
    "stock_on_hand": 5856,
    "nearest_expiry": "2026-08-25"
  },
  {
    "date": "2026-06-27",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 99,
    "received_qty": 1680,
    "stock_on_hand": 7437,
    "nearest_expiry": "2026-08-26"
  },
  {
    "date": "2026-06-28",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 133,
    "received_qty": 0,
    "stock_on_hand": 7304,
    "nearest_expiry": "2026-08-27"
  },
  {
    "date": "2026-06-29",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 168,
    "received_qty": 0,
    "stock_on_hand": 7136,
    "nearest_expiry": "2026-08-28"
  },
  {
    "date": "2026-06-30",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 159,
    "received_qty": 840,
    "stock_on_hand": 7817,
    "nearest_expiry": "2026-08-29"
  },
  {
    "date": "2026-07-01",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 142,
    "received_qty": 0,
    "stock_on_hand": 7675,
    "nearest_expiry": "2026-08-30"
  },
  {
    "date": "2026-07-02",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 134,
    "received_qty": 840,
    "stock_on_hand": 8381,
    "nearest_expiry": "2026-08-31"
  },
  {
    "date": "2026-07-03",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 135,
    "received_qty": 0,
    "stock_on_hand": 8246,
    "nearest_expiry": "2026-09-01"
  },
  {
    "date": "2026-07-04",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 124,
    "received_qty": 0,
    "stock_on_hand": 8122,
    "nearest_expiry": "2026-09-02"
  },
  {
    "date": "2026-07-05",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 131,
    "received_qty": 1680,
    "stock_on_hand": 9671,
    "nearest_expiry": "2026-09-03"
  },
  {
    "date": "2026-07-06",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 132,
    "received_qty": 0,
    "stock_on_hand": 9539,
    "nearest_expiry": "2026-09-04"
  },
  {
    "date": "2026-07-07",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 170,
    "received_qty": 0,
    "stock_on_hand": 9369,
    "nearest_expiry": "2026-09-05"
  },
  {
    "date": "2026-07-08",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 121,
    "received_qty": 840,
    "stock_on_hand": 10088,
    "nearest_expiry": "2026-09-06"
  },
  {
    "date": "2026-07-09",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 144,
    "received_qty": 0,
    "stock_on_hand": 9944,
    "nearest_expiry": "2026-09-07"
  },
  {
    "date": "2026-07-10",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 150,
    "received_qty": 0,
    "stock_on_hand": 9794,
    "nearest_expiry": "2026-09-08"
  },
  {
    "date": "2026-07-11",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 138,
    "received_qty": 0,
    "stock_on_hand": 9656,
    "nearest_expiry": "2026-09-09"
  },
  {
    "date": "2026-07-12",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 157,
    "received_qty": 0,
    "stock_on_hand": 9499,
    "nearest_expiry": "2026-09-10"
  },
  {
    "date": "2026-07-13",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 119,
    "received_qty": 0,
    "stock_on_hand": 9380,
    "nearest_expiry": "2026-09-11"
  },
  {
    "date": "2026-07-14",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 142,
    "received_qty": 0,
    "stock_on_hand": 9238,
    "nearest_expiry": "2026-09-12"
  },
  {
    "date": "2026-07-15",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 151,
    "received_qty": 840,
    "stock_on_hand": 9927,
    "nearest_expiry": "2026-09-13"
  },
  {
    "date": "2026-07-16",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 117,
    "received_qty": 0,
    "stock_on_hand": 9810,
    "nearest_expiry": "2026-09-14"
  },
  {
    "date": "2026-07-17",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 123,
    "received_qty": 0,
    "stock_on_hand": 9687,
    "nearest_expiry": "2026-09-15"
  },
  {
    "date": "2026-07-18",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 135,
    "received_qty": 840,
    "stock_on_hand": 10392,
    "nearest_expiry": "2026-09-16"
  },
  {
    "date": "2026-07-19",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 111,
    "received_qty": 1680,
    "stock_on_hand": 11961,
    "nearest_expiry": "2026-09-17"
  },
  {
    "date": "2026-07-20",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 151,
    "received_qty": 0,
    "stock_on_hand": 11810,
    "nearest_expiry": "2026-09-18"
  },
  {
    "date": "2026-07-21",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 158,
    "received_qty": 0,
    "stock_on_hand": 11652,
    "nearest_expiry": "2026-09-19"
  },
  {
    "date": "2026-07-22",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 137,
    "received_qty": 0,
    "stock_on_hand": 11515,
    "nearest_expiry": "2026-09-20"
  },
  {
    "date": "2026-07-23",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 138,
    "received_qty": 0,
    "stock_on_hand": 11377,
    "nearest_expiry": "2026-09-21"
  },
  {
    "date": "2026-07-24",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 126,
    "received_qty": 0,
    "stock_on_hand": 11251,
    "nearest_expiry": "2026-09-22"
  },
  {
    "date": "2026-07-25",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 132,
    "received_qty": 0,
    "stock_on_hand": 11119,
    "nearest_expiry": "2026-09-23"
  },
  {
    "date": "2026-07-26",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 125,
    "received_qty": 0,
    "stock_on_hand": 10994,
    "nearest_expiry": "2026-09-24"
  },
  {
    "date": "2026-07-27",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 148,
    "received_qty": 0,
    "stock_on_hand": 10846,
    "nearest_expiry": "2026-09-25"
  },
  {
    "date": "2026-07-28",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 165,
    "received_qty": 0,
    "stock_on_hand": 10681,
    "nearest_expiry": "2026-09-26"
  },
  {
    "date": "2026-07-29",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 118,
    "received_qty": 0,
    "stock_on_hand": 10563,
    "nearest_expiry": "2026-09-27"
  },
  {
    "date": "2026-07-30",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 104,
    "received_qty": 0,
    "stock_on_hand": 10459,
    "nearest_expiry": "2026-09-28"
  },
  {
    "date": "2026-07-31",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 147,
    "received_qty": 840,
    "stock_on_hand": 11152,
    "nearest_expiry": "2026-09-29"
  },
  {
    "date": "2026-08-01",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 134,
    "received_qty": 0,
    "stock_on_hand": 11018,
    "nearest_expiry": "2026-09-30"
  },
  {
    "date": "2026-08-02",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 149,
    "received_qty": 0,
    "stock_on_hand": 10869,
    "nearest_expiry": "2026-10-01"
  },
  {
    "date": "2026-08-03",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 142,
    "received_qty": 0,
    "stock_on_hand": 10727,
    "nearest_expiry": "2026-10-02"
  },
  {
    "date": "2026-08-04",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 152,
    "received_qty": 0,
    "stock_on_hand": 10575,
    "nearest_expiry": "2026-10-03"
  },
  {
    "date": "2026-08-05",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 139,
    "received_qty": 840,
    "stock_on_hand": 11276,
    "nearest_expiry": "2026-10-04"
  },
  {
    "date": "2026-08-06",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 129,
    "received_qty": 0,
    "stock_on_hand": 11147,
    "nearest_expiry": "2026-10-05"
  },
  {
    "date": "2026-08-07",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 125,
    "received_qty": 0,
    "stock_on_hand": 11022,
    "nearest_expiry": "2026-10-06"
  },
  {
    "date": "2026-08-08",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 143,
    "received_qty": 1680,
    "stock_on_hand": 12559,
    "nearest_expiry": "2026-10-07"
  },
  {
    "date": "2026-08-09",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 114,
    "received_qty": 0,
    "stock_on_hand": 12445,
    "nearest_expiry": "2026-10-08"
  },
  {
    "date": "2026-08-10",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 139,
    "received_qty": 0,
    "stock_on_hand": 12306,
    "nearest_expiry": "2026-10-09"
  },
  {
    "date": "2026-08-11",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 153,
    "received_qty": 0,
    "stock_on_hand": 12153,
    "nearest_expiry": "2026-10-10"
  },
  {
    "date": "2026-08-12",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 151,
    "received_qty": 0,
    "stock_on_hand": 12002,
    "nearest_expiry": "2026-10-11"
  },
  {
    "date": "2026-08-13",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 131,
    "received_qty": 1680,
    "stock_on_hand": 13551,
    "nearest_expiry": "2026-10-12"
  },
  {
    "date": "2026-08-14",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 130,
    "received_qty": 840,
    "stock_on_hand": 14261,
    "nearest_expiry": "2026-10-13"
  },
  {
    "date": "2026-08-15",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 131,
    "received_qty": 0,
    "stock_on_hand": 14130,
    "nearest_expiry": "2026-10-14"
  },
  {
    "date": "2026-08-16",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 139,
    "received_qty": 1680,
    "stock_on_hand": 15671,
    "nearest_expiry": "2026-10-15"
  },
  {
    "date": "2026-08-17",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 151,
    "received_qty": 0,
    "stock_on_hand": 15520,
    "nearest_expiry": "2026-10-16"
  },
  {
    "date": "2026-08-18",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 173,
    "received_qty": 0,
    "stock_on_hand": 15347,
    "nearest_expiry": "2026-10-17"
  },
  {
    "date": "2026-08-19",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 155,
    "received_qty": 0,
    "stock_on_hand": 15192,
    "nearest_expiry": "2026-10-18"
  },
  {
    "date": "2026-08-20",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 138,
    "received_qty": 0,
    "stock_on_hand": 15054,
    "nearest_expiry": "2026-10-19"
  },
  {
    "date": "2026-08-21",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 168,
    "received_qty": 0,
    "stock_on_hand": 14886,
    "nearest_expiry": "2026-10-20"
  },
  {
    "date": "2026-08-22",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 136,
    "received_qty": 0,
    "stock_on_hand": 14750,
    "nearest_expiry": "2026-10-21"
  },
  {
    "date": "2026-08-23",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 149,
    "received_qty": 0,
    "stock_on_hand": 14601,
    "nearest_expiry": "2026-10-22"
  },
  {
    "date": "2026-08-24",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 163,
    "received_qty": 0,
    "stock_on_hand": 14438,
    "nearest_expiry": "2026-10-23"
  },
  {
    "date": "2026-08-25",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 163,
    "received_qty": 0,
    "stock_on_hand": 14275,
    "nearest_expiry": "2026-10-24"
  },
  {
    "date": "2026-08-26",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 119,
    "received_qty": 0,
    "stock_on_hand": 14156,
    "nearest_expiry": "2026-10-25"
  },
  {
    "date": "2026-08-27",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 125,
    "received_qty": 0,
    "stock_on_hand": 14031,
    "nearest_expiry": "2026-10-26"
  },
  {
    "date": "2026-08-28",
    "medicine": "Amoxicillin 500mg",
    "form": "CAPSULE",
    "daily_consumption": 137,
    "received_qty": 0,
    "stock_on_hand": 13894,
    "nearest_expiry": "2026-10-27"
  },
  {
    "date": "2026-05-01",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 50,
    "received_qty": 0,
    "stock_on_hand": 210,
    "nearest_expiry": "2026-05-31"
  },
  {
    "date": "2026-05-02",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 165,
    "nearest_expiry": "2026-06-01"
  },
  {
    "date": "2026-05-03",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 42,
    "received_qty": 0,
    "stock_on_hand": 123,
    "nearest_expiry": "2026-06-02"
  },
  {
    "date": "2026-05-04",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 54,
    "received_qty": 315,
    "stock_on_hand": 384,
    "nearest_expiry": "2026-06-03"
  },
  {
    "date": "2026-05-05",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 328,
    "nearest_expiry": "2026-06-04"
  },
  {
    "date": "2026-05-06",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 283,
    "nearest_expiry": "2026-06-05"
  },
  {
    "date": "2026-05-07",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 46,
    "received_qty": 0,
    "stock_on_hand": 237,
    "nearest_expiry": "2026-06-06"
  },
  {
    "date": "2026-05-08",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 46,
    "received_qty": 315,
    "stock_on_hand": 506,
    "nearest_expiry": "2026-06-07"
  },
  {
    "date": "2026-05-09",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 43,
    "received_qty": 0,
    "stock_on_hand": 463,
    "nearest_expiry": "2026-06-08"
  },
  {
    "date": "2026-05-10",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 40,
    "received_qty": 0,
    "stock_on_hand": 423,
    "nearest_expiry": "2026-06-09"
  },
  {
    "date": "2026-05-11",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 47,
    "received_qty": 0,
    "stock_on_hand": 376,
    "nearest_expiry": "2026-06-10"
  },
  {
    "date": "2026-05-12",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 54,
    "received_qty": 0,
    "stock_on_hand": 322,
    "nearest_expiry": "2026-06-11"
  },
  {
    "date": "2026-05-13",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 51,
    "received_qty": 0,
    "stock_on_hand": 271,
    "nearest_expiry": "2026-06-12"
  },
  {
    "date": "2026-05-14",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 226,
    "nearest_expiry": "2026-06-13"
  },
  {
    "date": "2026-05-15",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 181,
    "nearest_expiry": "2026-06-14"
  },
  {
    "date": "2026-05-16",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 36,
    "received_qty": 0,
    "stock_on_hand": 145,
    "nearest_expiry": "2026-06-15"
  },
  {
    "date": "2026-05-17",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 35,
    "received_qty": 315,
    "stock_on_hand": 425,
    "nearest_expiry": "2026-06-16"
  },
  {
    "date": "2026-05-18",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 366,
    "nearest_expiry": "2026-06-17"
  },
  {
    "date": "2026-05-19",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 48,
    "received_qty": 0,
    "stock_on_hand": 318,
    "nearest_expiry": "2026-06-18"
  },
  {
    "date": "2026-05-20",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 35,
    "received_qty": 630,
    "stock_on_hand": 913,
    "nearest_expiry": "2026-06-19"
  },
  {
    "date": "2026-05-21",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 58,
    "received_qty": 315,
    "stock_on_hand": 1170,
    "nearest_expiry": "2026-06-20"
  },
  {
    "date": "2026-05-22",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 44,
    "received_qty": 0,
    "stock_on_hand": 1126,
    "nearest_expiry": "2026-06-21"
  },
  {
    "date": "2026-05-23",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 38,
    "received_qty": 0,
    "stock_on_hand": 1088,
    "nearest_expiry": "2026-06-22"
  },
  {
    "date": "2026-05-24",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 1043,
    "nearest_expiry": "2026-06-23"
  },
  {
    "date": "2026-05-25",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 987,
    "nearest_expiry": "2026-06-24"
  },
  {
    "date": "2026-05-26",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 931,
    "nearest_expiry": "2026-06-25"
  },
  {
    "date": "2026-05-27",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 51,
    "received_qty": 630,
    "stock_on_hand": 1510,
    "nearest_expiry": "2026-06-26"
  },
  {
    "date": "2026-05-28",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 42,
    "received_qty": 315,
    "stock_on_hand": 1783,
    "nearest_expiry": "2026-06-27"
  },
  {
    "date": "2026-05-29",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 53,
    "received_qty": 0,
    "stock_on_hand": 1730,
    "nearest_expiry": "2026-06-28"
  },
  {
    "date": "2026-05-30",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 51,
    "received_qty": 0,
    "stock_on_hand": 1679,
    "nearest_expiry": "2026-06-29"
  },
  {
    "date": "2026-05-31",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 52,
    "received_qty": 315,
    "stock_on_hand": 1942,
    "nearest_expiry": "2026-06-30"
  },
  {
    "date": "2026-06-01",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 54,
    "received_qty": 0,
    "stock_on_hand": 1888,
    "nearest_expiry": "2026-07-01"
  },
  {
    "date": "2026-06-02",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 51,
    "received_qty": 0,
    "stock_on_hand": 1837,
    "nearest_expiry": "2026-07-02"
  },
  {
    "date": "2026-06-03",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 1792,
    "nearest_expiry": "2026-07-03"
  },
  {
    "date": "2026-06-04",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 40,
    "received_qty": 0,
    "stock_on_hand": 1752,
    "nearest_expiry": "2026-07-04"
  },
  {
    "date": "2026-06-05",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 1707,
    "nearest_expiry": "2026-07-05"
  },
  {
    "date": "2026-06-06",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 35,
    "received_qty": 0,
    "stock_on_hand": 1672,
    "nearest_expiry": "2026-07-06"
  },
  {
    "date": "2026-06-07",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 38,
    "received_qty": 315,
    "stock_on_hand": 1949,
    "nearest_expiry": "2026-07-07"
  },
  {
    "date": "2026-06-08",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 55,
    "received_qty": 0,
    "stock_on_hand": 1894,
    "nearest_expiry": "2026-07-08"
  },
  {
    "date": "2026-06-09",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 52,
    "received_qty": 315,
    "stock_on_hand": 2157,
    "nearest_expiry": "2026-07-09"
  },
  {
    "date": "2026-06-10",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 49,
    "received_qty": 0,
    "stock_on_hand": 2108,
    "nearest_expiry": "2026-07-10"
  },
  {
    "date": "2026-06-11",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 51,
    "received_qty": 0,
    "stock_on_hand": 2057,
    "nearest_expiry": "2026-07-11"
  },
  {
    "date": "2026-06-12",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 50,
    "received_qty": 0,
    "stock_on_hand": 2007,
    "nearest_expiry": "2026-07-12"
  },
  {
    "date": "2026-06-13",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 47,
    "received_qty": 315,
    "stock_on_hand": 2275,
    "nearest_expiry": "2026-07-13"
  },
  {
    "date": "2026-06-14",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 46,
    "received_qty": 315,
    "stock_on_hand": 2544,
    "nearest_expiry": "2026-07-14"
  },
  {
    "date": "2026-06-15",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 50,
    "received_qty": 315,
    "stock_on_hand": 2809,
    "nearest_expiry": "2026-07-15"
  },
  {
    "date": "2026-06-16",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 47,
    "received_qty": 0,
    "stock_on_hand": 2762,
    "nearest_expiry": "2026-07-16"
  },
  {
    "date": "2026-06-17",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 46,
    "received_qty": 0,
    "stock_on_hand": 2716,
    "nearest_expiry": "2026-07-17"
  },
  {
    "date": "2026-06-18",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 48,
    "received_qty": 315,
    "stock_on_hand": 2983,
    "nearest_expiry": "2026-07-18"
  },
  {
    "date": "2026-06-19",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 49,
    "received_qty": 0,
    "stock_on_hand": 2934,
    "nearest_expiry": "2026-07-19"
  },
  {
    "date": "2026-06-20",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 51,
    "received_qty": 0,
    "stock_on_hand": 2883,
    "nearest_expiry": "2026-07-20"
  },
  {
    "date": "2026-06-21",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 46,
    "received_qty": 315,
    "stock_on_hand": 3152,
    "nearest_expiry": "2026-07-21"
  },
  {
    "date": "2026-06-22",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 57,
    "received_qty": 0,
    "stock_on_hand": 3095,
    "nearest_expiry": "2026-07-22"
  },
  {
    "date": "2026-06-23",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 47,
    "received_qty": 0,
    "stock_on_hand": 3048,
    "nearest_expiry": "2026-07-23"
  },
  {
    "date": "2026-06-24",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 50,
    "received_qty": 0,
    "stock_on_hand": 2998,
    "nearest_expiry": "2026-07-24"
  },
  {
    "date": "2026-06-25",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 50,
    "received_qty": 630,
    "stock_on_hand": 3578,
    "nearest_expiry": "2026-07-25"
  },
  {
    "date": "2026-06-26",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 55,
    "received_qty": 0,
    "stock_on_hand": 3523,
    "nearest_expiry": "2026-07-26"
  },
  {
    "date": "2026-06-27",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 46,
    "received_qty": 315,
    "stock_on_hand": 3792,
    "nearest_expiry": "2026-07-27"
  },
  {
    "date": "2026-06-28",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 36,
    "received_qty": 630,
    "stock_on_hand": 4386,
    "nearest_expiry": "2026-07-28"
  },
  {
    "date": "2026-06-29",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 53,
    "received_qty": 315,
    "stock_on_hand": 4648,
    "nearest_expiry": "2026-07-29"
  },
  {
    "date": "2026-06-30",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 4589,
    "nearest_expiry": "2026-07-30"
  },
  {
    "date": "2026-07-01",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 43,
    "received_qty": 0,
    "stock_on_hand": 4546,
    "nearest_expiry": "2026-07-31"
  },
  {
    "date": "2026-07-02",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 50,
    "received_qty": 630,
    "stock_on_hand": 5126,
    "nearest_expiry": "2026-08-01"
  },
  {
    "date": "2026-07-03",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 43,
    "received_qty": 0,
    "stock_on_hand": 5083,
    "nearest_expiry": "2026-08-02"
  },
  {
    "date": "2026-07-04",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 5027,
    "nearest_expiry": "2026-08-03"
  },
  {
    "date": "2026-07-05",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 4982,
    "nearest_expiry": "2026-08-04"
  },
  {
    "date": "2026-07-06",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 48,
    "received_qty": 315,
    "stock_on_hand": 5249,
    "nearest_expiry": "2026-08-05"
  },
  {
    "date": "2026-07-07",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 53,
    "received_qty": 630,
    "stock_on_hand": 5826,
    "nearest_expiry": "2026-08-06"
  },
  {
    "date": "2026-07-08",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 51,
    "received_qty": 630,
    "stock_on_hand": 6405,
    "nearest_expiry": "2026-08-07"
  },
  {
    "date": "2026-07-09",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 52,
    "received_qty": 315,
    "stock_on_hand": 6668,
    "nearest_expiry": "2026-08-08"
  },
  {
    "date": "2026-07-10",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 6612,
    "nearest_expiry": "2026-08-09"
  },
  {
    "date": "2026-07-11",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 45,
    "received_qty": 315,
    "stock_on_hand": 6882,
    "nearest_expiry": "2026-08-10"
  },
  {
    "date": "2026-07-12",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 52,
    "received_qty": 0,
    "stock_on_hand": 6830,
    "nearest_expiry": "2026-08-11"
  },
  {
    "date": "2026-07-13",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 46,
    "received_qty": 0,
    "stock_on_hand": 6784,
    "nearest_expiry": "2026-08-12"
  },
  {
    "date": "2026-07-14",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 50,
    "received_qty": 0,
    "stock_on_hand": 6734,
    "nearest_expiry": "2026-08-13"
  },
  {
    "date": "2026-07-15",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 43,
    "received_qty": 315,
    "stock_on_hand": 7006,
    "nearest_expiry": "2026-08-14"
  },
  {
    "date": "2026-07-16",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 46,
    "received_qty": 0,
    "stock_on_hand": 6960,
    "nearest_expiry": "2026-08-15"
  },
  {
    "date": "2026-07-17",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 54,
    "received_qty": 0,
    "stock_on_hand": 6906,
    "nearest_expiry": "2026-08-16"
  },
  {
    "date": "2026-07-18",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 6861,
    "nearest_expiry": "2026-08-17"
  },
  {
    "date": "2026-07-19",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 46,
    "received_qty": 0,
    "stock_on_hand": 6815,
    "nearest_expiry": "2026-08-18"
  },
  {
    "date": "2026-07-20",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 58,
    "received_qty": 0,
    "stock_on_hand": 6757,
    "nearest_expiry": "2026-08-19"
  },
  {
    "date": "2026-07-21",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 6698,
    "nearest_expiry": "2026-08-20"
  },
  {
    "date": "2026-07-22",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 48,
    "received_qty": 0,
    "stock_on_hand": 6650,
    "nearest_expiry": "2026-08-21"
  },
  {
    "date": "2026-07-23",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 45,
    "received_qty": 315,
    "stock_on_hand": 6920,
    "nearest_expiry": "2026-08-22"
  },
  {
    "date": "2026-07-24",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 59,
    "received_qty": 315,
    "stock_on_hand": 7176,
    "nearest_expiry": "2026-08-23"
  },
  {
    "date": "2026-07-25",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 47,
    "received_qty": 0,
    "stock_on_hand": 7129,
    "nearest_expiry": "2026-08-24"
  },
  {
    "date": "2026-07-26",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 47,
    "received_qty": 0,
    "stock_on_hand": 7082,
    "nearest_expiry": "2026-08-25"
  },
  {
    "date": "2026-07-27",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 7026,
    "nearest_expiry": "2026-08-26"
  },
  {
    "date": "2026-07-28",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 60,
    "received_qty": 0,
    "stock_on_hand": 6966,
    "nearest_expiry": "2026-08-27"
  },
  {
    "date": "2026-07-29",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 43,
    "received_qty": 315,
    "stock_on_hand": 7238,
    "nearest_expiry": "2026-08-28"
  },
  {
    "date": "2026-07-30",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 62,
    "received_qty": 0,
    "stock_on_hand": 7176,
    "nearest_expiry": "2026-08-29"
  },
  {
    "date": "2026-07-31",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 49,
    "received_qty": 0,
    "stock_on_hand": 7127,
    "nearest_expiry": "2026-08-30"
  },
  {
    "date": "2026-08-01",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 52,
    "received_qty": 630,
    "stock_on_hand": 7705,
    "nearest_expiry": "2026-08-31"
  },
  {
    "date": "2026-08-02",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 43,
    "received_qty": 0,
    "stock_on_hand": 7662,
    "nearest_expiry": "2026-09-01"
  },
  {
    "date": "2026-08-03",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 58,
    "received_qty": 315,
    "stock_on_hand": 7919,
    "nearest_expiry": "2026-09-02"
  },
  {
    "date": "2026-08-04",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 68,
    "received_qty": 0,
    "stock_on_hand": 7851,
    "nearest_expiry": "2026-09-03"
  },
  {
    "date": "2026-08-05",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 60,
    "received_qty": 0,
    "stock_on_hand": 7791,
    "nearest_expiry": "2026-09-04"
  },
  {
    "date": "2026-08-06",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 55,
    "received_qty": 0,
    "stock_on_hand": 7736,
    "nearest_expiry": "2026-09-05"
  },
  {
    "date": "2026-08-07",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 47,
    "received_qty": 0,
    "stock_on_hand": 7689,
    "nearest_expiry": "2026-09-06"
  },
  {
    "date": "2026-08-08",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 7633,
    "nearest_expiry": "2026-09-07"
  },
  {
    "date": "2026-08-09",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 41,
    "received_qty": 315,
    "stock_on_hand": 7907,
    "nearest_expiry": "2026-09-08"
  },
  {
    "date": "2026-08-10",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 53,
    "received_qty": 0,
    "stock_on_hand": 7854,
    "nearest_expiry": "2026-09-09"
  },
  {
    "date": "2026-08-11",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 58,
    "received_qty": 0,
    "stock_on_hand": 7796,
    "nearest_expiry": "2026-09-10"
  },
  {
    "date": "2026-08-12",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 44,
    "received_qty": 315,
    "stock_on_hand": 8067,
    "nearest_expiry": "2026-09-11"
  },
  {
    "date": "2026-08-13",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 49,
    "received_qty": 0,
    "stock_on_hand": 8018,
    "nearest_expiry": "2026-09-12"
  },
  {
    "date": "2026-08-14",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 7962,
    "nearest_expiry": "2026-09-13"
  },
  {
    "date": "2026-08-15",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 46,
    "received_qty": 0,
    "stock_on_hand": 7916,
    "nearest_expiry": "2026-09-14"
  },
  {
    "date": "2026-08-16",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 54,
    "received_qty": 0,
    "stock_on_hand": 7862,
    "nearest_expiry": "2026-09-15"
  },
  {
    "date": "2026-08-17",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 73,
    "received_qty": 0,
    "stock_on_hand": 7789,
    "nearest_expiry": "2026-09-16"
  },
  {
    "date": "2026-08-18",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 61,
    "received_qty": 315,
    "stock_on_hand": 8043,
    "nearest_expiry": "2026-09-17"
  },
  {
    "date": "2026-08-19",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 57,
    "received_qty": 0,
    "stock_on_hand": 7986,
    "nearest_expiry": "2026-09-18"
  },
  {
    "date": "2026-08-20",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 7927,
    "nearest_expiry": "2026-09-19"
  },
  {
    "date": "2026-08-21",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 50,
    "received_qty": 0,
    "stock_on_hand": 7877,
    "nearest_expiry": "2026-09-20"
  },
  {
    "date": "2026-08-22",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 55,
    "received_qty": 0,
    "stock_on_hand": 7822,
    "nearest_expiry": "2026-09-21"
  },
  {
    "date": "2026-08-23",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 48,
    "received_qty": 630,
    "stock_on_hand": 8404,
    "nearest_expiry": "2026-09-22"
  },
  {
    "date": "2026-08-24",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 61,
    "received_qty": 0,
    "stock_on_hand": 8343,
    "nearest_expiry": "2026-09-23"
  },
  {
    "date": "2026-08-25",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 65,
    "received_qty": 630,
    "stock_on_hand": 8908,
    "nearest_expiry": "2026-09-24"
  },
  {
    "date": "2026-08-26",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 49,
    "received_qty": 0,
    "stock_on_hand": 8859,
    "nearest_expiry": "2026-09-25"
  },
  {
    "date": "2026-08-27",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 41,
    "received_qty": 0,
    "stock_on_hand": 8818,
    "nearest_expiry": "2026-09-26"
  },
  {
    "date": "2026-08-28",
    "medicine": "Insulin Glargine",
    "form": "VIAL",
    "daily_consumption": 48,
    "received_qty": 0,
    "stock_on_hand": 8770,
    "nearest_expiry": "2026-09-27"
  },
  {
    "date": "2026-05-01",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 178,
    "received_qty": 0,
    "stock_on_hand": 772,
    "nearest_expiry": "2026-08-29"
  },
  {
    "date": "2026-05-02",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 138,
    "received_qty": 0,
    "stock_on_hand": 634,
    "nearest_expiry": "2026-08-30"
  },
  {
    "date": "2026-05-03",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 170,
    "received_qty": 0,
    "stock_on_hand": 464,
    "nearest_expiry": "2026-08-31"
  },
  {
    "date": "2026-05-04",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 164,
    "received_qty": 0,
    "stock_on_hand": 300,
    "nearest_expiry": "2026-09-01"
  },
  {
    "date": "2026-05-05",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 176,
    "received_qty": 0,
    "stock_on_hand": 124,
    "nearest_expiry": "2026-09-02"
  },
  {
    "date": "2026-05-06",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 161,
    "received_qty": 0,
    "stock_on_hand": 0,
    "nearest_expiry": "2026-09-03"
  },
  {
    "date": "2026-05-07",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 145,
    "received_qty": 0,
    "stock_on_hand": 0,
    "nearest_expiry": "2026-09-04"
  },
  {
    "date": "2026-05-08",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 158,
    "received_qty": 0,
    "stock_on_hand": 0,
    "nearest_expiry": "2026-09-05"
  },
  {
    "date": "2026-05-09",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 131,
    "received_qty": 0,
    "stock_on_hand": 0,
    "nearest_expiry": "2026-09-06"
  },
  {
    "date": "2026-05-10",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 150,
    "received_qty": 1120,
    "stock_on_hand": 970,
    "nearest_expiry": "2026-09-07"
  },
  {
    "date": "2026-05-11",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 180,
    "received_qty": 0,
    "stock_on_hand": 790,
    "nearest_expiry": "2026-09-08"
  },
  {
    "date": "2026-05-12",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 141,
    "received_qty": 0,
    "stock_on_hand": 649,
    "nearest_expiry": "2026-09-09"
  },
  {
    "date": "2026-05-13",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 148,
    "received_qty": 0,
    "stock_on_hand": 501,
    "nearest_expiry": "2026-09-10"
  },
  {
    "date": "2026-05-14",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 168,
    "received_qty": 2240,
    "stock_on_hand": 2573,
    "nearest_expiry": "2026-09-11"
  },
  {
    "date": "2026-05-15",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 145,
    "received_qty": 0,
    "stock_on_hand": 2428,
    "nearest_expiry": "2026-09-12"
  },
  {
    "date": "2026-05-16",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 164,
    "received_qty": 0,
    "stock_on_hand": 2264,
    "nearest_expiry": "2026-09-13"
  },
  {
    "date": "2026-05-17",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 166,
    "received_qty": 0,
    "stock_on_hand": 2098,
    "nearest_expiry": "2026-09-14"
  },
  {
    "date": "2026-05-18",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 189,
    "received_qty": 0,
    "stock_on_hand": 1909,
    "nearest_expiry": "2026-09-15"
  },
  {
    "date": "2026-05-19",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 198,
    "received_qty": 0,
    "stock_on_hand": 1711,
    "nearest_expiry": "2026-09-16"
  },
  {
    "date": "2026-05-20",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 138,
    "received_qty": 0,
    "stock_on_hand": 1573,
    "nearest_expiry": "2026-09-17"
  },
  {
    "date": "2026-05-21",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 181,
    "received_qty": 0,
    "stock_on_hand": 1392,
    "nearest_expiry": "2026-09-18"
  },
  {
    "date": "2026-05-22",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 148,
    "received_qty": 1120,
    "stock_on_hand": 2364,
    "nearest_expiry": "2026-09-19"
  },
  {
    "date": "2026-05-23",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 160,
    "received_qty": 1120,
    "stock_on_hand": 3324,
    "nearest_expiry": "2026-09-20"
  },
  {
    "date": "2026-05-24",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 187,
    "received_qty": 0,
    "stock_on_hand": 3137,
    "nearest_expiry": "2026-09-21"
  },
  {
    "date": "2026-05-25",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 179,
    "received_qty": 1120,
    "stock_on_hand": 4078,
    "nearest_expiry": "2026-09-22"
  },
  {
    "date": "2026-05-26",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 186,
    "received_qty": 1120,
    "stock_on_hand": 5012,
    "nearest_expiry": "2026-09-23"
  },
  {
    "date": "2026-05-27",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 149,
    "received_qty": 0,
    "stock_on_hand": 4863,
    "nearest_expiry": "2026-09-24"
  },
  {
    "date": "2026-05-28",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 196,
    "received_qty": 0,
    "stock_on_hand": 4667,
    "nearest_expiry": "2026-09-25"
  },
  {
    "date": "2026-05-29",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 151,
    "received_qty": 0,
    "stock_on_hand": 4516,
    "nearest_expiry": "2026-09-26"
  },
  {
    "date": "2026-05-30",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 171,
    "received_qty": 0,
    "stock_on_hand": 4345,
    "nearest_expiry": "2026-09-27"
  },
  {
    "date": "2026-05-31",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 181,
    "received_qty": 0,
    "stock_on_hand": 4164,
    "nearest_expiry": "2026-09-28"
  },
  {
    "date": "2026-06-01",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 201,
    "received_qty": 0,
    "stock_on_hand": 3963,
    "nearest_expiry": "2026-09-29"
  },
  {
    "date": "2026-06-02",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 194,
    "received_qty": 0,
    "stock_on_hand": 3769,
    "nearest_expiry": "2026-09-30"
  },
  {
    "date": "2026-06-03",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 169,
    "received_qty": 0,
    "stock_on_hand": 3600,
    "nearest_expiry": "2026-10-01"
  },
  {
    "date": "2026-06-04",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 147,
    "received_qty": 0,
    "stock_on_hand": 3453,
    "nearest_expiry": "2026-10-02"
  },
  {
    "date": "2026-06-05",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 198,
    "received_qty": 0,
    "stock_on_hand": 3255,
    "nearest_expiry": "2026-10-03"
  },
  {
    "date": "2026-06-06",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 166,
    "received_qty": 0,
    "stock_on_hand": 3089,
    "nearest_expiry": "2026-10-04"
  },
  {
    "date": "2026-06-07",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 162,
    "received_qty": 0,
    "stock_on_hand": 2927,
    "nearest_expiry": "2026-10-05"
  },
  {
    "date": "2026-06-08",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 169,
    "received_qty": 0,
    "stock_on_hand": 2758,
    "nearest_expiry": "2026-10-06"
  },
  {
    "date": "2026-06-09",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 191,
    "received_qty": 2240,
    "stock_on_hand": 4807,
    "nearest_expiry": "2026-10-07"
  },
  {
    "date": "2026-06-10",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 169,
    "received_qty": 0,
    "stock_on_hand": 4638,
    "nearest_expiry": "2026-10-08"
  },
  {
    "date": "2026-06-11",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 200,
    "received_qty": 0,
    "stock_on_hand": 4438,
    "nearest_expiry": "2026-10-09"
  },
  {
    "date": "2026-06-12",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 170,
    "received_qty": 1120,
    "stock_on_hand": 5388,
    "nearest_expiry": "2026-10-10"
  },
  {
    "date": "2026-06-13",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 164,
    "received_qty": 0,
    "stock_on_hand": 5224,
    "nearest_expiry": "2026-10-11"
  },
  {
    "date": "2026-06-14",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 146,
    "received_qty": 0,
    "stock_on_hand": 5078,
    "nearest_expiry": "2026-10-12"
  },
  {
    "date": "2026-06-15",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 177,
    "received_qty": 0,
    "stock_on_hand": 4901,
    "nearest_expiry": "2026-10-13"
  },
  {
    "date": "2026-06-16",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 201,
    "received_qty": 0,
    "stock_on_hand": 4700,
    "nearest_expiry": "2026-10-14"
  },
  {
    "date": "2026-06-17",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 141,
    "received_qty": 0,
    "stock_on_hand": 4559,
    "nearest_expiry": "2026-10-15"
  },
  {
    "date": "2026-06-18",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 189,
    "received_qty": 0,
    "stock_on_hand": 4370,
    "nearest_expiry": "2026-10-16"
  },
  {
    "date": "2026-06-19",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 189,
    "received_qty": 0,
    "stock_on_hand": 4181,
    "nearest_expiry": "2026-10-17"
  },
  {
    "date": "2026-06-20",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 151,
    "received_qty": 0,
    "stock_on_hand": 4030,
    "nearest_expiry": "2026-10-18"
  },
  {
    "date": "2026-06-21",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 171,
    "received_qty": 0,
    "stock_on_hand": 3859,
    "nearest_expiry": "2026-10-19"
  },
  {
    "date": "2026-06-22",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 218,
    "received_qty": 0,
    "stock_on_hand": 3641,
    "nearest_expiry": "2026-10-20"
  },
  {
    "date": "2026-06-23",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 191,
    "received_qty": 2240,
    "stock_on_hand": 5690,
    "nearest_expiry": "2026-10-21"
  },
  {
    "date": "2026-06-24",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 167,
    "received_qty": 0,
    "stock_on_hand": 5523,
    "nearest_expiry": "2026-10-22"
  },
  {
    "date": "2026-06-25",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 170,
    "received_qty": 1120,
    "stock_on_hand": 6473,
    "nearest_expiry": "2026-10-23"
  },
  {
    "date": "2026-06-26",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 178,
    "received_qty": 0,
    "stock_on_hand": 6295,
    "nearest_expiry": "2026-10-24"
  },
  {
    "date": "2026-06-27",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 156,
    "received_qty": 1120,
    "stock_on_hand": 7259,
    "nearest_expiry": "2026-10-25"
  },
  {
    "date": "2026-06-28",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 160,
    "received_qty": 0,
    "stock_on_hand": 7099,
    "nearest_expiry": "2026-10-26"
  },
  {
    "date": "2026-06-29",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 200,
    "received_qty": 2240,
    "stock_on_hand": 9139,
    "nearest_expiry": "2026-10-27"
  },
  {
    "date": "2026-06-30",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 186,
    "received_qty": 0,
    "stock_on_hand": 8953,
    "nearest_expiry": "2026-10-28"
  },
  {
    "date": "2026-07-01",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 154,
    "received_qty": 0,
    "stock_on_hand": 8799,
    "nearest_expiry": "2026-10-29"
  },
  {
    "date": "2026-07-02",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 142,
    "received_qty": 1120,
    "stock_on_hand": 9777,
    "nearest_expiry": "2026-10-30"
  },
  {
    "date": "2026-07-03",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 176,
    "received_qty": 0,
    "stock_on_hand": 9601,
    "nearest_expiry": "2026-10-31"
  },
  {
    "date": "2026-07-04",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 189,
    "received_qty": 0,
    "stock_on_hand": 9412,
    "nearest_expiry": "2026-11-01"
  },
  {
    "date": "2026-07-05",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 175,
    "received_qty": 0,
    "stock_on_hand": 9237,
    "nearest_expiry": "2026-11-02"
  },
  {
    "date": "2026-07-06",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 175,
    "received_qty": 1120,
    "stock_on_hand": 10182,
    "nearest_expiry": "2026-11-03"
  },
  {
    "date": "2026-07-07",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 182,
    "received_qty": 1120,
    "stock_on_hand": 11120,
    "nearest_expiry": "2026-11-04"
  },
  {
    "date": "2026-07-08",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 171,
    "received_qty": 0,
    "stock_on_hand": 10949,
    "nearest_expiry": "2026-11-05"
  },
  {
    "date": "2026-07-09",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 209,
    "received_qty": 0,
    "stock_on_hand": 10740,
    "nearest_expiry": "2026-11-06"
  },
  {
    "date": "2026-07-10",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 210,
    "received_qty": 0,
    "stock_on_hand": 10530,
    "nearest_expiry": "2026-11-07"
  },
  {
    "date": "2026-07-11",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 200,
    "received_qty": 1120,
    "stock_on_hand": 11450,
    "nearest_expiry": "2026-11-08"
  },
  {
    "date": "2026-07-12",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 172,
    "received_qty": 0,
    "stock_on_hand": 11278,
    "nearest_expiry": "2026-11-09"
  },
  {
    "date": "2026-07-13",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 262,
    "received_qty": 0,
    "stock_on_hand": 11016,
    "nearest_expiry": "2026-11-10"
  },
  {
    "date": "2026-07-14",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 185,
    "received_qty": 0,
    "stock_on_hand": 10831,
    "nearest_expiry": "2026-11-11"
  },
  {
    "date": "2026-07-15",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 172,
    "received_qty": 0,
    "stock_on_hand": 10659,
    "nearest_expiry": "2026-11-12"
  },
  {
    "date": "2026-07-16",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 194,
    "received_qty": 0,
    "stock_on_hand": 10465,
    "nearest_expiry": "2026-11-13"
  },
  {
    "date": "2026-07-17",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 183,
    "received_qty": 0,
    "stock_on_hand": 10282,
    "nearest_expiry": "2026-11-14"
  },
  {
    "date": "2026-07-18",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 177,
    "received_qty": 0,
    "stock_on_hand": 10105,
    "nearest_expiry": "2026-11-15"
  },
  {
    "date": "2026-07-19",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 139,
    "received_qty": 2240,
    "stock_on_hand": 12206,
    "nearest_expiry": "2026-11-16"
  },
  {
    "date": "2026-07-20",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 181,
    "received_qty": 0,
    "stock_on_hand": 12025,
    "nearest_expiry": "2026-11-17"
  },
  {
    "date": "2026-07-21",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 200,
    "received_qty": 1120,
    "stock_on_hand": 12945,
    "nearest_expiry": "2026-11-18"
  },
  {
    "date": "2026-07-22",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 167,
    "received_qty": 0,
    "stock_on_hand": 12778,
    "nearest_expiry": "2026-11-19"
  },
  {
    "date": "2026-07-23",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 156,
    "received_qty": 0,
    "stock_on_hand": 12622,
    "nearest_expiry": "2026-11-20"
  },
  {
    "date": "2026-07-24",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 170,
    "received_qty": 0,
    "stock_on_hand": 12452,
    "nearest_expiry": "2026-11-21"
  },
  {
    "date": "2026-07-25",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 178,
    "received_qty": 0,
    "stock_on_hand": 12274,
    "nearest_expiry": "2026-11-22"
  },
  {
    "date": "2026-07-26",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 186,
    "received_qty": 0,
    "stock_on_hand": 12088,
    "nearest_expiry": "2026-11-23"
  },
  {
    "date": "2026-07-27",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 164,
    "received_qty": 0,
    "stock_on_hand": 11924,
    "nearest_expiry": "2026-11-24"
  },
  {
    "date": "2026-07-28",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 203,
    "received_qty": 0,
    "stock_on_hand": 11721,
    "nearest_expiry": "2026-11-25"
  },
  {
    "date": "2026-07-29",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 179,
    "received_qty": 1120,
    "stock_on_hand": 12662,
    "nearest_expiry": "2026-11-26"
  },
  {
    "date": "2026-07-30",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 186,
    "received_qty": 2240,
    "stock_on_hand": 14716,
    "nearest_expiry": "2026-11-27"
  },
  {
    "date": "2026-07-31",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 162,
    "received_qty": 2240,
    "stock_on_hand": 16794,
    "nearest_expiry": "2026-11-28"
  },
  {
    "date": "2026-08-01",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 156,
    "received_qty": 0,
    "stock_on_hand": 16638,
    "nearest_expiry": "2026-11-29"
  },
  {
    "date": "2026-08-02",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 197,
    "received_qty": 0,
    "stock_on_hand": 16441,
    "nearest_expiry": "2026-11-30"
  },
  {
    "date": "2026-08-03",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 153,
    "received_qty": 1120,
    "stock_on_hand": 17408,
    "nearest_expiry": "2026-12-01"
  },
  {
    "date": "2026-08-04",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 188,
    "received_qty": 0,
    "stock_on_hand": 17220,
    "nearest_expiry": "2026-12-02"
  },
  {
    "date": "2026-08-05",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 176,
    "received_qty": 0,
    "stock_on_hand": 17044,
    "nearest_expiry": "2026-12-03"
  },
  {
    "date": "2026-08-06",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 178,
    "received_qty": 1120,
    "stock_on_hand": 17986,
    "nearest_expiry": "2026-12-04"
  },
  {
    "date": "2026-08-07",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 171,
    "received_qty": 0,
    "stock_on_hand": 17815,
    "nearest_expiry": "2026-12-05"
  },
  {
    "date": "2026-08-08",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 185,
    "received_qty": 0,
    "stock_on_hand": 17630,
    "nearest_expiry": "2026-12-06"
  },
  {
    "date": "2026-08-09",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 184,
    "received_qty": 1120,
    "stock_on_hand": 18566,
    "nearest_expiry": "2026-12-07"
  },
  {
    "date": "2026-08-10",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 203,
    "received_qty": 0,
    "stock_on_hand": 18363,
    "nearest_expiry": "2026-12-08"
  },
  {
    "date": "2026-08-11",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 194,
    "received_qty": 0,
    "stock_on_hand": 18169,
    "nearest_expiry": "2026-12-09"
  },
  {
    "date": "2026-08-12",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 181,
    "received_qty": 0,
    "stock_on_hand": 17988,
    "nearest_expiry": "2026-12-10"
  },
  {
    "date": "2026-08-13",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 186,
    "received_qty": 1120,
    "stock_on_hand": 18922,
    "nearest_expiry": "2026-12-11"
  },
  {
    "date": "2026-08-14",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 171,
    "received_qty": 0,
    "stock_on_hand": 18751,
    "nearest_expiry": "2026-12-12"
  },
  {
    "date": "2026-08-15",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 188,
    "received_qty": 0,
    "stock_on_hand": 18563,
    "nearest_expiry": "2026-12-13"
  },
  {
    "date": "2026-08-16",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 196,
    "received_qty": 1120,
    "stock_on_hand": 19487,
    "nearest_expiry": "2026-12-14"
  },
  {
    "date": "2026-08-17",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 238,
    "received_qty": 0,
    "stock_on_hand": 19249,
    "nearest_expiry": "2026-12-15"
  },
  {
    "date": "2026-08-18",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 237,
    "received_qty": 0,
    "stock_on_hand": 19012,
    "nearest_expiry": "2026-12-16"
  },
  {
    "date": "2026-08-19",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 180,
    "received_qty": 2240,
    "stock_on_hand": 21072,
    "nearest_expiry": "2026-12-17"
  },
  {
    "date": "2026-08-20",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 189,
    "received_qty": 1120,
    "stock_on_hand": 22003,
    "nearest_expiry": "2026-12-18"
  },
  {
    "date": "2026-08-21",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 184,
    "received_qty": 0,
    "stock_on_hand": 21819,
    "nearest_expiry": "2026-12-19"
  },
  {
    "date": "2026-08-22",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 177,
    "received_qty": 0,
    "stock_on_hand": 21642,
    "nearest_expiry": "2026-12-20"
  },
  {
    "date": "2026-08-23",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 176,
    "received_qty": 0,
    "stock_on_hand": 21466,
    "nearest_expiry": "2026-12-21"
  },
  {
    "date": "2026-08-24",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 210,
    "received_qty": 2240,
    "stock_on_hand": 23496,
    "nearest_expiry": "2026-12-22"
  },
  {
    "date": "2026-08-25",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 235,
    "received_qty": 2240,
    "stock_on_hand": 25501,
    "nearest_expiry": "2026-12-23"
  },
  {
    "date": "2026-08-26",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 194,
    "received_qty": 0,
    "stock_on_hand": 25307,
    "nearest_expiry": "2026-12-24"
  },
  {
    "date": "2026-08-27",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 167,
    "received_qty": 0,
    "stock_on_hand": 25140,
    "nearest_expiry": "2026-12-25"
  },
  {
    "date": "2026-08-28",
    "medicine": "ORS Sachet",
    "form": "SACHET",
    "daily_consumption": 206,
    "received_qty": 0,
    "stock_on_hand": 24934,
    "nearest_expiry": "2026-12-26"
  },
  {
    "date": "2026-05-01",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 92,
    "received_qty": 0,
    "stock_on_hand": 408,
    "nearest_expiry": "2026-06-30"
  },
  {
    "date": "2026-05-02",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 91,
    "received_qty": 0,
    "stock_on_hand": 317,
    "nearest_expiry": "2026-07-01"
  },
  {
    "date": "2026-05-03",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 89,
    "received_qty": 0,
    "stock_on_hand": 228,
    "nearest_expiry": "2026-07-02"
  },
  {
    "date": "2026-05-04",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 105,
    "received_qty": 1260,
    "stock_on_hand": 1383,
    "nearest_expiry": "2026-07-03"
  },
  {
    "date": "2026-05-05",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 105,
    "received_qty": 0,
    "stock_on_hand": 1278,
    "nearest_expiry": "2026-07-04"
  },
  {
    "date": "2026-05-06",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 75,
    "received_qty": 0,
    "stock_on_hand": 1203,
    "nearest_expiry": "2026-07-05"
  },
  {
    "date": "2026-05-07",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 95,
    "received_qty": 0,
    "stock_on_hand": 1108,
    "nearest_expiry": "2026-07-06"
  },
  {
    "date": "2026-05-08",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 84,
    "received_qty": 0,
    "stock_on_hand": 1024,
    "nearest_expiry": "2026-07-07"
  },
  {
    "date": "2026-05-09",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 83,
    "received_qty": 0,
    "stock_on_hand": 941,
    "nearest_expiry": "2026-07-08"
  },
  {
    "date": "2026-05-10",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 88,
    "received_qty": 630,
    "stock_on_hand": 1483,
    "nearest_expiry": "2026-07-09"
  },
  {
    "date": "2026-05-11",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 119,
    "received_qty": 630,
    "stock_on_hand": 1994,
    "nearest_expiry": "2026-07-10"
  },
  {
    "date": "2026-05-12",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 92,
    "received_qty": 0,
    "stock_on_hand": 1902,
    "nearest_expiry": "2026-07-11"
  },
  {
    "date": "2026-05-13",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 91,
    "received_qty": 1260,
    "stock_on_hand": 3071,
    "nearest_expiry": "2026-07-12"
  },
  {
    "date": "2026-05-14",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 89,
    "received_qty": 0,
    "stock_on_hand": 2982,
    "nearest_expiry": "2026-07-13"
  },
  {
    "date": "2026-05-15",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 100,
    "received_qty": 0,
    "stock_on_hand": 2882,
    "nearest_expiry": "2026-07-14"
  },
  {
    "date": "2026-05-16",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 86,
    "received_qty": 0,
    "stock_on_hand": 2796,
    "nearest_expiry": "2026-07-15"
  },
  {
    "date": "2026-05-17",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 90,
    "received_qty": 630,
    "stock_on_hand": 3336,
    "nearest_expiry": "2026-07-16"
  },
  {
    "date": "2026-05-18",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 93,
    "received_qty": 0,
    "stock_on_hand": 3243,
    "nearest_expiry": "2026-07-17"
  },
  {
    "date": "2026-05-19",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 115,
    "received_qty": 0,
    "stock_on_hand": 3128,
    "nearest_expiry": "2026-07-18"
  },
  {
    "date": "2026-05-20",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 79,
    "received_qty": 0,
    "stock_on_hand": 3049,
    "nearest_expiry": "2026-07-19"
  },
  {
    "date": "2026-05-21",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 97,
    "received_qty": 0,
    "stock_on_hand": 2952,
    "nearest_expiry": "2026-07-20"
  },
  {
    "date": "2026-05-22",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 95,
    "received_qty": 0,
    "stock_on_hand": 2857,
    "nearest_expiry": "2026-07-21"
  },
  {
    "date": "2026-05-23",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 93,
    "received_qty": 0,
    "stock_on_hand": 2764,
    "nearest_expiry": "2026-07-22"
  },
  {
    "date": "2026-05-24",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 77,
    "received_qty": 630,
    "stock_on_hand": 3317,
    "nearest_expiry": "2026-07-23"
  },
  {
    "date": "2026-05-25",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 101,
    "received_qty": 0,
    "stock_on_hand": 3216,
    "nearest_expiry": "2026-07-24"
  },
  {
    "date": "2026-05-26",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 114,
    "received_qty": 1260,
    "stock_on_hand": 4362,
    "nearest_expiry": "2026-07-25"
  },
  {
    "date": "2026-05-27",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 110,
    "received_qty": 0,
    "stock_on_hand": 4252,
    "nearest_expiry": "2026-07-26"
  },
  {
    "date": "2026-05-28",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 93,
    "received_qty": 0,
    "stock_on_hand": 4159,
    "nearest_expiry": "2026-07-27"
  },
  {
    "date": "2026-05-29",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 101,
    "received_qty": 0,
    "stock_on_hand": 4058,
    "nearest_expiry": "2026-07-28"
  },
  {
    "date": "2026-05-30",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 91,
    "received_qty": 0,
    "stock_on_hand": 3967,
    "nearest_expiry": "2026-07-29"
  },
  {
    "date": "2026-05-31",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 90,
    "received_qty": 0,
    "stock_on_hand": 3877,
    "nearest_expiry": "2026-07-30"
  },
  {
    "date": "2026-06-01",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 101,
    "received_qty": 0,
    "stock_on_hand": 3776,
    "nearest_expiry": "2026-07-31"
  },
  {
    "date": "2026-06-02",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 106,
    "received_qty": 0,
    "stock_on_hand": 3670,
    "nearest_expiry": "2026-08-01"
  },
  {
    "date": "2026-06-03",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 101,
    "received_qty": 0,
    "stock_on_hand": 3569,
    "nearest_expiry": "2026-08-02"
  },
  {
    "date": "2026-06-04",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 102,
    "received_qty": 0,
    "stock_on_hand": 3467,
    "nearest_expiry": "2026-08-03"
  },
  {
    "date": "2026-06-05",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 83,
    "received_qty": 0,
    "stock_on_hand": 3384,
    "nearest_expiry": "2026-08-04"
  },
  {
    "date": "2026-06-06",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 87,
    "received_qty": 630,
    "stock_on_hand": 3927,
    "nearest_expiry": "2026-08-05"
  },
  {
    "date": "2026-06-07",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 82,
    "received_qty": 0,
    "stock_on_hand": 3845,
    "nearest_expiry": "2026-08-06"
  },
  {
    "date": "2026-06-08",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 107,
    "received_qty": 0,
    "stock_on_hand": 3738,
    "nearest_expiry": "2026-08-07"
  },
  {
    "date": "2026-06-09",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 103,
    "received_qty": 0,
    "stock_on_hand": 3635,
    "nearest_expiry": "2026-08-08"
  },
  {
    "date": "2026-06-10",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 99,
    "received_qty": 630,
    "stock_on_hand": 4166,
    "nearest_expiry": "2026-08-09"
  },
  {
    "date": "2026-06-11",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 99,
    "received_qty": 0,
    "stock_on_hand": 4067,
    "nearest_expiry": "2026-08-10"
  },
  {
    "date": "2026-06-12",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 76,
    "received_qty": 1260,
    "stock_on_hand": 5251,
    "nearest_expiry": "2026-08-11"
  },
  {
    "date": "2026-06-13",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 72,
    "received_qty": 0,
    "stock_on_hand": 5179,
    "nearest_expiry": "2026-08-12"
  },
  {
    "date": "2026-06-14",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 92,
    "received_qty": 0,
    "stock_on_hand": 5087,
    "nearest_expiry": "2026-08-13"
  },
  {
    "date": "2026-06-15",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 120,
    "received_qty": 0,
    "stock_on_hand": 4967,
    "nearest_expiry": "2026-08-14"
  },
  {
    "date": "2026-06-16",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 102,
    "received_qty": 0,
    "stock_on_hand": 4865,
    "nearest_expiry": "2026-08-15"
  },
  {
    "date": "2026-06-17",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 91,
    "received_qty": 630,
    "stock_on_hand": 5404,
    "nearest_expiry": "2026-08-16"
  },
  {
    "date": "2026-06-18",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 106,
    "received_qty": 0,
    "stock_on_hand": 5298,
    "nearest_expiry": "2026-08-17"
  },
  {
    "date": "2026-06-19",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 104,
    "received_qty": 630,
    "stock_on_hand": 5824,
    "nearest_expiry": "2026-08-18"
  },
  {
    "date": "2026-06-20",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 84,
    "received_qty": 0,
    "stock_on_hand": 5740,
    "nearest_expiry": "2026-08-19"
  },
  {
    "date": "2026-06-21",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 100,
    "received_qty": 0,
    "stock_on_hand": 5640,
    "nearest_expiry": "2026-08-20"
  },
  {
    "date": "2026-06-22",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 100,
    "received_qty": 0,
    "stock_on_hand": 5540,
    "nearest_expiry": "2026-08-21"
  },
  {
    "date": "2026-06-23",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 103,
    "received_qty": 630,
    "stock_on_hand": 6067,
    "nearest_expiry": "2026-08-22"
  },
  {
    "date": "2026-06-24",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 88,
    "received_qty": 1260,
    "stock_on_hand": 7239,
    "nearest_expiry": "2026-08-23"
  },
  {
    "date": "2026-06-25",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 85,
    "received_qty": 630,
    "stock_on_hand": 7784,
    "nearest_expiry": "2026-08-24"
  },
  {
    "date": "2026-06-26",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 99,
    "received_qty": 0,
    "stock_on_hand": 7685,
    "nearest_expiry": "2026-08-25"
  },
  {
    "date": "2026-06-27",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 81,
    "received_qty": 0,
    "stock_on_hand": 7604,
    "nearest_expiry": "2026-08-26"
  },
  {
    "date": "2026-06-28",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 95,
    "received_qty": 0,
    "stock_on_hand": 7509,
    "nearest_expiry": "2026-08-27"
  },
  {
    "date": "2026-06-29",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 111,
    "received_qty": 0,
    "stock_on_hand": 7398,
    "nearest_expiry": "2026-08-28"
  },
  {
    "date": "2026-06-30",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 108,
    "received_qty": 0,
    "stock_on_hand": 7290,
    "nearest_expiry": "2026-08-29"
  },
  {
    "date": "2026-07-01",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 94,
    "received_qty": 630,
    "stock_on_hand": 7826,
    "nearest_expiry": "2026-08-30"
  },
  {
    "date": "2026-07-02",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 92,
    "received_qty": 0,
    "stock_on_hand": 7734,
    "nearest_expiry": "2026-08-31"
  },
  {
    "date": "2026-07-03",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 88,
    "received_qty": 630,
    "stock_on_hand": 8276,
    "nearest_expiry": "2026-09-01"
  },
  {
    "date": "2026-07-04",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 108,
    "received_qty": 0,
    "stock_on_hand": 8168,
    "nearest_expiry": "2026-09-02"
  },
  {
    "date": "2026-07-05",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 93,
    "received_qty": 0,
    "stock_on_hand": 8075,
    "nearest_expiry": "2026-09-03"
  },
  {
    "date": "2026-07-06",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 108,
    "received_qty": 1260,
    "stock_on_hand": 9227,
    "nearest_expiry": "2026-09-04"
  },
  {
    "date": "2026-07-07",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 101,
    "received_qty": 0,
    "stock_on_hand": 9126,
    "nearest_expiry": "2026-09-05"
  },
  {
    "date": "2026-07-08",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 112,
    "received_qty": 0,
    "stock_on_hand": 9014,
    "nearest_expiry": "2026-09-06"
  },
  {
    "date": "2026-07-09",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 93,
    "received_qty": 1260,
    "stock_on_hand": 10181,
    "nearest_expiry": "2026-09-07"
  },
  {
    "date": "2026-07-10",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 102,
    "received_qty": 0,
    "stock_on_hand": 10079,
    "nearest_expiry": "2026-09-08"
  },
  {
    "date": "2026-07-11",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 100,
    "received_qty": 0,
    "stock_on_hand": 9979,
    "nearest_expiry": "2026-09-09"
  },
  {
    "date": "2026-07-12",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 97,
    "received_qty": 0,
    "stock_on_hand": 9882,
    "nearest_expiry": "2026-09-10"
  },
  {
    "date": "2026-07-13",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 96,
    "received_qty": 630,
    "stock_on_hand": 10416,
    "nearest_expiry": "2026-09-11"
  },
  {
    "date": "2026-07-14",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 119,
    "received_qty": 0,
    "stock_on_hand": 10297,
    "nearest_expiry": "2026-09-12"
  },
  {
    "date": "2026-07-15",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 94,
    "received_qty": 0,
    "stock_on_hand": 10203,
    "nearest_expiry": "2026-09-13"
  },
  {
    "date": "2026-07-16",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 108,
    "received_qty": 0,
    "stock_on_hand": 10095,
    "nearest_expiry": "2026-09-14"
  },
  {
    "date": "2026-07-17",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 94,
    "received_qty": 1260,
    "stock_on_hand": 11261,
    "nearest_expiry": "2026-09-15"
  },
  {
    "date": "2026-07-18",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 96,
    "received_qty": 0,
    "stock_on_hand": 11165,
    "nearest_expiry": "2026-09-16"
  },
  {
    "date": "2026-07-19",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 101,
    "received_qty": 1260,
    "stock_on_hand": 12324,
    "nearest_expiry": "2026-09-17"
  },
  {
    "date": "2026-07-20",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 127,
    "received_qty": 0,
    "stock_on_hand": 12197,
    "nearest_expiry": "2026-09-18"
  },
  {
    "date": "2026-07-21",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 120,
    "received_qty": 0,
    "stock_on_hand": 12077,
    "nearest_expiry": "2026-09-19"
  },
  {
    "date": "2026-07-22",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 106,
    "received_qty": 0,
    "stock_on_hand": 11971,
    "nearest_expiry": "2026-09-20"
  },
  {
    "date": "2026-07-23",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 108,
    "received_qty": 630,
    "stock_on_hand": 12493,
    "nearest_expiry": "2026-09-21"
  },
  {
    "date": "2026-07-24",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 93,
    "received_qty": 0,
    "stock_on_hand": 12400,
    "nearest_expiry": "2026-09-22"
  },
  {
    "date": "2026-07-25",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 106,
    "received_qty": 0,
    "stock_on_hand": 12294,
    "nearest_expiry": "2026-09-23"
  },
  {
    "date": "2026-07-26",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 95,
    "received_qty": 0,
    "stock_on_hand": 12199,
    "nearest_expiry": "2026-09-24"
  },
  {
    "date": "2026-07-27",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 111,
    "received_qty": 0,
    "stock_on_hand": 12088,
    "nearest_expiry": "2026-09-25"
  },
  {
    "date": "2026-07-28",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 115,
    "received_qty": 0,
    "stock_on_hand": 11973,
    "nearest_expiry": "2026-09-26"
  },
  {
    "date": "2026-07-29",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 98,
    "received_qty": 0,
    "stock_on_hand": 11875,
    "nearest_expiry": "2026-09-27"
  },
  {
    "date": "2026-07-30",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 92,
    "received_qty": 0,
    "stock_on_hand": 11783,
    "nearest_expiry": "2026-09-28"
  },
  {
    "date": "2026-07-31",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 102,
    "received_qty": 0,
    "stock_on_hand": 11681,
    "nearest_expiry": "2026-09-29"
  },
  {
    "date": "2026-08-01",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 96,
    "received_qty": 0,
    "stock_on_hand": 11585,
    "nearest_expiry": "2026-09-30"
  },
  {
    "date": "2026-08-02",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 96,
    "received_qty": 630,
    "stock_on_hand": 12119,
    "nearest_expiry": "2026-10-01"
  },
  {
    "date": "2026-08-03",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 114,
    "received_qty": 0,
    "stock_on_hand": 12005,
    "nearest_expiry": "2026-10-02"
  },
  {
    "date": "2026-08-04",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 91,
    "received_qty": 630,
    "stock_on_hand": 12544,
    "nearest_expiry": "2026-10-03"
  },
  {
    "date": "2026-08-05",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 100,
    "received_qty": 630,
    "stock_on_hand": 13074,
    "nearest_expiry": "2026-10-04"
  },
  {
    "date": "2026-08-06",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 117,
    "received_qty": 0,
    "stock_on_hand": 12957,
    "nearest_expiry": "2026-10-05"
  },
  {
    "date": "2026-08-07",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 117,
    "received_qty": 0,
    "stock_on_hand": 12840,
    "nearest_expiry": "2026-10-06"
  },
  {
    "date": "2026-08-08",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 100,
    "received_qty": 0,
    "stock_on_hand": 12740,
    "nearest_expiry": "2026-10-07"
  },
  {
    "date": "2026-08-09",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 99,
    "received_qty": 0,
    "stock_on_hand": 12641,
    "nearest_expiry": "2026-10-08"
  },
  {
    "date": "2026-08-10",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 89,
    "received_qty": 0,
    "stock_on_hand": 12552,
    "nearest_expiry": "2026-10-09"
  },
  {
    "date": "2026-08-11",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 110,
    "received_qty": 630,
    "stock_on_hand": 13072,
    "nearest_expiry": "2026-10-10"
  },
  {
    "date": "2026-08-12",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 111,
    "received_qty": 0,
    "stock_on_hand": 12961,
    "nearest_expiry": "2026-10-11"
  },
  {
    "date": "2026-08-13",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 100,
    "received_qty": 0,
    "stock_on_hand": 12861,
    "nearest_expiry": "2026-10-12"
  },
  {
    "date": "2026-08-14",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 115,
    "received_qty": 0,
    "stock_on_hand": 12746,
    "nearest_expiry": "2026-10-13"
  },
  {
    "date": "2026-08-15",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 110,
    "received_qty": 0,
    "stock_on_hand": 12636,
    "nearest_expiry": "2026-10-14"
  },
  {
    "date": "2026-08-16",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 95,
    "received_qty": 0,
    "stock_on_hand": 12541,
    "nearest_expiry": "2026-10-15"
  },
  {
    "date": "2026-08-17",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 118,
    "received_qty": 630,
    "stock_on_hand": 13053,
    "nearest_expiry": "2026-10-16"
  },
  {
    "date": "2026-08-18",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 135,
    "received_qty": 630,
    "stock_on_hand": 13548,
    "nearest_expiry": "2026-10-17"
  },
  {
    "date": "2026-08-19",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 90,
    "received_qty": 0,
    "stock_on_hand": 13458,
    "nearest_expiry": "2026-10-18"
  },
  {
    "date": "2026-08-20",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 101,
    "received_qty": 0,
    "stock_on_hand": 13357,
    "nearest_expiry": "2026-10-19"
  },
  {
    "date": "2026-08-21",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 89,
    "received_qty": 0,
    "stock_on_hand": 13268,
    "nearest_expiry": "2026-10-20"
  },
  {
    "date": "2026-08-22",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 92,
    "received_qty": 630,
    "stock_on_hand": 13806,
    "nearest_expiry": "2026-10-21"
  },
  {
    "date": "2026-08-23",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 119,
    "received_qty": 0,
    "stock_on_hand": 13687,
    "nearest_expiry": "2026-10-22"
  },
  {
    "date": "2026-08-24",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 114,
    "received_qty": 0,
    "stock_on_hand": 13573,
    "nearest_expiry": "2026-10-23"
  },
  {
    "date": "2026-08-25",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 96,
    "received_qty": 0,
    "stock_on_hand": 13477,
    "nearest_expiry": "2026-10-24"
  },
  {
    "date": "2026-08-26",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 95,
    "received_qty": 630,
    "stock_on_hand": 14012,
    "nearest_expiry": "2026-10-25"
  },
  {
    "date": "2026-08-27",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 89,
    "received_qty": 0,
    "stock_on_hand": 13923,
    "nearest_expiry": "2026-10-26"
  },
  {
    "date": "2026-08-28",
    "medicine": "Azithromycin 500mg",
    "form": "TABLET",
    "daily_consumption": 108,
    "received_qty": 0,
    "stock_on_hand": 13815,
    "nearest_expiry": "2026-10-27"
  },
  {
    "date": "2026-05-01",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 57,
    "received_qty": 0,
    "stock_on_hand": 263,
    "nearest_expiry": "2026-06-15"
  },
  {
    "date": "2026-05-02",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 57,
    "received_qty": 0,
    "stock_on_hand": 206,
    "nearest_expiry": "2026-06-16"
  },
  {
    "date": "2026-05-03",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 150,
    "nearest_expiry": "2026-06-17"
  },
  {
    "date": "2026-05-04",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 53,
    "received_qty": 385,
    "stock_on_hand": 482,
    "nearest_expiry": "2026-06-18"
  },
  {
    "date": "2026-05-05",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 64,
    "received_qty": 0,
    "stock_on_hand": 418,
    "nearest_expiry": "2026-06-19"
  },
  {
    "date": "2026-05-06",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 55,
    "received_qty": 0,
    "stock_on_hand": 363,
    "nearest_expiry": "2026-06-20"
  },
  {
    "date": "2026-05-07",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 61,
    "received_qty": 770,
    "stock_on_hand": 1072,
    "nearest_expiry": "2026-06-21"
  },
  {
    "date": "2026-05-08",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 60,
    "received_qty": 0,
    "stock_on_hand": 1012,
    "nearest_expiry": "2026-06-22"
  },
  {
    "date": "2026-05-09",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 64,
    "received_qty": 0,
    "stock_on_hand": 948,
    "nearest_expiry": "2026-06-23"
  },
  {
    "date": "2026-05-10",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 49,
    "received_qty": 0,
    "stock_on_hand": 899,
    "nearest_expiry": "2026-06-24"
  },
  {
    "date": "2026-05-11",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 843,
    "nearest_expiry": "2026-06-25"
  },
  {
    "date": "2026-05-12",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 60,
    "received_qty": 0,
    "stock_on_hand": 783,
    "nearest_expiry": "2026-06-26"
  },
  {
    "date": "2026-05-13",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 55,
    "received_qty": 385,
    "stock_on_hand": 1113,
    "nearest_expiry": "2026-06-27"
  },
  {
    "date": "2026-05-14",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 52,
    "received_qty": 0,
    "stock_on_hand": 1061,
    "nearest_expiry": "2026-06-28"
  },
  {
    "date": "2026-05-15",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 51,
    "received_qty": 0,
    "stock_on_hand": 1010,
    "nearest_expiry": "2026-06-29"
  },
  {
    "date": "2026-05-16",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 954,
    "nearest_expiry": "2026-06-30"
  },
  {
    "date": "2026-05-17",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 51,
    "received_qty": 385,
    "stock_on_hand": 1288,
    "nearest_expiry": "2026-07-01"
  },
  {
    "date": "2026-05-18",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 1229,
    "nearest_expiry": "2026-07-02"
  },
  {
    "date": "2026-05-19",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 55,
    "received_qty": 0,
    "stock_on_hand": 1174,
    "nearest_expiry": "2026-07-03"
  },
  {
    "date": "2026-05-20",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 44,
    "received_qty": 0,
    "stock_on_hand": 1130,
    "nearest_expiry": "2026-07-04"
  },
  {
    "date": "2026-05-21",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 64,
    "received_qty": 385,
    "stock_on_hand": 1451,
    "nearest_expiry": "2026-07-05"
  },
  {
    "date": "2026-05-22",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 64,
    "received_qty": 0,
    "stock_on_hand": 1387,
    "nearest_expiry": "2026-07-06"
  },
  {
    "date": "2026-05-23",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 1328,
    "nearest_expiry": "2026-07-07"
  },
  {
    "date": "2026-05-24",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 57,
    "received_qty": 0,
    "stock_on_hand": 1271,
    "nearest_expiry": "2026-07-08"
  },
  {
    "date": "2026-05-25",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 60,
    "received_qty": 0,
    "stock_on_hand": 1211,
    "nearest_expiry": "2026-07-09"
  },
  {
    "date": "2026-05-26",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 68,
    "received_qty": 0,
    "stock_on_hand": 1143,
    "nearest_expiry": "2026-07-10"
  },
  {
    "date": "2026-05-27",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 51,
    "received_qty": 0,
    "stock_on_hand": 1092,
    "nearest_expiry": "2026-07-11"
  },
  {
    "date": "2026-05-28",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 58,
    "received_qty": 0,
    "stock_on_hand": 1034,
    "nearest_expiry": "2026-07-12"
  },
  {
    "date": "2026-05-29",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 53,
    "received_qty": 0,
    "stock_on_hand": 981,
    "nearest_expiry": "2026-07-13"
  },
  {
    "date": "2026-05-30",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 58,
    "received_qty": 0,
    "stock_on_hand": 923,
    "nearest_expiry": "2026-07-14"
  },
  {
    "date": "2026-05-31",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 64,
    "received_qty": 385,
    "stock_on_hand": 1244,
    "nearest_expiry": "2026-07-15"
  },
  {
    "date": "2026-06-01",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 58,
    "received_qty": 0,
    "stock_on_hand": 1186,
    "nearest_expiry": "2026-07-16"
  },
  {
    "date": "2026-06-02",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 61,
    "received_qty": 0,
    "stock_on_hand": 1125,
    "nearest_expiry": "2026-07-17"
  },
  {
    "date": "2026-06-03",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 58,
    "received_qty": 385,
    "stock_on_hand": 1452,
    "nearest_expiry": "2026-07-18"
  },
  {
    "date": "2026-06-04",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 47,
    "received_qty": 0,
    "stock_on_hand": 1405,
    "nearest_expiry": "2026-07-19"
  },
  {
    "date": "2026-06-05",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 49,
    "received_qty": 0,
    "stock_on_hand": 1356,
    "nearest_expiry": "2026-07-20"
  },
  {
    "date": "2026-06-06",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 64,
    "received_qty": 0,
    "stock_on_hand": 1292,
    "nearest_expiry": "2026-07-21"
  },
  {
    "date": "2026-06-07",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 57,
    "received_qty": 0,
    "stock_on_hand": 1235,
    "nearest_expiry": "2026-07-22"
  },
  {
    "date": "2026-06-08",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 61,
    "received_qty": 0,
    "stock_on_hand": 1174,
    "nearest_expiry": "2026-07-23"
  },
  {
    "date": "2026-06-09",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 65,
    "received_qty": 0,
    "stock_on_hand": 1109,
    "nearest_expiry": "2026-07-24"
  },
  {
    "date": "2026-06-10",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 55,
    "received_qty": 0,
    "stock_on_hand": 1054,
    "nearest_expiry": "2026-07-25"
  },
  {
    "date": "2026-06-11",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 995,
    "nearest_expiry": "2026-07-26"
  },
  {
    "date": "2026-06-12",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 56,
    "received_qty": 385,
    "stock_on_hand": 1324,
    "nearest_expiry": "2026-07-27"
  },
  {
    "date": "2026-06-13",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 56,
    "received_qty": 385,
    "stock_on_hand": 1653,
    "nearest_expiry": "2026-07-28"
  },
  {
    "date": "2026-06-14",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 60,
    "received_qty": 0,
    "stock_on_hand": 1593,
    "nearest_expiry": "2026-07-29"
  },
  {
    "date": "2026-06-15",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 70,
    "received_qty": 0,
    "stock_on_hand": 1523,
    "nearest_expiry": "2026-07-30"
  },
  {
    "date": "2026-06-16",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 75,
    "received_qty": 0,
    "stock_on_hand": 1448,
    "nearest_expiry": "2026-07-31"
  },
  {
    "date": "2026-06-17",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 61,
    "received_qty": 0,
    "stock_on_hand": 1387,
    "nearest_expiry": "2026-08-01"
  },
  {
    "date": "2026-06-18",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 1328,
    "nearest_expiry": "2026-08-02"
  },
  {
    "date": "2026-06-19",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 69,
    "received_qty": 0,
    "stock_on_hand": 1259,
    "nearest_expiry": "2026-08-03"
  },
  {
    "date": "2026-06-20",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 1203,
    "nearest_expiry": "2026-08-04"
  },
  {
    "date": "2026-06-21",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 1158,
    "nearest_expiry": "2026-08-05"
  },
  {
    "date": "2026-06-22",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 72,
    "received_qty": 0,
    "stock_on_hand": 1086,
    "nearest_expiry": "2026-08-06"
  },
  {
    "date": "2026-06-23",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 68,
    "received_qty": 0,
    "stock_on_hand": 1018,
    "nearest_expiry": "2026-08-07"
  },
  {
    "date": "2026-06-24",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 959,
    "nearest_expiry": "2026-08-08"
  },
  {
    "date": "2026-06-25",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 64,
    "received_qty": 0,
    "stock_on_hand": 895,
    "nearest_expiry": "2026-08-09"
  },
  {
    "date": "2026-06-26",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 57,
    "received_qty": 385,
    "stock_on_hand": 1223,
    "nearest_expiry": "2026-08-10"
  },
  {
    "date": "2026-06-27",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 1178,
    "nearest_expiry": "2026-08-11"
  },
  {
    "date": "2026-06-28",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 62,
    "received_qty": 770,
    "stock_on_hand": 1886,
    "nearest_expiry": "2026-08-12"
  },
  {
    "date": "2026-06-29",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 63,
    "received_qty": 0,
    "stock_on_hand": 1823,
    "nearest_expiry": "2026-08-13"
  },
  {
    "date": "2026-06-30",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 61,
    "received_qty": 385,
    "stock_on_hand": 2147,
    "nearest_expiry": "2026-08-14"
  },
  {
    "date": "2026-07-01",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 48,
    "received_qty": 385,
    "stock_on_hand": 2484,
    "nearest_expiry": "2026-08-15"
  },
  {
    "date": "2026-07-02",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 65,
    "received_qty": 0,
    "stock_on_hand": 2419,
    "nearest_expiry": "2026-08-16"
  },
  {
    "date": "2026-07-03",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 45,
    "received_qty": 0,
    "stock_on_hand": 2374,
    "nearest_expiry": "2026-08-17"
  },
  {
    "date": "2026-07-04",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 65,
    "received_qty": 0,
    "stock_on_hand": 2309,
    "nearest_expiry": "2026-08-18"
  },
  {
    "date": "2026-07-05",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 56,
    "received_qty": 0,
    "stock_on_hand": 2253,
    "nearest_expiry": "2026-08-19"
  },
  {
    "date": "2026-07-06",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 73,
    "received_qty": 385,
    "stock_on_hand": 2565,
    "nearest_expiry": "2026-08-20"
  },
  {
    "date": "2026-07-07",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 71,
    "received_qty": 0,
    "stock_on_hand": 2494,
    "nearest_expiry": "2026-08-21"
  },
  {
    "date": "2026-07-08",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 72,
    "received_qty": 0,
    "stock_on_hand": 2422,
    "nearest_expiry": "2026-08-22"
  },
  {
    "date": "2026-07-09",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 63,
    "received_qty": 0,
    "stock_on_hand": 2359,
    "nearest_expiry": "2026-08-23"
  },
  {
    "date": "2026-07-10",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 68,
    "received_qty": 0,
    "stock_on_hand": 2291,
    "nearest_expiry": "2026-08-24"
  },
  {
    "date": "2026-07-11",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 55,
    "received_qty": 0,
    "stock_on_hand": 2236,
    "nearest_expiry": "2026-08-25"
  },
  {
    "date": "2026-07-12",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 49,
    "received_qty": 0,
    "stock_on_hand": 2187,
    "nearest_expiry": "2026-08-26"
  },
  {
    "date": "2026-07-13",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 75,
    "received_qty": 0,
    "stock_on_hand": 2112,
    "nearest_expiry": "2026-08-27"
  },
  {
    "date": "2026-07-14",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 58,
    "received_qty": 0,
    "stock_on_hand": 2054,
    "nearest_expiry": "2026-08-28"
  },
  {
    "date": "2026-07-15",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 66,
    "received_qty": 0,
    "stock_on_hand": 1988,
    "nearest_expiry": "2026-08-29"
  },
  {
    "date": "2026-07-16",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 55,
    "received_qty": 770,
    "stock_on_hand": 2703,
    "nearest_expiry": "2026-08-30"
  },
  {
    "date": "2026-07-17",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 63,
    "received_qty": 385,
    "stock_on_hand": 3025,
    "nearest_expiry": "2026-08-31"
  },
  {
    "date": "2026-07-18",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 70,
    "received_qty": 0,
    "stock_on_hand": 2955,
    "nearest_expiry": "2026-09-01"
  },
  {
    "date": "2026-07-19",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 63,
    "received_qty": 385,
    "stock_on_hand": 3277,
    "nearest_expiry": "2026-09-02"
  },
  {
    "date": "2026-07-20",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 68,
    "received_qty": 0,
    "stock_on_hand": 3209,
    "nearest_expiry": "2026-09-03"
  },
  {
    "date": "2026-07-21",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 72,
    "received_qty": 0,
    "stock_on_hand": 3137,
    "nearest_expiry": "2026-09-04"
  },
  {
    "date": "2026-07-22",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 59,
    "received_qty": 770,
    "stock_on_hand": 3848,
    "nearest_expiry": "2026-09-05"
  },
  {
    "date": "2026-07-23",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 76,
    "received_qty": 0,
    "stock_on_hand": 3772,
    "nearest_expiry": "2026-09-06"
  },
  {
    "date": "2026-07-24",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 57,
    "received_qty": 0,
    "stock_on_hand": 3715,
    "nearest_expiry": "2026-09-07"
  },
  {
    "date": "2026-07-25",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 3656,
    "nearest_expiry": "2026-09-08"
  },
  {
    "date": "2026-07-26",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 63,
    "received_qty": 385,
    "stock_on_hand": 3978,
    "nearest_expiry": "2026-09-09"
  },
  {
    "date": "2026-07-27",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 72,
    "received_qty": 385,
    "stock_on_hand": 4291,
    "nearest_expiry": "2026-09-10"
  },
  {
    "date": "2026-07-28",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 73,
    "received_qty": 0,
    "stock_on_hand": 4218,
    "nearest_expiry": "2026-09-11"
  },
  {
    "date": "2026-07-29",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 4159,
    "nearest_expiry": "2026-09-12"
  },
  {
    "date": "2026-07-30",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 61,
    "received_qty": 0,
    "stock_on_hand": 4098,
    "nearest_expiry": "2026-09-13"
  },
  {
    "date": "2026-07-31",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 68,
    "received_qty": 770,
    "stock_on_hand": 4800,
    "nearest_expiry": "2026-09-14"
  },
  {
    "date": "2026-08-01",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 65,
    "received_qty": 0,
    "stock_on_hand": 4735,
    "nearest_expiry": "2026-09-15"
  },
  {
    "date": "2026-08-02",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 62,
    "received_qty": 770,
    "stock_on_hand": 5443,
    "nearest_expiry": "2026-09-16"
  },
  {
    "date": "2026-08-03",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 80,
    "received_qty": 385,
    "stock_on_hand": 5748,
    "nearest_expiry": "2026-09-17"
  },
  {
    "date": "2026-08-04",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 77,
    "received_qty": 385,
    "stock_on_hand": 6056,
    "nearest_expiry": "2026-09-18"
  },
  {
    "date": "2026-08-05",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 68,
    "received_qty": 385,
    "stock_on_hand": 6373,
    "nearest_expiry": "2026-09-19"
  },
  {
    "date": "2026-08-06",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 53,
    "received_qty": 0,
    "stock_on_hand": 6320,
    "nearest_expiry": "2026-09-20"
  },
  {
    "date": "2026-08-07",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 65,
    "received_qty": 0,
    "stock_on_hand": 6255,
    "nearest_expiry": "2026-09-21"
  },
  {
    "date": "2026-08-08",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 62,
    "received_qty": 385,
    "stock_on_hand": 6578,
    "nearest_expiry": "2026-09-22"
  },
  {
    "date": "2026-08-09",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 70,
    "received_qty": 0,
    "stock_on_hand": 6508,
    "nearest_expiry": "2026-09-23"
  },
  {
    "date": "2026-08-10",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 53,
    "received_qty": 0,
    "stock_on_hand": 6455,
    "nearest_expiry": "2026-09-24"
  },
  {
    "date": "2026-08-11",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 70,
    "received_qty": 0,
    "stock_on_hand": 6385,
    "nearest_expiry": "2026-09-25"
  },
  {
    "date": "2026-08-12",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 64,
    "received_qty": 0,
    "stock_on_hand": 6321,
    "nearest_expiry": "2026-09-26"
  },
  {
    "date": "2026-08-13",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 57,
    "received_qty": 385,
    "stock_on_hand": 6649,
    "nearest_expiry": "2026-09-27"
  },
  {
    "date": "2026-08-14",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 58,
    "received_qty": 770,
    "stock_on_hand": 7361,
    "nearest_expiry": "2026-09-28"
  },
  {
    "date": "2026-08-15",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 70,
    "received_qty": 0,
    "stock_on_hand": 7291,
    "nearest_expiry": "2026-09-29"
  },
  {
    "date": "2026-08-16",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 64,
    "received_qty": 0,
    "stock_on_hand": 7227,
    "nearest_expiry": "2026-09-30"
  },
  {
    "date": "2026-08-17",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 85,
    "received_qty": 0,
    "stock_on_hand": 7142,
    "nearest_expiry": "2026-10-01"
  },
  {
    "date": "2026-08-18",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 70,
    "received_qty": 770,
    "stock_on_hand": 7842,
    "nearest_expiry": "2026-10-02"
  },
  {
    "date": "2026-08-19",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 55,
    "received_qty": 0,
    "stock_on_hand": 7787,
    "nearest_expiry": "2026-10-03"
  },
  {
    "date": "2026-08-20",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 62,
    "received_qty": 0,
    "stock_on_hand": 7725,
    "nearest_expiry": "2026-10-04"
  },
  {
    "date": "2026-08-21",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 61,
    "received_qty": 0,
    "stock_on_hand": 7664,
    "nearest_expiry": "2026-10-05"
  },
  {
    "date": "2026-08-22",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 66,
    "received_qty": 385,
    "stock_on_hand": 7983,
    "nearest_expiry": "2026-10-06"
  },
  {
    "date": "2026-08-23",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 66,
    "received_qty": 0,
    "stock_on_hand": 7917,
    "nearest_expiry": "2026-10-07"
  },
  {
    "date": "2026-08-24",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 76,
    "received_qty": 385,
    "stock_on_hand": 8226,
    "nearest_expiry": "2026-10-08"
  },
  {
    "date": "2026-08-25",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 88,
    "received_qty": 385,
    "stock_on_hand": 8523,
    "nearest_expiry": "2026-10-09"
  },
  {
    "date": "2026-08-26",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 73,
    "received_qty": 0,
    "stock_on_hand": 8450,
    "nearest_expiry": "2026-10-10"
  },
  {
    "date": "2026-08-27",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 59,
    "received_qty": 0,
    "stock_on_hand": 8391,
    "nearest_expiry": "2026-10-11"
  },
  {
    "date": "2026-08-28",
    "medicine": "Salbutamol Inhaler",
    "form": "INHALER",
    "daily_consumption": 71,
    "received_qty": 770,
    "stock_on_hand": 9090,
    "nearest_expiry": "2026-10-12"
  }
];
