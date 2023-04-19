import axios from "axios";

// export const API_URL = `http://localhost:5000/api`
export const API_URL = `https://outgoing-jelly-poppy.glitch.me`

const $host = axios.create({
  baseURL: API_URL
});

const $authHost = axios.create({
  baseURL: API_URL
});

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
};

$authHost.interceptors.request.use(authInterceptor);

export {
  $host,
  $authHost
};