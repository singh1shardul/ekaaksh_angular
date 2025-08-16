import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Chat } from '../../../../common/chat/chat';

export interface Message {
  sender: 'user' | 'ai' | 'doctor';
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-consultation-details',
  imports: [CommonModule, RouterModule, Chat],
  templateUrl: './consultation-details.html',
  styleUrl: './consultation-details.css'
})
export class ConsultationDetails {
  consultationId: string | null = null;

  consultation = {
    title: 'Diabetes Checkup',
    description: 'Follow-up consultation regarding diabetes management.',
    date: '2025-08-16',
    doctorName: 'Dr. Mehta'
  };

  tabs: string[] = [
    'Talk to Ekaaksh AI',
    'Talk to Doctor',
    'View Prescription',
    'View Doctor Notes'
  ];
  activeTab = this.tabs[0];

  constructor(private route: ActivatedRoute) {
    this.consultationId = this.route.snapshot.paramMap.get('id');
  }

  aiMessages: Message[] = [
    { sender: 'ai', text: 'Hello! How can I help you today?', timestamp: new Date() }
  ];

  handleAiMessage(msg: string) {
    this.aiMessages.push({ sender: 'user', text: msg, timestamp: new Date() });
    console.log(this.aiMessages);
    // simulate AI response
    setTimeout(() => {
      this.aiMessages.push({ sender: 'ai', text: 'Got it. Let me check...', timestamp: new Date() });
    }, 1000);
  }
}
