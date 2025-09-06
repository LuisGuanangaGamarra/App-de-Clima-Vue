/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "node:url";

export default defineConfig({
    plugins: [vue()],
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
                globals: true,
                include: ['tests/**/*.component.spec.{ts,js}'],
                coverage: {
                    reporter: ['text', 'html', 'json'],
                    reportsDirectory: './coverage/components',
                },
            },
        ],
    },
})
