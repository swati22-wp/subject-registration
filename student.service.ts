import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/students'; 

  constructor(private http: HttpClient) {}

  registerStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}/register`, student);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
}
