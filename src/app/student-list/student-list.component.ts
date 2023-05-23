import { Component, OnInit } from '@angular/core';
import { studentInfo } from '../student-model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: studentInfo[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient ){

  }

  ngOnInit(): void {
    var promise = this.http.get<studentInfo[]>('api/students/');

    promise.subscribe(studentlist => {
      this.studentList = studentlist;
    })
  }
}
