/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL} from "node:url";

export default defineConfig({
    plugins: [vue(), tsconfigPaths()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    test: {
        projects: [
            {
                name: 'node',
                environment: 'node',
                include: ['tests/**/*.node.spec.{ts,js}'],
                globals: true,
                coverage: {
                    reporter: ['text', 'html', 'json'],
                    reportsDirectory: './coverage/node',
                },
            },
            {
                name: 'components',
                environment: 'jsdom',
                include: ['tests/**/*.vue.spec.{ts,js}'],
                globals: true,
                setupFiles: ['tests/components/setup-jsdom.ts'],
                coverage: {
                    reporter: ['text', 'html', 'json'],
                    reportsDirectory: './coverage/components',
                },
            },
        ],
        globals: true
    },
})
