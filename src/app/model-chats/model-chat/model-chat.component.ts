import { Component, Input } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-model-chat',
  imports: [MarkdownModule],
  templateUrl: './model-chat.component.html',
  styleUrl: './model-chat.component.scss',
})
export class ModelChatComponent {
  @Input() model: string = '';
  @Input() messages: any[] = [];
  @Input() loading: boolean = false;
}
