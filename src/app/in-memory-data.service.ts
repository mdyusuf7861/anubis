import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {


    const students = [
      { id: '1', name: 'Pradeep', rollNumber: 22, marks: [{ name: 'Telugu', marks: 22 }, { name: 'Physics', marks: 33 }, { name: 'Chemistry', marks: 44 }]},
      { id: '2', name: 'Venkat', rollNumber: 22, marks: [{ name: 'Telugu', marks: 22 }, { name: 'Physics', marks: 33 }, { name: 'Chemistry', marks: 44 }]},
      { id: '3', name: 'Raj', rollNumber: 22, marks: [{ name: 'Telugu', marks: 22 }, { name: 'Physics', marks: 33 }, { name: 'Chemistry', marks: 44 }]},
      { id: '4', name: 'Narendra', rollNumber: 22, marks: [{ name: 'Telugu', marks: 22 }, { name: 'Physics', marks: 33 }, { name: 'Chemistry', marks: 44 }]},
      { id: '5', name: 'Rahul', rollNumber: 22, marks: [{ name: 'Telugu', marks: 22 }, { name: 'Physics', marks: 33 }, { name: 'Chemistry', marks: 44 }]},
      { id: '6', name: 'Rajiv', rollNumber: 22, marks: [{ name: 'Telugu', marks: 22 }, { name: 'Physics', marks: 33 }, { name: 'Chemistry', marks: 44 }]},
    ]
    return {students};
  }
}
