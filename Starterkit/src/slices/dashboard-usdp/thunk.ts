import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUsdpInfo as getUsdpInfoApi } from "../../helpers/backend_helper";

export const getUsdpInfo = createAsyncThunk(
  "dashboard/getUsdpInfo",
  async () => {
    try {
      const response = getUsdpInfoApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);
