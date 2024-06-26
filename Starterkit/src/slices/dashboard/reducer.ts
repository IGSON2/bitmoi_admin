import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunk";
import { DashboardUser } from "pages/Dashboard/types";

// types
interface initialStateType {
  dashboardUsers: DashboardUser[];
  error: object;
  loading: boolean;
}

interface Error {
  error: object;
}

const initData: DashboardUser[] = [];

export const initialState: initialStateType = {
  dashboardUsers: initData,
  error: {},
  loading: true,
};

const dashboardUserSlice = createSlice({
  name: "dashboardUserSlice",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      getUsers.fulfilled,
      (state: initialStateType, action: PayloadAction<DashboardUser[]>) => {
        state.dashboardUsers = action.payload;
      }
    );

    builder.addCase(
      getUsers.rejected,
      (state: initialStateType, action: PayloadAction<Error | any>) => {
        state.error = action.payload ? action.payload?.error : null;
      }
    );
  },
});

export default dashboardUserSlice.reducer;
