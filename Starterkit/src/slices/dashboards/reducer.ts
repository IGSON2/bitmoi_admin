import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getTransaction } from "./thunk";

// types
import { LatestTransactions } from "Components/Common/type";

interface initialStateType {
  dashboardTransaction: LatestTransactions[];
  error: object;
  loading: boolean;
  // 각 대시보드 데이터 관리
}

interface Error {
  error: object;
}

export const initialState: initialStateType = {
  dashboardTransaction: [],
  error: {},
  loading: true,
};

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      getTransaction.fulfilled,
      (
        state: initialStateType,
        action: PayloadAction<LatestTransactions[]>
      ) => {
        state.dashboardTransaction = action.payload;
      }
    );

    builder.addCase(
      getTransaction.rejected,
      (state: initialStateType, action: PayloadAction<Error | any>) => {
        state.error = action.payload ? action.payload?.error : null;
      }
    );
  },
});

export default dashboardSlice.reducer;
