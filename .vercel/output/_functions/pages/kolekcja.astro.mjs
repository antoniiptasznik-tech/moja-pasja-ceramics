import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderTransition } from '../chunks/astro/server_BaiqywD4.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation } from '../chunks/Navigation_ypqGCELx.mjs';
import { $ as $$Newsletter } from '../chunks/Newsletter_CaoBYafr.mjs';
import { p as products } from '../chunks/products_BVky5YrB.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Kolekcja = createComponent(($$result, $$props, $$slots) => {
  const categories = ["Wszystkie", "Miski", "Wazony", "Kubki", "Talerze"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-navy-900 min-h-screen">  ${renderComponent($$result2, "Navigation", $$Navigation, {})}  <div class="pt-48 pb-24 px-6 text-center"> <h1 class="text-5xl md:text-7xl font-serif text-cream-100 mb-6">Kolekcja</h1> <p class="text-cream-100/60 max-w-xl mx-auto font-body text-lg">
Przedmioty stworzone, by nadawać codzienności rangę rytuału.
</p> </div>  <div class="border-y border-white/5 mb-16 overflow-x-auto"> <div class="max-w-7xl mx-auto px-6 flex justify-center min-w-max"> <div class="flex gap-8 md:gap-16 py-6 font-serif text-lg tracking-wide text-cream-100/60"> ${categories.map((cat, i) => renderTemplate`<button${addAttribute(`hover:text-bronze-500 transition-colors ${i === 0 ? "text-bronze-500" : ""}`, "class")}> ${cat} </button>`)} </div> </div> </div>  <div class="max-w-7xl mx-auto px-6 pb-32"> <div class="grid md:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-12"> ${products.map((product) => renderTemplate`<a${addAttribute(`/produkt/${product.id}`, "href")}${addAttribute(`group cursor-pointer reveal-on-scroll delay-${product.delay} block`, "class")}> <div class="relative aspect-[4/5] overflow-hidden mb-6"> <div class="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-500 z-10"></div> <img${addAttribute(product.images[0], "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"${addAttribute(renderTransition($$result2, "zhpjufeg", "", `image-${product.id}`), "data-astro-transition-scope")}>  <div class="absolute bottom-12 left-0 right-0 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20"> <span class="inline-block px-6 py-2 border border-white/30 text-cream-100 text-xs tracking-widest uppercase bg-navy-900/30 backdrop-blur-md">Zobacz Detal</span> </div> </div> <div class="text-center space-y-2"> <h3 class="text-2xl text-cream-100 font-serif group-hover:text-bronze-500 transition-colors duration-300"${addAttribute(renderTransition($$result2, "zmfscxef", "", `title-${product.id}`), "data-astro-transition-scope")}>${product.name}</h3> <p class="text-white/40 font-body text-xs mt-1 uppercase tracking-widest">${product.category} • ${product.price}</p> </div> </a>`)} </div> </div> ${renderComponent($$result2, "Newsletter", $$Newsletter, {})}  <footer class="bg-navy-900 border-t border-white/5 py-16 px-6 text-center"> <h2 class="text-3xl font-serif text-cream-100 mb-6">Aleksandra Ptasznik</h2> <div class="flex justify-center gap-8 mb-8 text-sm tracking-widest uppercase text-cream-100/60 font-serif"> <a href="#" class="hover:text-bronze-500 transition-colors">Instagram</a> <a href="#" class="hover:text-bronze-500 transition-colors">Kontakt</a> <a href="#" class="hover:text-bronze-500 transition-colors">Regulamin</a> </div> <p class="text-white/20 font-body text-sm">© 2026 Ptasznik Ceramics. Rękodzieło z duszą.</p> </footer> </main> ` })}`;
}, "/Users/antoniptasznik/Downloads/Moja pasja/src/pages/kolekcja.astro", "self");

const $$file = "/Users/antoniptasznik/Downloads/Moja pasja/src/pages/kolekcja.astro";
const $$url = "/kolekcja";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kolekcja,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
