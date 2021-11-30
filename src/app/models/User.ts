import {Post} from "./Post";

export interface User{
  name:string;
  id:number;
  post:Post[];
}
