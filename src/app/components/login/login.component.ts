import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user:any={};
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:[''],
      pwd:[''],
    })
  }
  login(){
    alert('here into login btn');
   console.log('ggg',this.user);
  }

}
