import { PayloadAction } from "@reduxjs/toolkit";
import { TOrder } from "../../types";

export type TStateSocket = {
  isConnected: Boolean;
  hasError: PayloadAction | null;
  orders: Array<TOrder>;
  total: number | null;
  totalToday: number | null;
}

export const stateSocket: TStateSocket = {
  isConnected: false,
  hasError: null,
  orders: [],
  total: null,
  totalToday: null,
};
