import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_BaiqywD4.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_bUkpeuaO.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/antoniptasznik/Downloads/Moja%20pasja/","cacheDir":"file:///Users/antoniptasznik/Downloads/Moja%20pasja/node_modules/.astro/","outDir":"file:///Users/antoniptasznik/Downloads/Moja%20pasja/dist/","srcDir":"file:///Users/antoniptasznik/Downloads/Moja%20pasja/src/","publicDir":"file:///Users/antoniptasznik/Downloads/Moja%20pasja/public/","buildClientDir":"file:///Users/antoniptasznik/Downloads/Moja%20pasja/dist/client/","buildServerDir":"file:///Users/antoniptasznik/Downloads/Moja%20pasja/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"koszyk/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/koszyk","isIndex":false,"type":"page","pattern":"^\\/koszyk\\/?$","segments":[[{"content":"koszyk","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/koszyk.astro","pathname":"/koszyk","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"sukces/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sukces","isIndex":false,"type":"page","pattern":"^\\/sukces\\/?$","segments":[[{"content":"sukces","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sukces.astro","pathname":"/sukces","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/create-checkout-session","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/create-checkout-session\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"create-checkout-session","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/create-checkout-session.ts","pathname":"/api/create-checkout-session","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.nrrsUzrD.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media(prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/kolekcja","isIndex":false,"type":"page","pattern":"^\\/kolekcja\\/?$","segments":[[{"content":"kolekcja","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kolekcja.astro","pathname":"/kolekcja","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.nrrsUzrD.css"}],"routeData":{"route":"/kontakt","isIndex":false,"type":"page","pattern":"^\\/kontakt\\/?$","segments":[[{"content":"kontakt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kontakt.astro","pathname":"/kontakt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.nrrsUzrD.css"},{"type":"inline","content":"details[data-astro-cid-al2ca2vr]>summary[data-astro-cid-al2ca2vr]{list-style:none}details[data-astro-cid-al2ca2vr]>summary[data-astro-cid-al2ca2vr]::-webkit-details-marker{display:none}details[data-astro-cid-al2ca2vr][open] summary[data-astro-cid-al2ca2vr]~[data-astro-cid-al2ca2vr]{animation:sweep .3s ease-in-out}@keyframes sweep{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media(prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/antoniptasznik/Downloads/Moja pasja/src/pages/kolekcja.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/kolekcja@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/antoniptasznik/Downloads/Moja pasja/src/pages/koszyk.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/koszyk@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/antoniptasznik/Downloads/Moja pasja/src/pages/produkt/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/produkt/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/antoniptasznik/Downloads/Moja pasja/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/antoniptasznik/Downloads/Moja pasja/src/pages/kontakt.astro",{"propagation":"none","containsHead":true}],["/Users/antoniptasznik/Downloads/Moja pasja/src/pages/sukces.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/create-checkout-session@_@ts":"pages/api/create-checkout-session.astro.mjs","\u0000@astro-page:src/pages/kolekcja@_@astro":"pages/kolekcja.astro.mjs","\u0000@astro-page:src/pages/kontakt@_@astro":"pages/kontakt.astro.mjs","\u0000@astro-page:src/pages/koszyk@_@astro":"pages/koszyk.astro.mjs","\u0000@astro-page:src/pages/produkt/[id]@_@astro":"pages/produkt/_id_.astro.mjs","\u0000@astro-page:src/pages/sukces@_@astro":"pages/sukces.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BF-sSkFf.mjs","/Users/antoniptasznik/Downloads/Moja pasja/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CcvysFPn.mjs","/Users/antoniptasznik/Downloads/Moja pasja/src/components/AddToCart":"_astro/AddToCart.Bv54vooT.js","/Users/antoniptasznik/Downloads/Moja pasja/src/components/CartDetail":"_astro/CartDetail.D3Cq_O9Y.js","/Users/antoniptasznik/Downloads/Moja pasja/src/components/OrderSuccess":"_astro/OrderSuccess.hXVh9QYW.js","/Users/antoniptasznik/Downloads/Moja pasja/src/components/CartFlyout":"_astro/CartFlyout.C-2baFyT.js","@astrojs/react/client.js":"_astro/client.Ck_OXNAA.js","/Users/antoniptasznik/Downloads/Moja pasja/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CS6XVuzS.js","/Users/antoniptasznik/Downloads/Moja pasja/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.Byithz5B.js","/Users/antoniptasznik/Downloads/Moja pasja/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/antoniptasznik/Downloads/Moja pasja/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const r={root:null,rootMargin:\"0px\",threshold:.1},t=new IntersectionObserver((s,e)=>{s.forEach(o=>{o.isIntersecting&&(o.target.classList.add(\"is-visible\"),e.unobserve(o.target))})},r);document.addEventListener(\"astro:page-load\",()=>{document.querySelectorAll(\".reveal-on-scroll\").forEach(e=>t.observe(e))});"],["/Users/antoniptasznik/Downloads/Moja pasja/src/components/Navigation.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const e=document.getElementById(\"main-nav\"),t=document.getElementById(\"nav-bg\");function l(){!e||!t||(window.scrollY>20?(e.classList.remove(\"p-6\",\"md:p-12\"),e.classList.add(\"p-4\",\"md:px-12\",\"md:py-4\"),t.classList.remove(\"bg-navy-900/0\",\"backdrop-blur-none\",\"border-white/0\"),t.classList.add(\"bg-navy-900/95\",\"backdrop-blur-xl\",\"border-white/5\",\"shadow-2xl\")):(e.classList.add(\"p-6\",\"md:p-12\"),e.classList.remove(\"p-4\",\"md:px-12\",\"md:py-4\"),t.classList.add(\"bg-navy-900/0\",\"backdrop-blur-none\",\"border-white/0\"),t.classList.remove(\"bg-navy-900/95\",\"backdrop-blur-xl\",\"border-white/5\",\"shadow-2xl\")))}window.addEventListener(\"scroll\",l),l();const n=document.getElementById(\"menu-toggle\"),o=document.getElementById(\"mobile-menu\"),a=document.getElementById(\"line-1\"),d=document.getElementById(\"line-2\"),i=document.getElementById(\"line-3\"),r=document.querySelectorAll(\".mobile-link\");let s=!1;function c(){s=!s,s?(o.classList.remove(\"translate-x-full\"),document.body.style.overflow=\"hidden\",a.classList.add(\"-rotate-45\",\"translate-y-[6px]\",\"w-full\"),d.classList.add(\"opacity-0\"),i.classList.add(\"rotate-45\",\"-translate-y-[6px]\",\"w-full\")):(o.classList.add(\"translate-x-full\"),document.body.style.overflow=\"\",a.classList.remove(\"-rotate-45\",\"translate-y-[6px]\"),d.classList.remove(\"opacity-0\"),i.classList.remove(\"rotate-45\",\"-translate-y-[6px]\"))}n&&n.addEventListener(\"click\",c),r.forEach(m=>{m.addEventListener(\"click\",()=>{s&&c()})})});"]],"assets":["/_astro/index.nrrsUzrD.css","/artist.jpg","/bowl.png","/favicon.svg","/hero.png","/mug.png","/process-fire.png","/process-glaze.png","/process-wheel.png","/vase.png","/_astro/AddToCart.Bv54vooT.js","/_astro/CartDetail.D3Cq_O9Y.js","/_astro/CartFlyout.C-2baFyT.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","/_astro/OrderSuccess.hXVh9QYW.js","/_astro/cartStore.m4UbHVra.js","/_astro/client.Ck_OXNAA.js","/_astro/index.bHeDHGwy.js","/_astro/index.yBjzXJbu.js","/_astro/index.yGrMsBkE.js","/koszyk/index.html","/sukces/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"jBWz/ST6TrLgCsTObONCXkdU4hGW2tekuHZCK8nbuDA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
