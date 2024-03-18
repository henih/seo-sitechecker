import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'results',
  standalone: true,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatProgressBar,
    ProgressBarComponent,
  ],
})
export class ResultsComponent {}
