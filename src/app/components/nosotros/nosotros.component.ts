// nosotros.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../../services/servicios/servicio.service';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  messages: { sender: string; text: string }[] = [];
  userInput: string = '';

  constructor(public servicio: ServicioService) { }

  sendMessage() {
    if (this.userInput.trim() === '') return;

    this.messages.push({ sender: 'user', text: this.userInput });

    const userMessage = this.userInput;
    this.userInput = '';
    this.servicio.getprediccion(userMessage).subscribe(
      (response) => {
        console.log('API response:', response);
        this.messages.push({ sender: 'bot', text: response.resultado });
      },
      (error) => {
        console.error('Error fetching prediction:', error); 
  });
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
}
