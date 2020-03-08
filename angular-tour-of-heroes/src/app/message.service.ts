import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  //Cache de mensajes
  messages: string[] = [];

  //Añadimos un mensaje a la cache
  add(message: string) {
    this.messages.push(message);
  }

  //Limpiamos la cache
  clear() {
    this.messages = [];
  }
}
