import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
trainers:any=[];
  constructor() { }

  ngOnInit() {
    this.trainers=[
      {name:'Saif hadjali',img:'assets/images/team_1.jpg',spec:'JavaScript'},
      {name:'Ali mahmoud',img:'assets/images/team_2.jpg',spec:'PHP'},
      {name:'Faten ayari',img:'assets/images/team_3.jpg',spec:'Angular'},
      {name:'Ahmed chebbi',img:'assets/images/team_4.jpg',spec:'Reactjs'},
      {name:'Sabrine ben ali',img:'assets/images/team_1.jpg',spec:'Nodejs'},
    ];
  }

}
