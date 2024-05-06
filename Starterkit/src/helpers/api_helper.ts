import axios from "axios";
import { POST_REISSUE_ACCESS } from "./url_helper";
import { postReissueAccess } from "./backend_helper";
import { AccessToken, RefreshToken } from "./localstorage_helper";

// default
// axios.defaults.baseURL = "https://api.bitmoi.co.kr";
// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(
  function (config: any) {
    config.headers["Content-Type"] = "application/json";

    const accessToken = localStorage.getItem(AccessToken);
    if (accessToken) {
      config.headers["authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// intercepting to capture errors
axios.interceptors.response.use(
  function (response: any) {
    if (response.config.url === POST_REISSUE_ACCESS) {
      localStorage.setItem(AccessToken, response.data.access_token);
      window.location.reload();
    }
    return response.data ? response.data : response;
  },
  function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message: any;
    switch (error.response.status) {
      case 400:
        alert(error.response.data);
        break;
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        if (error.config.url !== POST_REISSUE_ACCESS) {
          const refreshToken = localStorage.getItem(RefreshToken);
          postReissueAccess({ refresh_token: refreshToken });
          break;
        }
        localStorage.removeItem(AccessToken);
        localStorage.removeItem(RefreshToken);
        window.location.href = "/login";
        message = "Token is expired.";
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.message || error;
    }
    return Promise.reject(message);
  }
);

class APIClient {
  /**
   * Fetches data from given url
   */

  //  get = (url, params) => {
  //   return axios.get(url, params);
  // };
  get = (url: any, params: any) => {
    let response: any;

    let paramKeys: any = [];

    if (params) {
      Object.keys(params).map((key) => {
        paramKeys.push(key + "=" + params[key]);
        return paramKeys;
      });

      const queryString =
        paramKeys && paramKeys.length ? paramKeys.join("&") : "";
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };
  /**
   * post given data to url
   */
  create = (url: any, data: any) => {
    return axios.post(url, data);
  };
  /**
   * Updates data
   */
  update = (url: any, data: any) => {
    return axios.patch(url, data);
  };

  put = (url: any, data: any) => {
    return axios.put(url, data);
  };
  /**
   * Delete
   */
  delete = (url: any, config: any) => {
    return axios.delete(url, { ...config });
  };
}

const getLoggedinUser = () => {
  const user = localStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

export { APIClient, getLoggedinUser };
