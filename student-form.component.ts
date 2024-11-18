import { Component } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  // Create an object to bind form data
  student = {
    id: '',
    name: '',
    department: '',
    email: ''
  };

  // Handle form submission
  onSubmit() {
    console.log('Form submitted:', this.student);
    // Here you can send the form data to a backend API or store it in a service.
  }
}
