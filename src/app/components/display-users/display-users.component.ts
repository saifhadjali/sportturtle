import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
id:any;
user:any;
  constructor(private activatedRouter:ActivatedRoute,
    private userService:UserService) { }

  ngOnInit() {
    this.id=this.activatedRouter.snapshot.paramMap.get('id');
    console.log(this.id);
    this.userService.getUserById(this.id).subscribe(
      (data)=>{
        this.user=data.findedUser;

      }
    );
  }

}
