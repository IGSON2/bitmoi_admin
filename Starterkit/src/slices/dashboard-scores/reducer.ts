import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DashboardScore } from "pages/Dashboard-scores/types";
import { POSITION_LONG_EN, POSITION_SHORT_EN } from "Components/Common/const";
import { getScores } from "./thunk";

// types
interface initialStateType {
  dashboardScores: DashboardScore[];
  error: object;
  loading: boolean;
}

interface Error {
  error: object;
}

const initData: DashboardScore[] = [
  {
    number: 1,
    id: "john@example.com",
    bettingusdp: 100,
    position: POSITION_LONG_EN,
    leverage: 10,
    roe: 0.05,
    pnl: 5,
    entrytime: "2022-01-01 10:00:00",
    exittime: "2022-01-01 12:00:00",
    maxminroe: 0.1,
    submittime: "2022-01-01 09:30:00",
    settledat: "2022-01-01 12:30:00",
    afterexittime: "2022-01-01 13:00:00",
  },
  {
    number: 2,
    id: "jane@example.com",
    bettingusdp: 200,
    position: POSITION_SHORT_EN,
    leverage: 5,
    roe: -0.02,
    pnl: -4,
    entrytime: "2022-01-02 09:00:00",
    exittime: "2022-01-02 10:30:00",
    maxminroe: 0.05,
    submittime: "2022-01-02 08:30:00",
    settledat: "2022-01-02 11:00:00",
    afterexittime: "2022-01-02 11:30:00",
  },
  {
    number: 3,
    id: "mark@example.com",
    bettingusdp: 150,
    position: POSITION_LONG_EN,
    leverage: 8,
    roe: 0.1,
    pnl: 15,
    entrytime: "2022-01-03 11:30:00",
    exittime: "2022-01-03 13:00:00",
    maxminroe: 0.15,
    submittime: "2022-01-03 11:00:00",
    settledat: "2022-01-03 13:30:00",
    afterexittime: "2022-01-03 14:00:00",
  },
  {
    number: 4,
    id: "emma@example.com",
    bettingusdp: 300,
    position: POSITION_SHORT_EN,
    leverage: 3,
    roe: -0.05,
    pnl: -15,
    entrytime: "2022-01-04 14:00:00",
    exittime: "2022-01-04 16:00:00",
    maxminroe: 0.02,
    submittime: "2022-01-04 13:30:00",
    settledat: "2022-01-04 16:30:00",
    afterexittime: "2022-01-04 17:00:00",
  },
  {
    number: 5,
    id: "michael@example.com",
    bettingusdp: 250,
    position: POSITION_LONG_EN,
    leverage: 6,
    roe: 0.08,
    pnl: 20,
    entrytime: "2022-01-05 10:30:00",
    exittime: "2022-01-05 12:30:00",
    maxminroe: 0.12,
    submittime: "2022-01-05 10:00:00",
    settledat: "2022-01-05 13:00:00",
    afterexittime: "2022-01-05 13:30:00",
  },
  {
    number: 6,
    id: "sophia@example.com",
    bettingusdp: 180,
    position: POSITION_SHORT_EN,
    leverage: 4,
    roe: -0.03,
    pnl: -5,
    entrytime: "2022-01-06 09:30:00",
    exittime: "2022-01-06 11:00:00",
    maxminroe: 0.08,
    submittime: "2022-01-06 09:00:00",
    settledat: "2022-01-06 11:30:00",
    afterexittime: "2022-01-06 12:00:00",
  },
  {
    number: 7,
    id: "oliver@example.com",
    bettingusdp: 220,
    position: POSITION_LONG_EN,
    leverage: 7,
    roe: 0.12,
    pnl: 26,
    entrytime: "2022-01-07 12:00:00",
    exittime: "2022-01-07 14:00:00",
    maxminroe: 0.18,
    submittime: "2022-01-07 11:30:00",
    settledat: "2022-01-07 14:30:00",
    afterexittime: "2022-01-07 15:00:00",
  },
  {
    number: 8,
    id: "william@example.com",
    bettingusdp: 280,
    position: POSITION_SHORT_EN,
    leverage: 2,
    roe: -0.08,
    pnl: -22,
    entrytime: "2022-01-08 13:30:00",
    exittime: "2022-01-08 15:30:00",
    maxminroe: 0.01,
    submittime: "2022-01-08 13:00:00",
    settledat: "2022-01-08 16:00:00",
    afterexittime: "2022-01-08 16:30:00",
  },
  {
    number: 9,
    id: "james@example.com",
    bettingusdp: 190,
    position: POSITION_LONG_EN,
    leverage: 9,
    roe: 0.15,
    pnl: 28.5,
    entrytime: "2022-01-09 11:00:00",
    exittime: "2022-01-09 13:00:00",
    maxminroe: 0.2,
    submittime: "2022-01-09 10:30:00",
    settledat: "2022-01-09 13:30:00",
    afterexittime: "2022-01-09 14:00:00",
  },
  {
    number: 10,
    id: "benjamin@example.com",
    bettingusdp: 240,
    position: POSITION_SHORT_EN,
    leverage: 5,
    roe: -0.04,
    pnl: -9.6,
    entrytime: "2022-01-10 10:30:00",
    exittime: "2022-01-10 12:00:00",
    maxminroe: 0.06,
    submittime: "2022-01-10 10:00:00",
    settledat: "2022-01-10 12:30:00",
    afterexittime: "2022-01-10 13:00:00",
  },
  {
    number: 11,
    id: "lucas@example.com",
    bettingusdp: 210,
    position: POSITION_LONG_EN,
    leverage: 7,
    roe: 0.1,
    pnl: 21,
    entrytime: "2022-01-11 09:00:00",
    exittime: "2022-01-11 11:00:00",
    maxminroe: 0.14,
    submittime: "2022-01-11 08:30:00",
    settledat: "2022-01-11 11:30:00",
    afterexittime: "2022-01-11 12:00:00",
  },
  {
    number: 12,
    id: "henry@example.com",
    bettingusdp: 320,
    position: POSITION_SHORT_EN,
    leverage: 4,
    roe: -0.06,
    pnl: -19.2,
    entrytime: "2022-01-12 14:00:00",
    exittime: "2022-01-12 16:30:00",
    maxminroe: 0.03,
    submittime: "2022-01-12 13:30:00",
    settledat: "2022-01-12 17:00:00",
    afterexittime: "2022-01-12 17:30:00",
  },
  {
    number: 13,
    id: "alexander@example.com",
    bettingusdp: 260,
    position: POSITION_LONG_EN,
    leverage: 6,
    roe: 0.09,
    pnl: 23.4,
    entrytime: "2022-01-13 11:30:00",
    exittime: "2022-01-13 13:30:00",
    maxminroe: 0.16,
    submittime: "2022-01-13 11:00:00",
    settledat: "2022-01-13 14:00:00",
    afterexittime: "2022-01-13 14:30:00",
  },
  {
    number: 14,
    id: "daniel@example.com",
    bettingusdp: 200,
    position: POSITION_SHORT_EN,
    leverage: 3,
    roe: -0.07,
    pnl: -14,
    entrytime: "2022-01-14 09:30:00",
    exittime: "2022-01-14 11:30:00",
    maxminroe: 0.09,
    submittime: "2022-01-14 09:00:00",
    settledat: "2022-01-14 12:00:00",
    afterexittime: "2022-01-14 12:30:00",
  },
  {
    number: 15,
    id: "matthew@example.com",
    bettingusdp: 230,
    position: POSITION_LONG_EN,
    leverage: 8,
    roe: 0.11,
    pnl: 25.3,
    entrytime: "2022-01-15 12:00:00",
    exittime: "2022-01-15 14:00:00",
    maxminroe: 0.2,
    submittime: "2022-01-15 11:30:00",
    settledat: "2022-01-15 14:30:00",
    afterexittime: "2022-01-15 15:00:00",
  },
  {
    number: 16,
    id: "jack@example.com",
    bettingusdp: 270,
    position: POSITION_SHORT_EN,
    leverage: 2,
    roe: -0.09,
    pnl: -24.3,
    entrytime: "2022-01-16 13:30:00",
    exittime: "2022-01-16 15:30:00",
    maxminroe: 0.05,
    submittime: "2022-01-16 13:00:00",
    settledat: "2022-01-16 16:00:00",
    afterexittime: "2022-01-16 16:30:00",
  },
  {
    number: 17,
    id: "noah@example.com",
    bettingusdp: 200,
    position: POSITION_LONG_EN,
    leverage: 9,
    roe: 0.13,
    pnl: 26,
    entrytime: "2022-01-17 11:00:00",
    exittime: "2022-01-17 13:00:00",
    maxminroe: 0.18,
    submittime: "2022-01-17 10:30:00",
    settledat: "2022-01-17 13:30:00",
    afterexittime: "2022-01-17 14:00:00",
  },
  {
    number: 18,
    id: "ethan@example.com",
    bettingusdp: 250,
    position: POSITION_SHORT_EN,
    leverage: 5,
    roe: -0.05,
    pnl: -12.5,
    entrytime: "2022-01-18 10:30:00",
    exittime: "2022-01-18 12:00:00",
    maxminroe: 0.07,
    submittime: "2022-01-18 10:00:00",
    settledat: "2022-01-18 12:30:00",
    afterexittime: "2022-01-18 13:00:00",
  },
  {
    number: 19,
    id: "sebastian@example.com",
    bettingusdp: 220,
    position: POSITION_LONG_EN,
    leverage: 7,
    roe: 0.12,
    pnl: 26.4,
    entrytime: "2022-01-19 09:00:00",
    exittime: "2022-01-19 11:00:00",
    maxminroe: 0.15,
    submittime: "2022-01-19 08:30:00",
    settledat: "2022-01-19 11:30:00",
    afterexittime: "2022-01-19 12:00:00",
  },
  {
    number: 20,
    id: "gabriel@example.com",
    bettingusdp: 300,
    position: POSITION_SHORT_EN,
    leverage: 3,
    roe: -0.1,
    pnl: -30,
    entrytime: "2022-01-20 14:00:00",
    exittime: "2022-01-20 16:00:00",
    maxminroe: 0.02,
    submittime: "2022-01-20 13:30:00",
    settledat: "2022-01-20 16:30:00",
    afterexittime: "2022-01-20 17:00:00",
  },
];

export const initialState: initialStateType = {
  dashboardScores: initData,
  error: {},
  loading: true,
};

const dashboardScoreSlice = createSlice({
  name: "dashboardScoreSlice",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      getScores.fulfilled,
      (state: initialStateType, action: PayloadAction<DashboardScore[]>) => {
        state.dashboardScores = action.payload;
      }
    );

    builder.addCase(
      getScores.rejected,
      (state: initialStateType, action: PayloadAction<Error | any>) => {
        state.error = action.payload ? action.payload?.error : null;
      }
    );
  },
});

export default dashboardScoreSlice.reducer;
