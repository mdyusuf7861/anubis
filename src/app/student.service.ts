import { Injectable } from '@angular/core';
import { studentInfo } from './student-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentDetails(userid: string){
    return this.http.get<studentInfo>('api/students/' + userid);    
  }
  getStudents(){
    return this.http.get<studentInfo[]>('api/students/');
  }
}
