import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-basemap',
  imports: [],
  standalone: true,
  templateUrl: './basemap.html',
  styleUrls: ['./basemap.scss']
})
export class BasemapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initial view set to Denver, CO
    const map = L.map('map').setView([39.7392, -104.9903], 13);

    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles © <a href="https://www.esri.com/">Esri</a> — Source: Esri, Garmin, FAO, NOAA, USGS',
        maxZoom: 19
      }
    ).addTo(map);
  }
}
