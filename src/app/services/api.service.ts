import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private backendUrl = 'http://localhost:7001/api/patient'; // Update this URL as per your backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.backendUrl}/login`, { username, password });
  }

  getData(): Observable<any> {
    return this.http.get(`${this.backendUrl}/data`);
  }
}
