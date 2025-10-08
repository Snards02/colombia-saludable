import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GraficosComponent } from '../graficos/graficos.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, GraficosComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
