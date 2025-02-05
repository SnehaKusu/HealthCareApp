import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this line
import { ActivatedRoute } from '@angular/router';
import { RecommendationService } from '../services/recommendation.service';

@Component({
  selector: 'app-recommendations',
  standalone: true, // Ensure this is set to true
  imports: [CommonModule], // Add CommonModule
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  recommendations: any[] = [];
  patientId!: number;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private recommendationService: RecommendationService
  ) { }

  ngOnInit(): void {
    this.patientId = +this.route.snapshot.paramMap.get('id')!;
    this.recommendationService.getRecommendations(this.patientId).subscribe({
      next: (data) => {
        this.recommendations = data;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load recommendations. Please try again later.';
        console.error('Error fetching recommendations:', err);
      }
    });
  }
}