/// <reference types="vite/client" />
/// <reference types="iles" />

interface ImportMetaEnv {
  VITE_DIRECTUS_URL: string
  VITE_DIRECTUS_EMAIL?: string
  VITE_DIRECTUS_PASSWORD?: string
  VITE_DIRECTUS_STATIC_TOKEN?: string
}
