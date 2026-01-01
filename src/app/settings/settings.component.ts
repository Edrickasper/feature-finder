import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { Config } from '../model/config';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  private conf!: Config

  constructor(private fb: FormBuilder, private ref: MatDialogRef<SettingsComponent>, private api: ApiService) { }

  ngOnInit() {
    this.conf = this.api.getConfig();
    this.settingsForm = this.fb.group({
      verbosity: [this.conf.verbosity],
      temperature: [this.conf.temperature],
      maxCompletionTokens: [this.conf.maxCompletionTokens],
      reasoningEffort: [this.conf.reasoningEffort],
      stream: [this.conf.stream]
    });
    console.log(this.settingsForm.value);
  }

  save() {
    this.api.setConfig(this.settingsForm.value);
    console.log(this.settingsForm.value)
    this.close();
  }

  close() {
    this.ref.close();
  }
}
