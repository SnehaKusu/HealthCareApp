import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private apiUrl = 'http://localhost:5133/api/patient'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  // Fetch recommendations for a specific patient
  getRecommendations(patientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${patientId}`);
  }
}