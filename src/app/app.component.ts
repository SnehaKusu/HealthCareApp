import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private apiService = inject(ApiService);  // Injected properly
  title = 'HealthcareApp'; 

  ngOnInit() {
    this.apiService.getData().subscribe(data => {
      console.log(data);
    });
  }
}
