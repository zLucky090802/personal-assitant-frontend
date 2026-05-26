import { Component, input, output, signal } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-chat-window',
  imports: [SlicePipe],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
  sessionId = input.required<string>();
  
  // Este Signal controla si estamos en el centro (true) o abajo (false)
  isFirstMessage = signal(true);

  sendMessage(text: string) {
    if (!text.trim()) return;

    // Al enviar el primer mensaje, "desactivamos" el modo centrado
    if (this.isFirstMessage()) {
      this.isFirstMessage.set(false);
    }

    console.log('Enviando:', text);
    // Aquí iría tu llamada al ApiService
  }
  resetChat() {
    // Recarga la página o avisa al padre que limpie el estado
    window.location.reload(); 
  }
}
