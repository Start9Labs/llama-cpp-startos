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

  // actions/setModel.ts
  'Set Model': 7,
  'Pick a curated GGUF preset sized for your hardware, or supply a custom HuggingFace model. The model will be downloaded on first startup if not already cached.':
    8,
  'Changing the model will restart the service and may require downloading a new model.':
    9,
  Configuration: 10,
  'HuggingFace repo': 11,
  'A HuggingFace GGUF repo, optionally with a quant tag (e.g. `unsloth/Qwen2.5-7B-Instruct-GGUF:Q4_K_M`).':
    12,
  'HuggingFace file (optional)': 13,
  'Specific GGUF filename inside the repo. Leave empty to let llama-server pick.':
    14,
  'Context size': 15,
  'Maximum context length in tokens. 0 uses the model default.': 16,
  'GPU layers': 17,
  'Number of model layers to offload to GPU. Use a large value (e.g. 999) to offload everything; ignored on the generic CPU variant.':
    18,
  'Extra arguments': 19,
  'Additional `llama-server` flags, space-separated. Advanced — split on whitespace, so quoted values will not survive.':
    20,
  Custom: 21,

  // model preset labels
  'Llama 3.2 1B Instruct': 22,
  'Llama 3.2 3B Instruct': 23,
  'Qwen2.5 7B Instruct': 24,
  'Llama 3.1 8B Instruct': 25,
  'Qwen2.5 14B Instruct': 26,
  'Qwen3 30B-A3B Instruct': 27,
  'Mistral Small 3.2 24B Instruct': 28,
  'Qwen2.5 32B Instruct': 29,
  'Llama 3.3 70B Instruct': 30,

  // actions/deleteModelCache.ts
  'Delete Model Cache': 31,
  'Remove a downloaded GGUF model from the cache to free up disk space': 32,
  'Cached file': 33,
  'Filename inside `/data/models` to delete (e.g. `Qwen2.5-7B-Instruct-Q4_K_M.gguf`).':
    34,
  'This will permanently delete the cached file. The model will be re-downloaded if selected again.':
    35,

  // actions/setUiPassword.ts
  'Set UI Password': 36,
  'Generate a new password for logging in to the llama.cpp web UI. The username is always "admin".':
    37,
  'This replaces any existing password. Update saved logins after running it.':
    38,

  // init/initializeService.ts
  'Generate a password to log in to the llama.cpp web UI': 39,
  'Select which AI model llama.cpp should serve': 40,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
