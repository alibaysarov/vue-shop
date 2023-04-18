import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "./src/_vars";'
      },
      sass:{
        additionalData:'@import "./src/_vars" \n'
      },
    },
    modules:{
      auto:()=>true
    }
  }
})
