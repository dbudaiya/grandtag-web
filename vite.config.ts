import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from "vite-plugin-mock"
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: "localhost",
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3333/',
        changeOrigin: true,
        ws: true,
        rewrite: (pathStr) => pathStr.replace('/api', '')
      },
    },
  },
  "build": {
    minify: 'terser',
    terserOptions: {
      compress: {  //构建环境禁止调试
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "./src/mock",
      supportTs: true     //如果使用 js发开，则需要配置 supportTs 为 false
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      '~cpm': resolve(__dirname, 'src/components'),
      '~views': resolve(__dirname, 'src/views'),
      '/img': './src/assets/img'
    },
    extensions: ['.mjs', '.js', '.ts', '.tsx', '.json']
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/style/global.less";',
      },
    },
  },
})
