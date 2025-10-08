// nosotros.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  sendMessage() {
    if (this.userInput.trim() === '') return;

    this.messages.push({ sender: 'user', text: this.userInput });

    const userMessage = this.userInput;
    this.userInput = '';

    setTimeout(() => {
      this.messages.push({
        sender: 'bot',
        text: `Tú dijiste: "${userMessage}". Aquí va una respuesta automática.`
      });
    }, 600);
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
}
