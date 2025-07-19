import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasemapComponent } from './basemap/basemap';

@Component({
  selector: 'app-root',
  imports: [BasemapComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('leaflet-demo');
}
