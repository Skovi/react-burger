import { PayloadAction } from "@reduxjs/toolkit";
import { TOrder } from "../../types";

export type TStateAuthSocket = {
  isConnected: Boolean;
  error: PayloadAction | null;
  orders: Array<TOrder>;
  total: number | null;
  totalToday: number | null;
}

export const stateAuthSocket: TStateAuthSocket = {
  isConnected: false,
  error: null,
  orders: [],
  total: null,
  totalToday: null,
};


