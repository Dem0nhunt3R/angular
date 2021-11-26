import {IPost} from "./IPost";

export interface IUser {
  id:number,
  name:string,
  posts:IPost[]
}
