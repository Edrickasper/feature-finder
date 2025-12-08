import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  imports: [],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss',
})
export class ChatInputComponent {
  prompt: string = '';

  @Output() sendPrompt = new EventEmitter<string>();

  submitPrompt() {
    const text = this.prompt.trim();
    if (!text) return;

    this.sendPrompt.emit(text);
    this.prompt = '';
  }
}
