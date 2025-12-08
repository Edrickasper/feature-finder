import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { ModelChatsComponent } from "./model-chats/model-chats.component";
import { ChatInputComponent } from "./chat-input/chat-input.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ModelChatsComponent, ChatInputComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'feature-finder';

  handlePrompt(text: string) {
    console.log('User sent:', text);
    // add to messages / send to API here
  }

}
