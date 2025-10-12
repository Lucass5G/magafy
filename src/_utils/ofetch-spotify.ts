import {ofetch} from "ofetch";

export const spotifyApi = ofetch.create({
    baseURL: "https://api.spotify.com/v1",
})