import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
user:any={};
userForm:any;
  constructor(private formBuild:FormBuilder,
    private userService:UserService,
    private route:Router) { }

  ngOnInit() {
    this.userForm=this.formBuild.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      tel:['']
    })
  }
  addUser(){
    alert('adduser');
    console.log('adduser',this.user);
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        console.log('here msg from BE',data.message);
        this.route.navigate(['admin']);
  
      }
    );
  }

}
