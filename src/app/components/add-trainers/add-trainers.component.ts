import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-add-trainers',
  templateUrl: './add-trainers.component.html',
  styleUrls: ['./add-trainers.component.css']
})
export class AddTrainersComponent implements OnInit {
  id:any;
  title1:string;
  trainerForm:any;
  trainer:any={};
  constructor( private formBuilder:FormBuilder,
    private trainerService:TrainerService,
    private route:Router,
    private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
   
    this.trainerForm=this.formBuilder.group({
      name:[''],
      specilaty:[''],
      experience:[''],
      tel:['']
    })
  }
  addTrainer(){
    alert('addTrainer');
    console.log('fff',this.trainer);
    this.trainerService.addTrainer(this.trainer).subscribe(
      (data)=>{
        console.log('here msg from BE',data.message);
        this.route.navigate(['admin']);
  
      }
    );
  }

}
