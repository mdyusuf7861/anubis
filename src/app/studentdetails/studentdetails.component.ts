import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { studentInfo } from '../student-model';



@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient ){

  }

  studentInfo?: studentInfo;

  ngOnInit(): void {
    var userid = this.route.snapshot.params['id'];
    var observable = this.http.get<studentInfo>('api/students/' + userid);

    observable.subscribe(student => {
      this.studentInfo = student;
    })
  }
}
