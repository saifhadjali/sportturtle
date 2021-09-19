import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddTrainersComponent } from './components/add-trainers/add-trainers.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
import { AdminTrainersComponent } from './components/admin-trainers/admin-trainers.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminComponent } from './components/admin/admin.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CousesSpecialComponent } from './components/couses-special/couses-special.component';
import { DisplayCourseComponent } from './components/display-course/display-course.component';
import { DisplayTrainersComponent } from './components/display-trainers/display-trainers.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'add-course',component:AddCourseComponent},
  {path:'edit-course/:id',component:AddCourseComponent},
  {path:'edit-trainer/:id',component:AddCourseComponent},
  {path:'edit-user/:id',component:AddCourseComponent},
  {path:'courses',component:CoursesComponent },
  {path:'trainers',component:TrainersComponent },
  {path:'admin-courses',component:AdminCoursesComponent},
  {path:'admin-trainers',component:AdminTrainersComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin-users',component:AdminUsersComponent},
  {path:'displayCourse/:id',component:DisplayCourseComponent},
  {path:'displayTrainer/:id',component:DisplayTrainersComponent},
  {path:'cousesSpecial',component:CousesSpecialComponent},
  {path:'displayUsers/:id',component:DisplayUsersComponent},
  {path:'add-trainers',component:AddTrainersComponent},
  {path:'trainer-edit/:id',component:AddTrainersComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'add-users',component:AddUsersComponent},
  {path:'weather',component:WeatherComponent},
  {path:'search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
