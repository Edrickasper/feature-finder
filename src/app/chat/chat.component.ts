import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { marked } from 'marked';

import { ApiService } from '../services/api.service';

export interface Message {
  from: string,
  text: string
}

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  constructor(private api: ApiService) { };
  prompt = '';
  responses: { model: string, messages: Message[], loading: boolean, apiCall: any }[] = [
    { model: 'Deepseek', messages: [], loading: false, apiCall: (p: string) => this.api.deepseek(p) },
    { model: 'Nova', messages: [], loading: false, apiCall: (p: string) => this.api.nova(p) },
    { model: 'Gemma', messages: [], loading: false, apiCall: (p: string) => this.api.gemma(p) },
  ];

  async sendPrompt() {
    const trimmedPrompt = this.prompt?.trim();
    if (!trimmedPrompt) return;

    // Add the user prompt to all model threads
    this.responses.forEach(r => {
      r.messages.push({ from: 'user', text: trimmedPrompt });
      r.loading = true;
    });

    this.prompt = '';

    // Send prompt to all models in parallel
    this.responses.map(async r => {
      const result = await r.apiCall(trimmedPrompt);
      let completion = '';
      r.messages.push({ from: 'model', text: completion });
      for await (const chunk of result) {
        const delta = chunk?.choices?.[0]?.delta?.content;
        if (delta) {
          completion += delta
          r.messages[r.messages.length - 1].text = completion;

        }
      }
      r.loading = false;
    });
  }

  markdownToHtml(md: string) {
    return marked(md);
  }
}
