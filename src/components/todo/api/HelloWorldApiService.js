import { baseUrl } from "./ApiClient";

const fetchBaseUrl = "http://localhost:8080";

export function retriveHelloWorld() {
  return baseUrl.get("/hello-world");
}

export async function retriveHelloWorldUsingFetch() {
  return await fetch(`${fetchBaseUrl}/hello-world`);
}

export function retriveHelloWorldBean() {
  return baseUrl.get("http://localhost:8080/hello-world-bean");
}

export async function retriveHelloWorldBeanUsingFetch() {
  return await fetch("http://localhost:8080/hello-world-bean");
}

export function retriveHelloWorldBeanWithParem(name) {
  return baseUrl.get(`http://localhost:8080/hello-world/path-variable/${name}`);
}

export async function retriveHelloWorldBeanWithParemUsingFetch(name) {
  return await fetch(`http://localhost:8080/hello-world/path-variable/${name}`);
}

/*
 function callHelloWorld() {
    retriveHelloWorld()
      .then((res) => res.data)
      .then((data) => setMessage(data));
  }

  function callHelloWorldBean() {
    retriveHelloWorldBean()
      .then((res) => res.data)
      .then((res) => setMessage(res.message));
  }

  function callHelloWorldParam() {
    retriveHelloWorldBeanWithParem(username)
      .then((res) => res.data)
      .then((res) => setMessage(res.message));
  }

  function callHelloWorldParemUsingFetch() {
    retriveHelloWorldBeanWithParemUsingFetch(username)
      .then((res) => res.json())
      .then((res) => setMessage(res.message));
  }
  function callHelloWorldUsingFetch() {
    retriveHelloWorldUsingFetch()
      .then((res) => res.text())
      .then((res) => setMessage(res));
  }
*/
