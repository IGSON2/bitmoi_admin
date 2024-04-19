import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTransaction as getTransactionApi } from "../../helpers/fakebackend_helper";

export const getTransaction = createAsyncThunk(
  "dashboard/getTransaction",
  async () => {
    try {
      const response = getTransactionApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);
