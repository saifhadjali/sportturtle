import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
users:any=[];
  constructor(private route:Router,
    private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (data)=>{
        this.users=data.findedUsers;
      }
    )
    // this.users=[
    //   {id:1,firstName:'saif',lastName:'hadjali',email:'saif@yahoo.fr',tel:'23908755'},
    //   {id:2,firstName:'ali',lastName:'hamammi',email:'ali@yahoo.fr',tel:'53908475'},
    //   {id:3,firstName:'ahmed',lastName:'mahmoud',email:'ahmed@yahoo.fr',tel:'40008755'},
    //   {id:4,firstName:'ala',lastName:'benali',email:'ala@yahoo.fr',tel:'23566755'}
    // ];
  }
  goTodisplay(id:number){
this.route.navigate([`displayUsers/${id}`])
  }
  goToEdit(id:number){
    this.route.navigate([`edit-user/${id}`])
      }
}
