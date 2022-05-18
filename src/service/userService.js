import http from "./http";

const apiendpoint = "/login";
http.setToken(getToken());

const login = async ({ email }) => {
  const { data, headers } = await http.post(apiendpoint, {
    email,
  });

  localStorage.setItem("x-auth-token", headers["x-auth-token"]);

  // explicitly set header token for SPA
  http.setToken(getToken());

  return data;
};

const logout = () => {
  localStorage.removeItem("x-auth-token");
};

function getToken() {
  return localStorage.getItem("x-auth-token");
}

export default {
  login,
  logout,
};
