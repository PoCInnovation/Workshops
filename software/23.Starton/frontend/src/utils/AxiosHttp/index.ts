import axios from "axios";

export const httpConnection = axios.create(
  {
    baseURL: "http://localhost:8080",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  }
)

const token = localStorage.getItem('token');

export const httpNft = axios.create(
  {
    baseURL: "http://localhost:3000",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      "accessToken": token,
    },
  }
)