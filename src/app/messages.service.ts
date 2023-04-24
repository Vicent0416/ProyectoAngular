import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {//uno para agregar() un mensaje al caché
    this.messages.push(message);
  }

  clear() {// borrar() el caché.
    this.messages = [];
  }
}