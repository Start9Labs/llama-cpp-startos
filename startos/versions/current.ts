import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { storeJson, type ModelRef } from '../fileModels/store.json'
import { listCachedModels, parseTarget } from '../modelCache'
import { hfFileFlags, hfRepoFlags, matchingPreset } from '../utils'

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
      const cached = await listCachedModels()
      const toRef = (hfRepo: string, hfFile?: string): ModelRef => {
        const preset = matchingPreset(parseTarget(hfRepo, hfFile), cached)
        return preset ? { preset: preset.id } : { hfRepo, hfFile }
      }
      await storeJson.update(effects, (store) => {
        if (!store) return null
        const { serveArgs = [], ...rest } = store
        // Every earlier release wrote `-hf <repo> [-hff <file>]` first.
        const modelEnd = hfFileFlags.includes(serveArgs[2]) ? 4 : 2
        const hasModel = hfRepoFlags.includes(serveArgs[0]) && !!serveArgs[1]
        return {
          ...rest,
          model: hasModel
            ? toRef(serveArgs[1], modelEnd === 4 ? serveArgs[3] : undefined)
            : rest.model,
          settingsArgs: hasModel
            ? serveArgs.slice(modelEnd)
            : rest.settingsArgs,
          modelSettings: store.modelSettings?.map(
            ({ preset, hfRepo, hfFile, ...settings }) => ({
              ...(hfRepo ? toRef(hfRepo, hfFile) : { preset }),
              ...settings,
            }),
          ),
        }
      })
    },
    down: IMPOSSIBLE,
  },
})
