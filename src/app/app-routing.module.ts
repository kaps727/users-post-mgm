import { NgModule } from "@angular/core";
import { RouterModule , Routes } from '@angular/router'
import { HomeComponent } from "./core/home/home.component";
import { UserProfileComponent } from "./user/user-profile/user-profile.component";
import { PostEditComponent } from "./posts/post-edit/post-edit.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { DashboardComponent } from "./core/dashboard/dashboard.component";
import { ProfileStartComponent } from "./user/profile-start/profile-start.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";


const appRoute: Routes = [
    { path:'', redirectTo: 'home', pathMatch: 'full'},
    { path:'home', component: HomeComponent },
    { path:'dashboard', component: DashboardComponent },
    { path:'profile', children: [
        { path:'' , component : ProfileStartComponent},
        { path:':username' , component: UserProfileComponent}
    ]},
    { path: 'mypost', component: PostListComponent },
    { path: 'postshub', component: PostListComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
    
    // { path:'families', loadChildren:'./families/families.module#FamiliesModule'},
    // { path:'festivals', loadChildren:'./festivals/festivals.module#FestivalsModule'},
    // { path:'signup', component: SignupComponent },
    // { path:'signin', component: SigninComponent }
];

@NgModule({
    imports:[ RouterModule.forRoot(appRoute) ],
    exports:[ RouterModule ]
})
export class AppRoutingModule{
    
}