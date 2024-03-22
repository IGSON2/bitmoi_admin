import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

//latest transaction
export const getTransaction = () => api.get(url.GET_TRANSACTION, null);

// Login Method
export const postLogin = (data: any) => api.create(url.POST_LOGIN, data);

//get users
export const getUsers = () => api.get(url.GET_USERS, null);

//get invest info
export const getInvestInfo = (data: any) => api.get(url.GET_INVEST_INFO, data);

//get usdp info
export const getUsdpInfo = (data: any) => api.get(url.GET_USDP_INFO, data);

//get token info
export const getTokenInfo = () => api.get(url.GET_TOKEN_INFO, null);

//get referral info
export const getReferralInfo = () => api.get(url.GET_REFERRAL_INFO, null);
