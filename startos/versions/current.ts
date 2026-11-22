import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { storeJson, type ModelRef } from '../fileModels/store.json'
import { models } from '../actions/presets'
import { listCachedModels, parseTarget, sameModel } from '../modelCache'
import { hfFileFlags, hfRepoFlags, matchingPreset, refTargets } from '../utils'

export const current = VersionInfo.of({
  version: '12110:1',
  releaseNotes: {
    en_US:
      'Fixes downloading the Qwen2.5 7B, 14B and 32B and Llama 3.1 8B Instruct presets. A model you already downloaded keeps working unchanged.\n\nSet Model shows how much disk downloaded models use and can delete every model but the one selected.',
    es_ES:
      'Corrige la descarga de los presets Qwen2.5 7B, 14B y 32B y Llama 3.1 8B Instruct. Un modelo que ya haya descargado sigue funcionando sin cambios.\n\nEstablecer modelo muestra cuánto disco ocupan los modelos descargados y puede eliminar todos salvo el seleccionado.',
    de_DE:
      'Behebt das Herunterladen der Presets Qwen2.5 7B, 14B und 32B sowie Llama 3.1 8B Instruct. Ein bereits heruntergeladenes Modell funktioniert unverändert weiter.\n\nModell festlegen zeigt, wie viel Speicherplatz heruntergeladene Modelle belegen, und kann alle außer dem ausgewählten löschen.',
    pl_PL:
      'Naprawia pobieranie presetów Qwen2.5 7B, 14B i 32B oraz Llama 3.1 8B Instruct. Już pobrany model działa dalej bez zmian.\n\nUstaw model pokazuje, ile miejsca na dysku zajmują pobrane modele, i może usunąć wszystkie poza wybranym.',
    fr_FR:
      'Corrige le téléchargement des préréglages Qwen2.5 7B, 14B et 32B et Llama 3.1 8B Instruct. Un modèle déjà téléchargé continue de fonctionner sans changement.\n\nDéfinir le modèle indique l’espace disque occupé par les modèles téléchargés et peut supprimer tous ceux autres que le modèle sélectionné.',
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
        const legacyTarget = hasModel
          ? parseTarget(serveArgs[1], modelEnd === 4 ? serveArgs[3] : undefined)
          : undefined
        // The saved preset id survives backups that omit cached weights.
        const selectedPreset = models.find(
          (m) =>
            m.id === store.modelSelection?.selection &&
            refTargets({ preset: m.id }).some(
              (t) => t.repo === legacyTarget?.repo,
            ),
        )
        const model = legacyTarget
          ? selectedPreset
            ? { preset: selectedPreset.id }
            : toRef(serveArgs[1], legacyTarget.file)
          : rest.model
        return {
          ...rest,
          model,
          settingsArgs: hasModel
            ? serveArgs.slice(modelEnd)
            : rest.settingsArgs,
          modelSettings: store.modelSettings?.map(
            ({ preset, hfRepo, hfFile, ...settings }) => {
              const ref = hfRepo ? toRef(hfRepo, hfFile) : { preset }
              const isSelected =
                hfRepo &&
                model &&
                legacyTarget &&
                sameModel(parseTarget(hfRepo, hfFile), legacyTarget, cached)
              return { ...(isSelected ? model : ref), ...settings }
            },
          ),
        }
      })
    },
    down: IMPOSSIBLE,
  },
})
