import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';

const routes: Routes = [
  // {path: 'students', component: StudentListComponent },
  {path: 'students/create', component: StudentCreateComponent, pathMatch: 'full'},
  {path: 'students', component: StudentListComponent, children: [
    {path: ':id', component: StudentdetailsComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
