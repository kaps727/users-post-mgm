import { Post } from './post.model';
import { Subject } from 'rxjs';

export class PostsService {

  postsChanged = new Subject<Post[]>();
  postModified = new Subject<Post>();

  editModeChanged = new Subject<{ postId:number,flag:boolean }>();

  private posts: Post[] = [
    new Post(0,"Sample Post 1",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus sunt eum qui repellat voluptatum esse totam hic! Quae, laudantium? Architecto quia illum iste dolor ab ipsam perferendis voluptatem facere.",
            new Date("Jun 20, 2018, 11:50:38 AM"),new Date("Jun 20, 2018, 11:50:38 AM"),"user1"),
    new Post(1,"Sample Post 2",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus sunt eum qui repellat voluptatum esse totam hic! Quae, laudantium? Architecto quia illum iste dolor ab ipsam perferendis voluptatem facere.",
            new Date("Jun 20, 2018, 11:50:38 AM"),new Date("Jun 20, 2018, 11:50:38 AM"),"user2")
  ];

  constructor() { }

  getPosts(){
    return this.posts.slice();
  }
  getPost(postId:number){
    return this.posts[postId];    
  }

  updatePosts(postArr:Post[]){

  }


  updatePost(newPost:Post){
    this.posts[+newPost.getId()] = newPost;
    this.postsChanged.next(this.posts.slice());
  }

}
