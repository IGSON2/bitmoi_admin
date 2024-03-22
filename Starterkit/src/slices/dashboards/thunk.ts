import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTransaction as getTransactionApi } from "../../helpers/fakebackend_helper";
import {
  getUsers as getUsersApi,
  getInvestInfo as getInvestInfoApi,
  getUsdpInfo as getUsdpInfoApi,
  getTokenInfo as getTokenInfoApi,
  getReferralInfo as getReferralInfoApi,
} from "../../helpers/backend_helper";

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

export const getUsers = createAsyncThunk("dashboard/getUsers", async () => {
  try {
    const response = getUsersApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const getInvestInfo = createAsyncThunk(
  "dashboard/getInvestInfo",
  async (data: any) => {
    try {
      const response = getInvestInfoApi(data);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getUsdpInfo = createAsyncThunk(
  "dashboard/getUsdpInfo",
  async (data: any) => {
    try {
      const response = getUsdpInfoApi(data);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getTokenInfo = createAsyncThunk(
  "dashboard/getTokenInfo",
  async () => {
    try {
      const response = getTokenInfoApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getReferralInfo = createAsyncThunk(
  "dashboard/getReferralInfo",
  async () => {
    try {
      const response = getReferralInfoApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);
