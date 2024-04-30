import { createAsyncThunk } from "@reduxjs/toolkit";

import { getScoresInfo as getScoresApi } from "../../helpers/backend_helper";
import { Mode } from "Components/Common/type";

export const getScores = createAsyncThunk(
  "dashboard/getScores",
  async (mode: Mode) => {
    try {
      const response = getScoresApi({ mode });
      return response;
    } catch (error) {
      return error;
    }
  }
);
