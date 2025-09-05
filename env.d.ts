/// <reference types="vite/client" />

// permite importar .vue en TS
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
