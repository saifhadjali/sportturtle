import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
courseForm:FormGroup;
course:any={};
id:any;
title:string;
  constructor(private formBuilder:FormBuilder,
    private activatedRouter:ActivatedRoute,
   private courseServie:CourseService,
   private route:Router) { }

  ngOnInit() {
    this.id=this.activatedRouter.snapshot.paramMap.get('id');
    if (this.id) {
      this.title='edit'
      this.courseServie.getCourseById(this.id).subscribe(
        (data)=>{
          this.course=data.findedCourse;
        }
      );
    } else {
      this.title='add'
    }
    this.courseForm=this.formBuilder.group({
      name:[''],
      price:[''],
      trainer:[''],
      duration:[''],
      capacity:['']
    })
  }
  addEditCourse(){
   if (this.id) {
     console.log('here my forms values',this.course);
     this.courseServie.editCourse(this.course).subscribe(
       (data)=>{
         console.log('msg from BE',data.message);
        this.route.navigate(['admin']);
       }
     );
   } else {
    alert('addcourse');
    console.log('fff',this.course);
  this.courseServie.addCourse(this.course).subscribe(
    (data)=>{
      console.log('here msg from BE',data.message);
      this.route.navigate(['admin']);

    }
  );
   }

  }

}
