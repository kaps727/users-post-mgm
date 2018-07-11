export class Post{
    constructor( private id: number,
                 public title: string,
                 public content: string,
                 public createdAt: Date,
                 public modifiedAt: Date,
                 public author: string 
                ){}
    getId(){
        return this.id;
    }
}