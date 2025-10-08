import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponentAdmin {

}
