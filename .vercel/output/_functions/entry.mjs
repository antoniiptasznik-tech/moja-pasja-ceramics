import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Ba02Z7Kr.mjs';
import { manifest } from './manifest_BF-sSkFf.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/create-checkout-session.astro.mjs');
const _page2 = () => import('./pages/kolekcja.astro.mjs');
const _page3 = () => import('./pages/kontakt.astro.mjs');
const _page4 = () => import('./pages/koszyk.astro.mjs');
const _page5 = () => import('./pages/produkt/_id_.astro.mjs');
const _page6 = () => import('./pages/sukces.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/create-checkout-session.ts", _page1],
    ["src/pages/kolekcja.astro", _page2],
    ["src/pages/kontakt.astro", _page3],
    ["src/pages/koszyk.astro", _page4],
    ["src/pages/produkt/[id].astro", _page5],
    ["src/pages/sukces.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3ac5a004-30e0-48e5-9a99-55a292f95777",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
