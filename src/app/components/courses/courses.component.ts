import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
coursess:any=[];
  constructor() { }

  ngOnInit() {
    this.coursess=[
      {name:'Angular',img:"assets/images/logo-anular.png",date:'5',mois:' sept',time:'18:00 - 20:00', place:'Ariana'},
      {name:'JavaScript',img:"assets/images/JavaScript-logo.png",date:'12',mois:'janv',time:'16:00 - 18:00', place:'Nabeul'},
      {name:'PHP',img:"assets/images/logo-php.jpg",date:'19 ',mois:' fevr',time:'18:00 - 20:00', place:'Sfax'},
      {name:'Reactjs',img:"assets/images/logo-reactjs.png",date:'6 ',mois:' juin',time:'18:00 - 20:00', place:'Tunis'},
      {name:'Nodejs',img:"assets/images/logo-nodejs.png",date:'26 ',mois:' nov',time:'18:00 - 20:00', place:'Bardo'}
    ];
  }

}
