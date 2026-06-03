import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

/**
 * Public credentials file. Lives on the `public` volume so that other
 * StartOS services depending on llama.cpp (e.g. Open WebUI) can mount it
 * read-only and discover the API key, without invoking an action or
 * scraping the private `main` volume. This is the single source of truth
 * for the API key — the daemon, the Get API Credentials action, and
 * dependents all read it from here.
 */
const shape = z.object({
  apiKey: z.string(),
})

export const credentialsJson = FileHelper.json(
  { base: sdk.volumes.public, subpath: 'credentials.json' },
  shape,
)
