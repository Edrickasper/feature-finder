import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model-chats',
  imports: [],
  templateUrl: './model-chats.component.html',
  styleUrl: './model-chats.component.scss',
})
export class ModelChatsComponent {
  @Input() responses: any[] = [];
}

