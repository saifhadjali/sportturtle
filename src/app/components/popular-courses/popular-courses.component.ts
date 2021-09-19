import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.css']
})
export class PopularCoursesComponent implements OnInit {
 courses:any=[];
  constructor() { }

  ngOnInit() {
    this.courses=[
      { id:1, name:'angular', price:800, trainer:'saif',description:' aida',capacity:20,date:new Date()},
      { id:2, name:'javascript', price:1800, trainer:'badr',description:' Aida',capacity:20,date:new Date()},
      { id:3, name:'react', price:3000, trainer:'ali',description:' saif',capacity:20,date:new Date()},
      { id:4, name:'nodejs', price:4000, trainer:'mohamed',description:' klai',capacity:20,date:new Date()}
    ];
  }

}
