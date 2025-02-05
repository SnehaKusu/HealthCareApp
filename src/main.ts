import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';  // ✅ Import here
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { PatientListComponent } from './app/patient-list/patient-list.component';
import { RecommendationsComponent } from './app/recommendations/recommendations.component';
import { appConfig } from './app/app.config';
// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'recommendations/:id', component: RecommendationsComponent }
];

// Bootstrapping the app
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Router configuration
    provideHttpClient(),    // HttpClient provider here
  ]
}).catch(err => console.error(err));
