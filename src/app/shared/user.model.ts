import { Post } from "./post.model";

export class User{
    constructor( private id: string,
                 private firstName: string,
                 private lastName: string,
                 private numberOfPosts: number,
                 private DOR: Date,
                 private posts: Post[]
                ){}
}