interface studentMarks{
    name: string;
    marks: number;
}
  
export interface studentInfo{
    id: string;
    rollNumber: number;
    name: string;
    marks: studentMarks[]
}