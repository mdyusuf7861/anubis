import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

interface studentMarks{
  name: string;
  marks: number;
}

interface studentInfo{
  id: string;
  rollNumber: number;
  name: string;
  marks: studentMarks[]
}

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
    var promise = this.http.get<studentInfo>('api/students/' + userid);

    promise.subscribe(student => {
      this.studentInfo = student;
    })
  }
}
