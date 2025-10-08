import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GraficosComponent } from '../graficos/graficos.component';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, GraficosComponent],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
  getBarHeight(value: number): number {
    const maxValue = 13; // El valor más alto en tus datos
    const maxHeight = 100; // Altura máxima en pixels
    return (value / maxValue) * maxHeight;
  }
}
