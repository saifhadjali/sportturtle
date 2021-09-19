import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.css']
})
export class TrainerEditComponent implements OnInit {
id:any;
trainer:any;
trainerForm:any;
  constructor(private activadeRoute:ActivatedRoute,
    private trainerService:TrainerService,
    private route:Router,
   private formBuil:FormBuilder) { }

  ngOnInit() {
    this.id=this.activadeRoute.snapshot.paramMap.get('id');
    
     
      this.trainerService.getTrainerById(this.id).subscribe(
        (data)=>{
          this.trainer=data.findedTrainer;
        }
      );
      this.trainerForm=this.formBuil.group({
        name:[''],
        specilaty:[''],
        experience:[''],
        tel:['']
     
      })
  
 
      }
      editTrainer(){
        console.log('here my forms values',this.trainer);
        this.trainerService.editTrainer(this.trainer).subscribe(
          (data)=>{
            console.log('msg from BE',data.message);
           this.route.navigate(['admin']);
          }
        );
      }
}
