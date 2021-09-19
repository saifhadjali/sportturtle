import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() courseInput: any;
  constructor( private router:Router) { }

  ngOnInit() {

  }

  plural(nbr: number) {
    if (nbr >= 2) {
      return 'students';
    } else {
      return 'student';
    }
  }
  priceColor(price: number) {
    if (price >= 0 && price <= 1000) {
      return ['0', 'green'];
    }
    else if (price >= 1000 && price <= 2000) {
      return ['2', 'red'];
    } else {
      return ['1', 'orange'];
    }


  }
  goToDisplay(id){
this.router.navigate([`displayCourse/${id}`]);
  }
}
