import { baseUrl } from "./ApiClient";

const fetchBase = "http://localhost:8080";

export const executeBasicAuthenticationService = (token) => {
  return baseUrl.get(`/authenticate`, {
    headers: { Authorization: token },
  });
};

export const retriveAllPostByUser = (username) => {
  return baseUrl.get(`/users/${username}/todos`);
};

export const deleteTodoById = (username, id) => {
  return baseUrl.delete(`/users/${username}/todos/${id}`);
};

export const findTodo = (username, id) => {
  return baseUrl.get(`/users/${username}/todos/${id}`);
};

export const updateTodo = (username, id, todo) => {
  return baseUrl.put(`/users/${username}/todos/${id}`, todo);
};

export const createTodo = (username, todo) => {
  return baseUrl.post(`/users/${username}/todos`, todo);
};

// ----------------------------------------Using Fetch------------------------------------------------

export const deleteTodoUsingFetch = async (username, id) => {
  return await fetch(`${fetchBase}/users/${username}/todos/${Number(id)}`, {
    method: "delete",
  });
};
