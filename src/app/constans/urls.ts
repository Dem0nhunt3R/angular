import {environment} from "../../environments";

const baseUrl = environment.API;

export const urls = {
  users:`${baseUrl}users`,
  posts:`${baseUrl}posts`
}
