import { e as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_BaiqywD4.mjs';
import 'piccolore';
import 'clsx';

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="newsletter" class="py-24 px-6 bg-navy-900 border-t border-b border-bronze-500/20"> <div class="max-w-4xl mx-auto text-center space-y-8"> <h2 class="text-3xl md:text-5xl font-serif text-cream-100 italic">Kolekcjonerski Newsletter</h2> <p class="text-cream-100/70 text-lg font-body max-w-2xl mx-auto">
Moja ceramika powstaje w krótkich, limitowanych seriach. Zapisz się, aby otrzymać powiadomienie o nowym "Dropie" 24 godziny przed oficjalną premierą.
</p> <form class="max-w-md mx-auto flex flex-col md:flex-row gap-4"> <input type="email" placeholder="Twój adres email" class="flex-1 bg-transparent border border-bronze-500/50 px-6 py-3 text-cream-100 placeholder-cream-100/30 focus:outline-none focus:border-bronze-500 transition-colors font-body" required> <button type="submit" class="bg-bronze-500 text-navy-900 px-8 py-3 uppercase tracking-widest font-serif font-semibold hover:bg-white transition-colors duration-300">
Dołącz
</button> </form> <p class="text-xs text-cream-100/40 uppercase tracking-widest">Bez spamu. Tylko sztuka.</p> </div> </section>`;
}, "/Users/antoniptasznik/Downloads/Moja pasja/src/components/Newsletter.astro", void 0);

export { $$Newsletter as $ };
