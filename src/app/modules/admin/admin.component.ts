import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, SignupComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
