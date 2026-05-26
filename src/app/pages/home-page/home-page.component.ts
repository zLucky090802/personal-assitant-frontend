import { Component, inject, signal } from '@angular/core';
import { CustomButtonComponent } from '../../shared/components/custom-button/custom-button.component';
import { ApiServicesService } from '../../services/api-services.service';
import { ChatWindowComponent } from '../../shared/components/chat-window/chat-window.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [
    CustomButtonComponent,
    ChatWindowComponent,
    CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  private service = inject(ApiServicesService);

  // 2. Control de estado de la pantalla usando Angular Signals
  // Estados posibles: 'welcome' | 'loading' | 'chat'
  currentState = signal<'welcome' | 'loading' | 'chat'>('welcome');
  
  // Guardamos el token de la sesión para el chat posterior
  currentSessionId = signal<string>('');

  // 3. El método que dispara el Input de archivos
  onFileSelected(event: Event) {
    // Conversión segura del evento del navegador para acceder a los archivos
    const htmlInput = event.target as HTMLInputElement;
    
    if (htmlInput.files && htmlInput.files.length > 0) {
      const file: File = htmlInput.files[0];

      // Cambiamos la pantalla inmediatamente al estado de "Loading"
      this.currentState.set('loading');

      // Consumimos tu backend de FastAPI
      this.service.uploadFIle(file).subscribe({
        next: (response: any) => {
          console.log('Archivo indexado con éxito en Pinecone:', response);
          
          // Generamos el UUID único para esta nueva sesión de chat en el Frontend
          this.currentSessionId.set(crypto.randomUUID());
          
          // ¡Transición al éxito! Activamos la vista del chat
          this.currentState.set('chat');
        },
        error: (err) => {
          console.error('Error al subir el archivo al servidor:', err);
          
          // Si la API falla (ej. el backend está apagado), regresamos al inicio
          alert('Hubo un error al procesar el documento. Inténtalo de nuevo.');
          this.currentState.set('welcome');
        }
      });
    }
  }
}
