import { Component, inject, input, output, signal } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { ApiServices } from '../../../services/api-services.service';
import { ChatMessage } from '../../../interfaces/chat-messages.interface';

@Component({
  selector: 'app-chat-window',
  imports: [SlicePipe],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
  sessionId = input.required<string>();
  apiService = inject(ApiServices)
  messages: ChatMessage [] = []
  
  // Este Signal controla si estamos en el centro (true) o abajo (false)
  isFirstMessage = signal(true);

  sendMessage(text: string) {
    if (!text.trim()) return;

    this.messages.push({
      response: text,
      rol:'user'
    })
    // Al enviar el primer mensaje, "desactivamos" el modo centrado
    if (this.isFirstMessage()) {
      this.isFirstMessage.set(false);
    }

    this.apiService.askQuestion(this.sessionId(), text).subscribe({
      next:(res:any) =>{
        this.messages.push({
          response:res.response,
          rol:'assistant'
        })

        console.log(res)
        
      }
    }
)
  }
  resetChat() {
    // Recarga la página o avisa al padre que limpie el estado
    window.location.reload(); 
  }
}
