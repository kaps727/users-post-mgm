import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Post } from '../../shared/post.model';
import { PostsService } from '../../shared/posts.service';
import { PostEditComponent } from '../post-edit/post-edit.component';
import { NgComponentOutlet } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{

  posts: Post[];
  PostEditComponent = PostEditComponent;
  postUpdatedSubscription:Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts =  this.postsService.getPosts();
    this.postUpdatedSubscription = this.postsService.postsChanged
                                                  .subscribe(
                                                    (posts:Post[])=>{
                                                      this.posts = [];
                                                      this.posts.push(...posts);
                                                    }
                                                  )
  }

  ngOnDestroy(){
  }
  
}