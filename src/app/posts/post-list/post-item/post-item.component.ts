import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../shared/post.model';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Subject } from 'rxjs';
import { PostsService } from '../../../shared/posts.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(300, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]

})
export class PostItemComponent implements OnInit {

  @Input() post: Post;
  @Input() idx: number;
  toggle = '';

  authenticated = false;

  constructor(private postsService: PostsService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  toggleElement() {
    if (this.toggle === 'active')
      this.toggle = '';
    else
      this.toggle = 'active';
  }

  onEdit(id: number){
    this.postsService.editModeChanged.next({ postId:id , flag:true });
  }
  isAuthenticated(){
    return this.authenticated = this.authService.isAuthenticated();
  }
}
