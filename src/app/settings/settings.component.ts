import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  settingsForm: FormGroup;
  @Output() closePopup = new EventEmitter<void>();
  @Output() saveSettings = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      verbosity: ['medium'],
      temperature: [0.5],
      maxCompletionTokens: [512],
      reasoningEffort: ['medium'],
      stream: [false]
    });
  }

  save() {
    console.log("Settings:", this.settingsForm.value);
  }

  close() {
    console.log("Popup closed");
  }
}
