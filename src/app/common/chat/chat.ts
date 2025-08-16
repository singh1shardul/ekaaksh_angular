import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Message {
  sender: 'user' | 'ai' | 'doctor';
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {
  @Input() messages: Message[] = [];   // Input from parent
  @Input() participantName: string = ''; // doctor or AI name

  @Output() sendMessage = new EventEmitter<string>(); // Output to parent
  constructor() {
    console.log(this.messages);
  }
  newMessage: string = '';

  onSend() {
    if (this.newMessage.trim()) {
      this.sendMessage.emit(this.newMessage); // send message to parent
      this.newMessage = '';
    }
  }
}
