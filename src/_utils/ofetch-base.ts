import {ofetch} from "ofetch";
import {env} from "@/_config/env";

export const apiFetch = ofetch.create({
  baseURL: `${env.BASE_URL}/api`,
  retry: 1,
});
