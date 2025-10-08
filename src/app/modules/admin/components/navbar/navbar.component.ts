import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  inicio = "active";
  servicios = "";
  campana = ""
  analitica = "";
  reportes = "";
  activenav (number : number) : void {
    switch (number) {
      case 1:
        this.inicio = "active";
        this.servicios = "";
        this.campana = ""
        this.analitica = "";
        this.reportes = "";
        break;
      case 2:
        this.inicio = "";
        this.servicios = "active";
        this.campana = ""
        this.analitica = "";
        this.reportes = "";
        break;
      case 3:
        this.inicio = "";
        this.servicios = "";
        this.campana = "active"
        this.analitica = "";
        this.reportes = "";
        break;
      case 4:
        this.inicio = "";
        this.servicios = "";
        this.campana = ""
        this.analitica = "active";
        this.reportes = "";
        break;
      case 5:
        this.inicio = "";
        this.servicios = "";
        this.campana = ""
        this.analitica = "";
        this.reportes = "active";
        break;
    
      default:
        this.inicio = "active";
        this.servicios = "";
        this.campana = ""
        this.analitica = "";
        this.reportes = "";
        break;
    }
  }
}
