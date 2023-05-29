import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { studentInfo } from '../student-model';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  studentForm = new FormGroup({
    id: new FormControl(''),
    number: new FormControl(''),
    userName: new FormControl(''),

    marks: new FormArray([
      new FormGroup({
        subject: new FormControl('Physics'),
        marks: new FormControl(''),
      })
    ])
  });

  // studentForm = this.fb.group({
  //   id: ['1253'],
  //   number: [''],
  //   userName: ['']
  // });


   firstname = new FormControl('');


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder ){


    this.firstname.setValue('Enter first name');
  }

  ngOnInit(): void {
  }
  Reset(){
  }
  submit(){
    const user = {
      id: this.studentForm.controls.id.value,
      name: this.studentForm.controls.userName.value,
      rollNumber: this.studentForm.controls.number.value,
      marks: [{}]
    }

    this.studentForm.controls.marks.controls.forEach(element => {
      user.marks.push(
        {
          name: element.controls.subject.value,
           marks: element.controls.marks.value
          });
    });

    this.http.post<any>('api/students', user, {observe: 'response'}).subscribe({
      next(response){
        console.log(response);
        if(response.status == 500)
          console.log('Login Failed');
      },
      error(err){
        console.log(err);
      },
      complete(){
        console.log('Request is successful');
      }
    });
    }

  AddSubjectControls(){
    this.studentForm.controls.marks.push(
      new FormGroup({
        subject: new FormControl(''),
        marks: new FormControl(''),
      })
    );
  }

}
