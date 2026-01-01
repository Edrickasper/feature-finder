import { Injectable } from '@angular/core';
import OpenAI from 'openai';

import { Config } from '../model/config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private config: Config = {
    verbosity: 'medium',
    temperature: 0.5,
    maxCompletionTokens: null,
    reasoningEffort: 'medium',
    stream: false
  }

  setConfig(con: Config) {
    this.config = con;
  }

  getConfig() {
    return this.config;
  }

  private opRouter = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    // apiKey: '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',
    apiKey: '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',
    dangerouslyAllowBrowser: true,
  });

  /* private opRouter = new OpenAI({
    baseURL: 'http://localhost:11434/v1/',
    apiKey: 'ollama',
    dangerouslyAllowBrowser: true
  }) */

  async deepseek(prompt: string) {
    return await this.opRouter.chat.completions.create({
      model: 'tngtech/deepseek-r1t2-chimera:free',
      // model: 'smollm:135m',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      stream: this.config.stream,
      temperature: this.config.temperature,
      max_completion_tokens: this.config.maxCompletionTokens,
      reasoning_effort: this.config.reasoningEffort,
      verbosity: this.config.verbosity
    });
  }

  async mistral(prompt: string) {
    return await this.opRouter.chat.completions.create({
      model: 'mistralai/devstral-2512:free',
      // model: 'smollm:135m',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      stream: true,
    });
  }

  async gemma(prompt: string) {
    return await this.opRouter.chat.completions.create({
      model: 'google/gemma-3n-e2b-it:free',
      // model: 'smollm:135m',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      stream: true,
    });
  }

}
