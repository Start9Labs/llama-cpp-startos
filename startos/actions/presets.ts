import type { I18nKey } from '../i18n/dictionaries/default'

export type ModelPreset = {
  id: string
  displayName: I18nKey
  /** HF repo, optionally with `:<quant>` suffix understood by `llama-server -hf`. */
  hfRepo: string
  /** Optional explicit GGUF filename — overrides the implicit quant tag. */
  hfFile?: string
  /** Quantized weights size plus headroom (KV cache, activations) in GiB. */
  minMemoryGB: number
  /** Conservative default context window. */
  defaultCtx: number
}

// Quantization choice: Q4_K_M throughout — best size/quality tradeoff for
// llama.cpp on consumer-class hardware. minMemoryGB ≈ weights + 25% overhead
// for KV cache at the listed context size; users can shrink ctx to fit more
// snugly on smaller boxes.
export const models: ModelPreset[] = [
  {
    id: 'llama-32-1b',
    displayName: 'Llama 3.2 1B Instruct',
    hfRepo: 'unsloth/Llama-3.2-1B-Instruct-GGUF:Q4_K_M',
    minMemoryGB: 2,
    defaultCtx: 8192,
  },
  {
    id: 'llama-32-3b',
    displayName: 'Llama 3.2 3B Instruct',
    hfRepo: 'unsloth/Llama-3.2-3B-Instruct-GGUF:Q4_K_M',
    minMemoryGB: 4,
    defaultCtx: 8192,
  },
  {
    id: 'qwen25-7b',
    displayName: 'Qwen2.5 7B Instruct',
    hfRepo: 'unsloth/Qwen2.5-7B-Instruct-GGUF:Q4_K_M',
    minMemoryGB: 6,
    defaultCtx: 8192,
  },
  {
    id: 'llama-31-8b',
    displayName: 'Llama 3.1 8B Instruct',
    hfRepo: 'unsloth/Meta-Llama-3.1-8B-Instruct-GGUF:Q4_K_M',
    minMemoryGB: 8,
    defaultCtx: 8192,
  },
  {
    id: 'qwen25-14b',
    displayName: 'Qwen2.5 14B Instruct',
    hfRepo: 'unsloth/Qwen2.5-14B-Instruct-GGUF:Q4_K_M',
    minMemoryGB: 12,
    defaultCtx: 8192,
  },
  {
    id: 'mistral-small-32-24b',
    displayName: 'Mistral Small 3.2 24B Instruct',
    hfRepo: 'unsloth/Mistral-Small-3.2-24B-Instruct-2506-GGUF:Q4_K_M',
    minMemoryGB: 18,
    defaultCtx: 8192,
  },
  {
    id: 'qwen3-30b-a3b',
    displayName: 'Qwen3 30B-A3B Instruct',
    hfRepo: 'unsloth/Qwen3-30B-A3B-Instruct-2507-GGUF:Q4_K_M',
    minMemoryGB: 22,
    defaultCtx: 8192,
  },
  {
    id: 'qwen25-32b',
    displayName: 'Qwen2.5 32B Instruct',
    hfRepo: 'unsloth/Qwen2.5-32B-Instruct-GGUF:Q4_K_M',
    minMemoryGB: 24,
    defaultCtx: 8192,
  },
  {
    id: 'llama-33-70b',
    displayName: 'Llama 3.3 70B Instruct',
    hfRepo: 'unsloth/Llama-3.3-70B-Instruct-GGUF:Q4_K_M',
    minMemoryGB: 48,
    defaultCtx: 8192,
  },
]
