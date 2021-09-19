import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:any=[];
  constructor() { }

  ngOnInit() {
    this.events=[
      {  date:'10 Aug', title:'why angular', time:'16:00 - 17:00',description:'learn angular', img:"assets/images/event_1.jpg"},
      {  date:'20 juin', title:'why react', time:'15:00 - 18:00',description:'learn angular', img:"assets/images/event_2.jpg"},
      {  date:'13 janvier', title:'why nodejs', time:'14:00 - 20:00',description:'learn angular', img:"assets/images/event_3.jpg"},
      {  date:'6 mars', title:'why javascript', time:'13:00 - 21:00',description:'learn angular', img:"assets/images/event_1.jpg"},
    ];
  }

}
