import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserSite = repository?.toLowerCase() === 'bilal2504.github.io'
const base = process.env.GITHUB_ACTIONS && repository && !isUserSite
  ? '/' + repository + '/'
  : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
