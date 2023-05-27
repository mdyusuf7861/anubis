import { Component, OnInit, OnDestroy } from '@angular/core';
import { studentInfo } from '../student-model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  studentList: studentInfo[] = [];
  observable?: Observable<studentInfo[]>;

  constructor(private route: ActivatedRoute, private http: HttpClient ){

  }

  ngOnInit(): void {
    this.observable = this.http.get<studentInfo[]>('api/students/');

    this.observable.subscribe(studentlist => {
      this.studentList = studentlist;
    })
  }
  ngOnDestroy(): void {
    //this.observable?.;
  }
}
