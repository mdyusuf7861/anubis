import { Component, OnInit, OnDestroy } from '@angular/core';
import { studentInfo } from '../student-model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  studentList: studentInfo[] = [];
  observable?: Observable<studentInfo[]>;

  constructor(private route: ActivatedRoute, private studentSerivice: StudentService ){
  }

  ngOnInit(): void {
    this.observable = this.studentSerivice.getStudents();

    this.observable.subscribe(studentlist => {
      this.studentList = studentlist;
    })
  }
  ngOnDestroy(): void {
    //this.observable?.;
  }
}
