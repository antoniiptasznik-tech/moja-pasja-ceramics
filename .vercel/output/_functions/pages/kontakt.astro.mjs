import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BaiqywD4.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation } from '../chunks/Navigation_ypqGCELx.mjs';
import { $ as $$Newsletter } from '../chunks/Newsletter_CaoBYafr.mjs';
export { renderers } from '../renderers.mjs';

const $$Kontakt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-navy-900 min-h-screen"> ${renderComponent($$result2, "Navigation", $$Navigation, {})} <section class="min-h-screen flex items-center relative overflow-hidden">  <div class="absolute inset-0 z-0"> <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-bronze-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 md:gap-32 items-center"> <div class="space-y-12 animate-slide-up"> <div class="space-y-6"> <h1 class="text-5xl md:text-7xl font-serif text-cream-100">Kontakt</h1> <p class="text-xl text-cream-100/60 font-body leading-relaxed max-w-md">
Masz pytania o ceramikę? Realizuję również zamówienia indywidualne i współpracę z restauracjami.
</p> </div> <div class="space-y-8"> <div class="group"> <span class="text-xs uppercase tracking-widest text-bronze-500 mb-2 block">Email</span> <a href="mailto:kontakt@mojapasja.pl" class="text-2xl md:text-3xl font-serif text-cream-100 group-hover:text-bronze-500 transition-colors">kontakt@mojapasja.pl</a> </div> <div class="group"> <span class="text-xs uppercase tracking-widest text-bronze-500 mb-2 block">Telefon</span> <a href="tel:+48500600700" class="text-2xl md:text-3xl font-serif text-cream-100 group-hover:text-bronze-500 transition-colors">+48 500 600 700</a> </div> <div class="group"> <span class="text-xs uppercase tracking-widest text-bronze-500 mb-2 block">Pracownia</span> <p class="text-2xl md:text-3xl font-serif text-cream-100">
Gąsierzyno 12<br>
72-112 Stepnica
</p> </div> </div> </div>  <div class="relative aspect-[4/5] bg-white/[0.02] border border-white/5 p-8 reveal-on-scroll delay-200 hidden md:block"> <div class="absolute inset-0 bg-navy-900/20 backdrop-blur-sm z-10 flex items-center justify-center"> <span class="text-cream-100/40 font-serif italic text-lg">Mapa dojazdu wkrótce</span> </div>  <div class="w-full h-full border border-white/5 opacity-30 bg-[url('/noise.svg')]"></div> </div> </div> </section> ${renderComponent($$result2, "Newsletter", $$Newsletter, {})}  <footer class="bg-navy-900 border-t border-white/5 py-16 px-6 text-center"> <h2 class="text-3xl font-serif text-cream-100 mb-6">Aleksandra Ptasznik</h2> <div class="flex justify-center gap-8 mb-8 text-sm tracking-widest uppercase text-cream-100/60 font-serif"> <a href="#" class="hover:text-bronze-500 transition-colors">Instagram</a> <a href="/kontakt" class="hover:text-bronze-500 transition-colors">Kontakt</a> <a href="#" class="hover:text-bronze-500 transition-colors">Regulamin</a> </div> <p class="text-white/20 font-body text-sm">© 2026 Ptasznik Ceramics. Rękodzieło z duszą.</p> </footer> </main> ` })}`;
}, "/Users/antoniptasznik/Downloads/Moja pasja/src/pages/kontakt.astro", void 0);

const $$file = "/Users/antoniptasznik/Downloads/Moja pasja/src/pages/kontakt.astro";
const $$url = "/kontakt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kontakt,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
