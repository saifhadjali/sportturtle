import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl='http://localhost:3000/users';
  constructor(private httpClient:HttpClient) { }
  getAllUsers(){
    return this.httpClient.get<{findedUsers:any}>(this.userUrl);
  }
  getUserById(id){
    return this.httpClient.get<{findedUser:any}>(`${this.userUrl}/${id}`);
  }
  deleteUser(id){
    return this.httpClient.delete<{message:string}>(`${this.userUrl}/${id}`);
  }
  addUser(user:any){
return this.httpClient.post<{message:string}>(this.userUrl,user);

  }
  editUser(user:any){
return this.httpClient.put<{message:string}>(`${this.userUrl}/${user._id}`,user);
  }
}
