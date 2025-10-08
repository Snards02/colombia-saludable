import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import * as L from 'leaflet';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, GoogleMapsModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements AfterViewInit {
   // Coordenadas de Bogotá
  center: google.maps.LatLngLiteral = { lat: 4.711, lng: -74.072 };
  zoom = 12;

  // Marcadores de ejemplo
  markers = [
    { position: { lat: 4.711, lng: -74.072 }, title: 'Bogotá Centro' },
    { position: { lat: 4.65, lng: -74.1 }, title: 'Hospital Sur' },
    { position: { lat: 4.75, lng: -74.05 }, title: 'Campaña Norte' }
  ];
  ngAfterViewInit(): void {
    const map = L.map('map').setView([4.711, -74.072], 11); // Bogotá

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([4.711, -74.072]).addTo(map)
      .bindPopup('Bogotá')
      .openPopup();
  }
}