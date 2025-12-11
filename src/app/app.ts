import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from "./header/header.component";
import { ChatComponent } from "./chat/chat.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, ChatComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title = 'feature-finder';

  copyResponse(text: string) {
    navigator.clipboard.writeText(text || '');
  }
}
