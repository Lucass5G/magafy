import {ofetch} from "ofetch";

export const apiFetch = ofetch.create({
  baseURL: "http://127.0.0.1:3000/api",
  retry: 1,
});
