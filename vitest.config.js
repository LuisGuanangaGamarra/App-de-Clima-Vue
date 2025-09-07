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
        },
        projects: [
            {
                extends: true,
                test: {
                    name: 'jsdom',
                    environment: 'jsdom',
                    include: ['tests/units/*.component.spec.{ts,js}'],
                },
            },
            {
                extends: true,
                test: {
                    name: 'node',
                    environment: 'node',
                    extends: true,
                    include: ['tests/units/*.node.spec.{ts,js}'],
                },
            },
        ],
    },
})