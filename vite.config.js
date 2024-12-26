import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // untuk kompile file lebih dari satu html tidak hanya index.html
  build : {
    rollupOptions : {
      input : {
        index : "index.html",
        hello_world : "hello-world.html",
        contact : "contact.html",
        task : "task.html",
        counter : "counter.html",
        note : "note.html",
        profile : "profile.html"
      }
    }
  }
})
