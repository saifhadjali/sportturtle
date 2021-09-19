import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  findValu(){
    let T=[10,9,-1,5,-4];
   let result=0;
   for (let i = 0; i < T.length; i++) {
     if (T[i]<0) {
       result+=1;
     }
     
   }
   return result;
  }

}
