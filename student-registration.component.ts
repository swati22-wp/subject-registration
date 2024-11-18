import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
})
export class StudentRegistrationComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = { id: 0, name: '', department: '', email: '' };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  registerStudent(): void {
    this.studentService.registerStudent(this.newStudent).subscribe((student) => {
      this.students.push(student);
      this.newStudent = { id: 0, name: '', department: '', email: '' }; // Reset form
    });
  }
}
