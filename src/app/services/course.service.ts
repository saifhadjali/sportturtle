import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
courseUrl='http://localhost:3000/courses';
  constructor(private httpClient:HttpClient) { }
  getAllCourses(){
    return this.httpClient.get<{findedCourses:any}>(this.courseUrl);
  }
  getCourseById(id){
    return this.httpClient.get<{findedCourse:any}>(`${this.courseUrl}/${id}`);
  }
  deleteCourse(id){
    return this.httpClient.delete<{message:string}>(`${this.courseUrl}/${id}`);
  }
  addCourse(course:any){
return this.httpClient.post<{message:string}>(this.courseUrl,course);

  }
  editCourse(course:any){
return this.httpClient.put<{message:string}>(`${this.courseUrl}/${course._id}`,course);
  }
  searchByName(trainerObject:any){
return this.httpClient.post<{findedCourses:any}>(`${this.courseUrl}/search/trainerName`,trainerObject);
  }
}
