import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-display-trainers',
  templateUrl: './display-trainers.component.html',
  styleUrls: ['./display-trainers.component.css']
})
export class DisplayTrainersComponent implements OnInit {
id:any;
trainer:any;
  constructor(private activatedRouter:ActivatedRoute,
    private trainerService:TrainerService) { }

  ngOnInit() {
    this.id=this.activatedRouter.snapshot.paramMap.get('id');
    console.log(this.id);
    this.trainerService.getTrainerById(this.id).subscribe(
      (data)=>{
        this.trainer=data.findedTrainer;

      }
    )
  }

}
