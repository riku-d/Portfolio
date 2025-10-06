/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  // Add more VITE_ env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
