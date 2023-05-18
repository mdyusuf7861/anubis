import { Component } from '@angular/core';

interface studentMarks{
  name: string;
  marks: number;
}

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  name: string = 'Pradeep';
  rollNumber: number = 22;

  marks: studentMarks[] = [{ name: 'Telugu', marks: 22 },
  { name: 'Maths', marks: 22 },
  { name: 'Physics', marks: 33 },
  { name: 'Chemistry', marks: 44 }
]
}
