import { postFakeLogin } from "helpers/fakebackend_helper";
import {
  loginSuccess,
  apiError,
  logoutUserSuccess,
  resetLoginFlag,
} from "./reducer";
import { postLogin } from "helpers/backend_helper";

export const loginuser = (user: any, history: any) => async (dispatch: any) => {
  try {
    let response: any;
    if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      response = await postLogin({
        user: user.email,
        password: user.password,
      });
    } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      response = await postFakeLogin({
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("authUser", JSON.stringify(response));
      dispatch(loginSuccess(response));
    }
    history("/dashboard");
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const logoutUser = () => async (dispatch: any) => {
  try {
    localStorage.removeItem("authUser");
    dispatch(logoutUserSuccess(true));
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const resetLoginMsgFlag = () => {
  try {
    const response = resetLoginFlag();
    return response;
  } catch (error) {
    return error;
  }
};

export const socialLogin =
  (type: any, history: any) => async (dispatch: any) => {
    try {
      let response: any;
      const socialdata = await response;
      if (socialdata) {
        sessionStorage.setItem("authUser", JSON.stringify(socialdata));
        dispatch(loginSuccess(socialdata));
        history("/dashboard");
      }
    } catch (error) {
      dispatch(apiError(error));
    }
  };
