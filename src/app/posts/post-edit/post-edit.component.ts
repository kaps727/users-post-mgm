import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../shared/posts.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Post } from '../../shared/post.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PostEditComponent implements OnInit {

  postId:number;
  edit:boolean = false;
  postTitle:string;
  postContent:string;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.editModeChanged
          .subscribe(
            (obj)=>{
              this.edit = obj.flag;
              this.postId = obj.postId;
              
              let element = document.querySelector(`#post${obj.postId}`) ;

              this.postTitle = element.querySelector(".list-group-item-heading").innerHTML
              this.postContent = element.querySelector(".list-group-item-body").innerHTML
             // console.log(`${this.postTitle} - ${this.postContent}`)
            }
          );
  }

  onSave(postId:number){
    let newTitle = (<HTMLInputElement>document.querySelector("input[class='list-group-item-heading']")).value;
    let newContent = (<HTMLTextAreaElement>document.querySelector("textarea")).value;
    this.postsService.updatePost(new Post(postId,newTitle,newContent,new Date(),new Date(),"CHECK THIS...."));
    this.edit = false;
  }

  onDelete(postId:number){

  }

  onCancel(postId:number){

    this.edit = false;
  }



}
