import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUsers as getUsersApi } from "../../helpers/backend_helper";

export const getUsers = createAsyncThunk("dashboard/getUsers", async () => {
  try {
    const response = getUsersApi();
    return response;
  } catch (error) {
    return error;
  }
});
