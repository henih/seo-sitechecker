import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';

interface Stat {
  value: string;
  name: string;
  percentage: string;
}

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
    CommonModule,
  ],
})
export class ResultsComponent {
  stats: Stat[];

  constructor() {
    this.stats = [
      {
        value: '45',
        name: 'foo',
        percentage: '34',
      },
      {
        value: '76',
        name: 'bar',
        percentage: '88',
      },
    ];
  }
}
