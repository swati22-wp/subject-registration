import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class StudentService {

  private apiUrl ='http://localhost:8080/students';  // Point to Spring Boot backend API (port 8080)
  ;  // URL of your backend API

constructor(private http: HttpClient) {}

  // Method to send student data to the server
addStudent(student: any): Observable<any> {
    return this.http.post(this.apiUrl, student);
}
}
