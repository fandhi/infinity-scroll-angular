import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from "./people/people.component";
// import { HomeComponent } from "./home/home.component";
// import { SignupComponent } from './signup/signup.component';
// import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
// import { ChangePasswordComponent } from './change-password/change-password.component';
// import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'change-password', component: ChangePasswordComponent },
  // { path: 'new-course', component: NewCourseFormComponent },
  // { path: 'post', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
