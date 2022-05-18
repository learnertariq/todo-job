import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const setToken = (authToken) => {
  axios.defaults.headers.common["x-auth-token"] = authToken;
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setToken,
};
