import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this line
import { RouterModule } from '@angular/router'; // Add this line
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-list',
  standalone: true, // Ensure this is set to true
  imports: [CommonModule, RouterModule], // Add CommonModule and RouterModule
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];
  errorMessage: string = '';

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe({
      next: (data) => {
        this.patients = data;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load patients. Please try again later.';
        console.error('Error fetching patients:', err);
      }
    });
  }
}