import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './student/student-form/student-form.component';

const routes: Routes = [
{ path: 'register-student', component: StudentFormComponent },
  { path: '', redirectTo: '/register-student', pathMatch: 'full' }, // Default route
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
