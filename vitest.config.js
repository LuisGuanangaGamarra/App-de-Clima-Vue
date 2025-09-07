import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL} from "node:url";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    test: {
        globals: true,
        exclude: ['test/e2e/**/*'],
        coverage: {
            reporter: ['text', 'lcov'],
            reportsDirectory: './coverage',
            exclude: [
                'playwright.config.ts',
                'tests/e2e/**/*',
                'env.d.ts',
                'vite.config.js',
                'vitest.config.js',
                'src/main.js'
            ]
        },
        projects: [
            {
                extends: true,
                test: {
                    name: 'jsdom',
                    environment: 'jsdom',
                    include: ['tests/**/*.component.spec.{ts,js}'],
                },
            },
            {
                extends: true,
                test: {
                    name: 'node',
                    environment: 'node',
                    extends: true,
                    include: ['tests/**/*.node.spec.{ts,js}'],
                },
            },
        ],
    },
})