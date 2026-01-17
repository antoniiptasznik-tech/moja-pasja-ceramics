import { e as createComponent, f as createAstro, h as addAttribute, o as renderScript, r as renderTemplate, k as renderComponent, p as renderHead, n as renderSlot, m as maybeRenderHead } from './astro/server_BaiqywD4.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/antoniptasznik/Downloads/Moja pasja/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/antoniptasznik/Downloads/Moja pasja/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="pl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Aleksandra Ptasznik Ceramics</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&subset=latin-ext&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  ${renderScript($$result, "/Users/antoniptasznik/Downloads/Moja pasja/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "CartFlyout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/antoniptasznik/Downloads/Moja pasja/src/components/CartFlyout", "client:component-export": "default" })} </body></html>`;
}, "/Users/antoniptasznik/Downloads/Moja pasja/src/layouts/Layout.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav id="main-nav" class="fixed top-0 left-0 w-full z-50 p-6 md:p-12 flex justify-between items-center transition-all duration-500"> <a href="/" class="text-cream-100 font-serif text-2xl md:text-3xl tracking-widest uppercase hover:text-bronze-500 transition-colors z-[70] relative">
Moja Pasja
</a>  <ul class="hidden md:flex gap-8 text-xs lg:text-sm uppercase tracking-widest text-cream-100/80 font-body items-center z-[70] relative"> <li><a href="/#about" class="hover:text-bronze-500 transition-colors py-2">O artystce</a></li> <li><a href="/#process" class="hover:text-bronze-500 transition-colors py-2">Proces</a></li> <li><a href="/kolekcja" class="hover:text-bronze-500 transition-colors py-2">Kolekcja</a></li> <li><a href="/#testimonials" class="hover:text-bronze-500 transition-colors py-2">Opinie</a></li> <li><a href="/#faq" class="hover:text-bronze-500 transition-colors py-2">FAQ</a></li> <li><a href="/kontakt" class="text-bronze-500 hover:text-white transition-colors py-2 border border-bronze-500 px-4 py-2 rounded-sm hover:bg-bronze-500 hover:text-navy-900 duration-300">Kontakt</a></li> </ul>  <button id="menu-toggle" class="md:hidden text-cream-100 z-[70] relative w-10 h-10 flex items-center justify-center focus:outline-none"> <span class="sr-only">Menu</span> <div class="w-8 h-4 relative flex flex-col justify-between"> <span class="w-full h-0.5 bg-cream-100 transition-all duration-300 origin-right" id="line-1"></span> <span class="w-full h-0.5 bg-cream-100 transition-all duration-300" id="line-2"></span> <span class="w-full h-0.5 bg-cream-100 transition-all duration-300 origin-right" id="line-3"></span> </div> </button>  <div id="mobile-menu" class="fixed inset-0 bg-navy-900/98 backdrop-blur-xl z-[60] flex flex-col items-center justify-center translate-x-full transition-transform duration-500 ease-in-out"> <ul class="flex flex-col gap-8 text-center">  <li><a href="/#about" class="mobile-link text-3xl font-serif text-cream-100 hover:text-bronze-500 transition-colors">O artystce</a></li> <li><a href="/#process" class="mobile-link text-3xl font-serif text-cream-100 hover:text-bronze-500 transition-colors">Proces</a></li> <li><a href="/kolekcja" class="mobile-link text-3xl font-serif text-cream-100 hover:text-bronze-500 transition-colors">Kolekcja</a></li> <li><a href="/#testimonials" class="mobile-link text-3xl font-serif text-cream-100 hover:text-bronze-500 transition-colors">Opinie</a></li> <li><a href="/#faq" class="mobile-link text-3xl font-serif text-cream-100 hover:text-bronze-500 transition-colors">FAQ</a></li> <li><a href="/kontakt" class="mobile-link text-3xl font-serif text-bronze-500 hover:text-white transition-colors">Kontakt</a></li> </ul> <div class="mt-16 text-cream-100/30 text-xs uppercase tracking-widest font-body">
Moja Pasja Ceramics
</div> </div>  <div id="nav-bg" class="absolute inset-0 bg-navy-900/0 backdrop-blur-none border-b border-white/0 transition-all duration-500"></div> </nav> ${renderScript($$result, "/Users/antoniptasznik/Downloads/Moja pasja/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/antoniptasznik/Downloads/Moja pasja/src/components/Navigation.astro", void 0);

export { $$Layout as $, $$Navigation as a };
