import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  trainerUrl='http://localhost:3000/trainers';
  constructor(private httpClient:HttpClient) { }
  getAllTrainers(){
    return this.httpClient.get<{findedTrainers:any}>(this.trainerUrl);
  }
  getTrainerById(id){
    return this.httpClient.get<{findedTrainer:any}>(`${this.trainerUrl}/${id}`);
  }
  deleteTrainer(id){
    return this.httpClient.delete<{message:string}>(`${this.trainerUrl}/${id}`);
  }
  addTrainer(trainer:any){
return this.httpClient.post<{message:string}>(this.trainerUrl,trainer);

  }
  editTrainer(trainer:any){
return this.httpClient.put<{message:string}>(`${this.trainerUrl}/${trainer._id}`,trainer);
  }
  
}
