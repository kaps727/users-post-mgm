import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserItemComponent } from './user/user-list/user-item/user-item.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserService } from './shared/user.service';
import { PostsService } from './shared/posts.service';
import { ProfileStartComponent } from './user/profile-start/profile-start.component';
import { ApplicationStartComponent } from './core/application-start/application-start.component';
import { DataService } from './shared/data.service';
import { AuthService } from './auth/auth.service';
import { ToastrModule} from 'ngx-toastr';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserComponent,
    PostListComponent,
    PostItemComponent,
    UserListComponent,
    UserItemComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    PostEditComponent,
    UserProfileComponent,
    ProfileStartComponent,
    ApplicationStartComponent,
    
  ],
  entryComponents:[PostEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [UserService, PostsService, DataService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
