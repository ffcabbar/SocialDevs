import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "api/post/";

export function getPosts() {
  return fetch(baseUrl + "getallposts")
    .then(result => result.json())
    .then(data => {
      console.log(data.result);
      return data.result;
    });
}
