import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 
  cityUrl='http://localhost:3000/city';
  constructor(private httpClient:HttpClient) { }
 
 
  addCity(city:any){
return this.httpClient.post<{message:string}>(this.cityUrl,city);
}
}
