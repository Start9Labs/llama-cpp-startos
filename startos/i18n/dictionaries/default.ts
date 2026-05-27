export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting llama.cpp!': 0,
  'llama.cpp API': 1,
  'The llama.cpp API is ready': 2,
  'The llama.cpp API is not ready': 3,
  'No model selected. Run the "Set Model" action.': 4,

  // interfaces.ts
  'llama.cpp Server': 5,
  'OpenAI-compatible API and built-in chat UI': 6,

  // actions/getApiCredentials.ts
  'Get API Credentials': 7,
  'Retrieve your API key for connecting to the llama.cpp API': 8,

  // actions/setModel.ts
  'Set Model': 9,
  'Pick a curated GGUF preset sized for your hardware, or supply a custom HuggingFace model. The model will be downloaded on first startup if not already cached.':
    10,
  'Changing the model will restart the service and may require downloading a new model.':
    11,
  Configuration: 12,
  'HuggingFace repo': 13,
  'A HuggingFace GGUF repo, optionally with a quant tag (e.g. `unsloth/Qwen2.5-7B-Instruct-GGUF:Q4_K_M`).':
    14,
  'HuggingFace file (optional)': 15,
  'Specific GGUF filename inside the repo. Leave empty to let llama-server pick.':
    16,
  'Context size': 17,
  'Maximum context length in tokens. 0 uses the model default.': 18,
  'GPU layers': 19,
  'Number of model layers to offload to GPU. Use a large value (e.g. 999) to offload everything; ignored on the generic CPU variant.':
    20,
  'Extra arguments': 21,
  'Additional `llama-server` flags, space-separated. Advanced — split on whitespace, so quoted values will not survive.':
    22,
  Custom: 23,

  // model preset labels
  'Llama 3.2 1B Instruct': 24,
  'Llama 3.2 3B Instruct': 25,
  'Qwen2.5 7B Instruct': 26,
  'Llama 3.1 8B Instruct': 27,
  'Qwen2.5 14B Instruct': 28,
  'Qwen3 30B-A3B Instruct': 29,
  'Mistral Small 3.2 24B Instruct': 30,
  'Qwen2.5 32B Instruct': 31,
  'Llama 3.3 70B Instruct': 32,

  // actions/deleteModelCache.ts
  'Delete Model Cache': 33,
  'Remove a downloaded GGUF model from the cache to free up disk space': 34,
  'Cached file': 35,
  'Filename inside `/data/models` to delete (e.g. `Qwen2.5-7B-Instruct-Q4_K_M.gguf`).':
    36,
  'This will permanently delete the cached file. The model will be re-downloaded if selected again.':
    37,

  // init/initializeService.ts
  'Retrieve your API key so you can connect to llama.cpp': 38,
  'Select which AI model llama.cpp should serve': 39,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
