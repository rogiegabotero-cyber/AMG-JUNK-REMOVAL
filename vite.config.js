import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

const buildId = String(Date.now())

// Stamps every build with an id and emits it as version.json so deployed
// clients can poll for a newer build and reload (see src/hooks/useAutoUpdate.js).
function buildVersionPlugin() {
  return {
    name: 'build-version',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'version.json',
        source: JSON.stringify({ buildId }),
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    buildVersionPlugin(),
  ],
  define: {
    __BUILD_ID__: JSON.stringify(buildId),
  },
})
