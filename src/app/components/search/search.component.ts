import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm:FormGroup;
  trainer:any={};
  findedCourses:any;
  constructor(private formBuilder:FormBuilder,
    private courseService:CourseService) { }

  ngOnInit() {
    this.searchForm=this.formBuilder.group({
      name:['']
    });
  
  }
  search(){
    console.log('here into comp',this.trainer);
    this.courseService.searchByName(this.trainer).subscribe(
      (data)=>{
        this.findedCourses=data.findedCourses;

      }
    );
  }

}
