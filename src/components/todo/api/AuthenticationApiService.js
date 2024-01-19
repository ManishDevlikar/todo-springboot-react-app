import { baseUrl } from "./ApiClient";

export const executeBasicAuthenticationService = (token) => {
  return baseUrl.get(`/authenticated`, {
    headers: { Authorization: token },
  });
};

export const executeJwtAuthenticationService = (username, password) => {
  return baseUrl.post("/authenticate", { username, password });
};
