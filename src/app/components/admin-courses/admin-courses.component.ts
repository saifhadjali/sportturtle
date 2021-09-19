import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {
courses:any=[];
  constructor(private router:Router,
    private courseService:CourseService) { }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(
      (data)=>{
        this.courses=data.findedCourses;
      }
    );
    // this.courses=[
    //   { id:1, name:'angular', price:800, trainer:'saif',description:' aida',capacity:20,date:new Date(),img:"assets/images/logo-anular.png"},
    //   { id:2, name:'javascript', price:1800, trainer:'badr',description:' Aida',capacity:20,date:new Date(),img:"assets/images/JavaScript-logo.png"},
    //   { id:3, name:'react', price:3000, trainer:'ali',description:' saif',capacity:20,date:new Date(),img:"assets/images/logo-reactjs.png"},
    //   { id:4, name:'nodejs', price:4000, trainer:'mohamed',description:' klai',capacity:20,date:new Date(),img:"assets/images/logo-nodejs.png"}
    // ];
  }
  goTodisplay(id:number){
    this.router.navigate([`displayCourse/${id}`]);
  }
  goToEdit(id:number){
    this.router.navigate([`edit-course/${id}`]);
  }
  deleteCourse(id:any){
this.courseService.deleteCourse(id).subscribe(
  (data)=>{
    console.log('here msg from BE',data.message);
    this.courseService.getAllCourses().subscribe(
      (data)=>{
        this.courses=data.findedCourses;
      }
    )
  }
);
  }

}
