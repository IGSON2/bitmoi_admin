import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUsdpInfo } from "./thunk";
import { DashboardUsdpInfo } from "pages/Dashboard-usdp/types";

// types
interface initialStateType {
  dashboardUsdpInfos: DashboardUsdpInfo[];
  error: object;
  loading: boolean;
}

interface Error {
  error: object;
}

const initData: DashboardUsdpInfo[] = [];

export const initialState: initialStateType = {
  dashboardUsdpInfos: initData,
  error: {},
  loading: true,
};

const DashboardUsdpInfoSlice = createSlice({
  name: "DashboardUsdpInfoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      getUsdpInfo.fulfilled,
      (state: initialStateType, action: PayloadAction<DashboardUsdpInfo[]>) => {
        state.dashboardUsdpInfos = action.payload;
      }
    );

    builder.addCase(
      getUsdpInfo.rejected,
      (state: initialStateType, action: PayloadAction<Error | any>) => {
        state.error = action.payload ? action.payload?.error : null;
      }
    );
  },
});

export default DashboardUsdpInfoSlice.reducer;
