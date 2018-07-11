import { Injectable, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { User } from './user.model';

@Injectable()
export class UserService implements OnInit{

  constructor(private postsService: PostsService) { }
  
  ngOnInit(){

  }
  
}
