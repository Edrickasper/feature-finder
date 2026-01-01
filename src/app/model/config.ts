import { ReasoningEffort } from "openai/resources/shared.mjs";

export interface Config {
    verbosity: "high" | "medium" | "low" | null | undefined,
    temperature: number,
    maxCompletionTokens: number | null | undefined,
    reasoningEffort: ReasoningEffort,
    stream: boolean
}