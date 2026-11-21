import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { storeJson } from '../fileModels/store.json'
import { listCachedModels } from '../modelCache'
import { hfRepoFlags, lastOptionValue } from '../utils'

const withdrawnRepos: Record<string, string> = {
  'unsloth/Qwen2.5-7B-Instruct-GGUF': 'Qwen/Qwen2.5-7B-Instruct-GGUF',
  'unsloth/Qwen2.5-14B-Instruct-GGUF': 'Qwen/Qwen2.5-14B-Instruct-GGUF',
  'unsloth/Qwen2.5-32B-Instruct-GGUF': 'Qwen/Qwen2.5-32B-Instruct-GGUF',
  'unsloth/Meta-Llama-3.1-8B-Instruct-GGUF':
    'bartowski/Meta-Llama-3.1-8B-Instruct-GGUF',
}

export const current = VersionInfo.of({
  version: '12110:1',
  releaseNotes: {
    en_US:
      'Fixes downloading the Qwen2.5 7B, 14B and 32B and Llama 3.1 8B Instruct presets. A model you already downloaded keeps working unchanged.',
    es_ES:
      'Corrige la descarga de los presets Qwen2.5 7B, 14B y 32B y Llama 3.1 8B Instruct. Un modelo que ya haya descargado sigue funcionando sin cambios.',
    de_DE:
      'Behebt das Herunterladen der Presets Qwen2.5 7B, 14B und 32B sowie Llama 3.1 8B Instruct. Ein bereits heruntergeladenes Modell funktioniert unverändert weiter.',
    pl_PL:
      'Naprawia pobieranie presetów Qwen2.5 7B, 14B i 32B oraz Llama 3.1 8B Instruct. Już pobrany model działa dalej bez zmian.',
    fr_FR:
      'Corrige le téléchargement des préréglages Qwen2.5 7B, 14B et 32B et Llama 3.1 8B Instruct. Un modèle déjà téléchargé continue de fonctionner sans changement.',
  },
  migrations: {
    up: async ({ effects }) => {
      const serveArgs = await storeJson.read((s) => s?.serveArgs).once()
      const repoArg = serveArgs && lastOptionValue(serveArgs, hfRepoFlags)
      if (!repoArg) return
      const [repo, quant] = repoArg.split(':')
      const replacement = withdrawnRepos[repo]
      if (!replacement) return
      // llama-server falls back to cached weights when the repo lookup fails.
      if ((await listCachedModels()).some((c) => c.repo === repo)) return
      const i = serveArgs.lastIndexOf(repoArg)
      await storeJson.merge(effects, {
        serveArgs: serveArgs.map((arg, j) =>
          j === i ? (quant ? `${replacement}:${quant}` : replacement) : arg,
        ),
      })
    },
    down: IMPOSSIBLE,
  },
})
