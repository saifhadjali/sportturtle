import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { FeaturesComponent } from './components/features/features.component';
import { PopularCoursesComponent } from './components/popular-courses/popular-courses.component';
import { CounterComponent } from './components/counter/counter.component';
import { EventsComponent } from './components/events/events.component';
import { TeamComponent } from './components/team/team.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { CourseComponent } from './components/course/course.component';
import { EventComponent } from './components/event/event.component';
import { Team1Component } from './components/team1/team1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { RenversePipe } from './pipes/renverse.pipe';
import { ChangePipe } from './pipes/change.pipe';
import { CoursesComponent } from './components/courses/courses.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminTrainersComponent } from './components/admin-trainers/admin-trainers.component';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DisplayCourseComponent } from './components/display-course/display-course.component';
import { DisplayTrainersComponent } from './components/display-trainers/display-trainers.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import{HttpClientModule} from "@angular/common/http";
import { CousesSpecialComponent } from './components/couses-special/couses-special.component';
import { SearchComponent } from './components/search/search.component';
import { AddTrainersComponent } from './components/add-trainers/add-trainers.component';
import { TrainerEditComponent } from './components/trainer-edit/trainer-edit.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { WeatherComponent } from './components/weather/weather.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MenuComponent,
    HomeSliderComponent,
    FeaturesComponent,
    PopularCoursesComponent,
    CounterComponent,
    EventsComponent,
    TeamComponent,
    NewsLetterComponent,
    LatestNewsComponent,
    CourseComponent,
    EventComponent,
    Team1Component,
    AddCourseComponent,
    AsterixPipe,
    RenversePipe,
    ChangePipe,
    CoursesComponent,
    TrainersComponent,
    AdminComponent,
    AdminTrainersComponent,
    AdminCoursesComponent,
    AdminUsersComponent,
    TabsComponent,
    DisplayCourseComponent,
    DisplayTrainersComponent,
    DisplayUsersComponent,
    CousesSpecialComponent,
    SearchComponent,
    AddTrainersComponent,
    TrainerEditComponent,
    AddUserComponent,
    UsersComponent,
    AddUsersComponent,
    WeatherComponent    ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
