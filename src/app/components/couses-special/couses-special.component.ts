import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-couses-special',
  templateUrl: './couses-special.component.html',
  styleUrls: ['./couses-special.component.css']
})
export class CousesSpecialComponent implements OnInit {
courses:any;
  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(
      (retourDeService)=>{
        this.courses=retourDeService.findedCourses
      }
    );
  }

}
