import { Inject, inject, Injectable } from '@angular/core';
import { enviroments } from '../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServices{
  private base_url = enviroments.base_url;
  private http = inject(HttpClient);
  currentSessionId = crypto.randomUUID(); // Genera un string único como 'f47ac10b-58cc-4372-a567-0e02b2c3d479'

  uploadFIle(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.base_url}/upload`, formData);
  }

  askQuestion(sessionId: string, question: string){
    const body = {
      session_id: sessionId,
      text: question
    }
    return this.http.post(`${this.base_url}/ask`,body)
  }
}
