import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-admin-trainers',
  templateUrl: './admin-trainers.component.html',
  styleUrls: ['./admin-trainers.component.css']
})
export class AdminTrainersComponent implements OnInit {
trainers:any=[];
  constructor(private route:Router,
    private trainerService:TrainerService) { }

  ngOnInit() {
    this.trainerService.getAllTrainers().subscribe(
      (data)=>{
        this.trainers=data.findedTrainers;
      }
    )

    // this.trainers=[
    //   {id:1,name:'Saif hadjali',img:'assets/images/team_1.jpg',spec:'JavaScript'},
    //   {id:2,name:'Ali mahmoud',img:'assets/images/team_2.jpg',spec:'PHP'},
    //   {id:3,name:'Faten ayari',img:'assets/images/team_3.jpg',spec:'Angular'},
    //   {id:4,name:'Ahmed chebbi',img:'assets/images/team_4.jpg',spec:'Reactjs'},
    //   {id:5,name:'Sabrine ben ali',img:'assets/images/team_1.jpg',spec:'Nodejs'},
    // ];
  }
  nameColor(name:string){
    if (name=='Saif hadjali') {
      return ['1','brown'];
    } else if (name=='Ali mahmoud') {
      return ['0','gris'];
    } else{
      return ['2','green'];
    }
  }
  goTodisplay(id:number){
 this.route.navigate([`displayTrainer/${id}`])
  }
  goToEdit(id:number){
    this.route.navigate([`trainer-edit//${id}`])
  }
  deleteTrainer(id:any){
    this.trainerService.deleteTrainer(id).subscribe(
      (data)=>{
        console.log('here msg from BE',data.message);
        this.trainerService.getAllTrainers().subscribe(
          (data)=>{
            this.trainers=data.findedTrainers;
          }
        )
      }
    );
      }
  
}
