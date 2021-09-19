import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
team:any=[];
social:any=[];
  constructor() { }

  ngOnInit() {
   this.team=[
      { id:1, name:'saif',  speciality:'Marketing',img:"assets/images/team_1.jpg" , social :['https://www.facebook.com/','https://www.google.com/?hl=fr','https://twitter.com/?lang=fr']},
      { id:2, name:'bader',  speciality:'computer scientist',img:"assets/images/team_2.jpg", social :['https://www.facebook.com/','https://www.google.com/?hl=fr','https://twitter.com/?lang=fr']},
      { id:3, name:'ahmed',  speciality:'maintenance',img:"assets/images/team_3.jpg", social :['https://www.facebook.com/','https://www.google.com/?hl=fr','https://twitter.com/?lang=fr']},
      { id:4, name:'housem',  speciality:'assistant',img:"assets/images/team_4.jpg", social :['https://www.facebook.com/','https://www.google.com/?hl=fr','https://twitter.com/?lang=fr']}
    ];
  }

}
