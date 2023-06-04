import { defineAsyncComponent } from 'vue';

export function registerComponet(app) {
    app.component('default', defineAsyncComponent(() => import("@/layouts/default")));
    app.component('auth', defineAsyncComponent(() => import("@/layouts/auth")));
    app.component('onlyHeader', defineAsyncComponent(() => import("@/layouts/onlyHeader")));
}