import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResultsContainer } from './results-container/results-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResultsContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SEO Sitechecker';
}

/* 
1. App Container
2. Input container
2.1 url input field
3. Results Container
3.1 Header - Common SEO Issues
Grid / 2 col
3.2. Section Title  
3.3. Section results


 -- Card - basic?
 -- Grid 
 -- Divider
 -- Progress bar
 -- Table

*/
