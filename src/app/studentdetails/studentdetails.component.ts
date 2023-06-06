import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { studentInfo } from '../student-model';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private studentSerivice: StudentService ){

  }

  studentInfo?: studentInfo;

  ngOnInit(): void {
    //  var userid = this.route.snapshot.params['id'];

    this.route.params.subscribe(paramObject => {
      var userid = paramObject['id'];

      var observable = this.studentSerivice.getStudentDetails(userid);
      observable.subscribe(student => {
        this.studentInfo = student;
      })
    })   
    
  }
}
