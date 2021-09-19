import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { MustMatch } from '../validators/mustmatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private fb:FormBuilder) { }
 
  ngOnInit() {
    this.signupForm=this.fb.group({
      firstName:['',[Validators.minLength(5),Validators.required]],
      lastName:['',[Validators.minLength(3),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      pwd:['',[Validators.minLength(6),Validators.maxLength(12),Validators.required]],
      confPwd:['']
    },
    {
    validator: MustMatch('pwd','confPwd')
    });
  }
  signup(){
   console.log('here myobject',this.signupForm.value);

  }

}
