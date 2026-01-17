import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate, k as renderComponent, l as renderTransition } from '../chunks/astro/server_BaiqywD4.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation } from '../chunks/Navigation_ypqGCELx.mjs';
import 'clsx';
import { $ as $$Newsletter } from '../chunks/Newsletter_CaoBYafr.mjs';
/* empty css                                 */
import { p as products } from '../chunks/products_BVky5YrB.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`relative px-6 py-24 md:py-32 ${className || ""}`, "class")}> <div class="mx-auto max-w-7xl w-full"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/antoniptasznik/Downloads/Moja pasja/src/components/Section.astro", void 0);

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, variant = "primary", class: className } = Astro2.props;
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-[0.2em] transition-all duration-300 font-serif border font-semibold";
  const variants = {
    primary: "bg-bronze-500 border-bronze-500 text-navy-900 hover:bg-white hover:border-white hover:text-navy-900",
    outline: "bg-transparent border-bronze-500 text-bronze-500 hover:bg-bronze-500 hover:text-navy-900"
  };
  const styles = `${baseStyles} ${variants[variant]} ${className || ""}`;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(styles, "class")}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(styles, "class")}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/Users/antoniptasznik/Downloads/Moja pasja/src/components/Button.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      title: "Toczenie",
      desc: "Ka\u017Cda forma rodzi si\u0119 na kole garncarskim. To dialog mi\u0119dzy d\u0142o\u0144mi a glin\u0105, wymagaj\u0105cy cierpliwo\u015Bci i si\u0142y.",
      image: "/process-wheel.png"
    },
    {
      title: "Szkliwienie",
      desc: "Autorskie szkliwa nak\u0142adam r\u0119cznie, warstwa po warstwie. To one nadaj\u0105 ceramice unikaln\u0105 tekstur\u0119 i g\u0142\u0119bi\u0119.",
      image: "/process-glaze.png"
    },
    {
      title: "Wypa\u0142",
      desc: "Ostateczny test w temperaturze 1240\xB0C. Ogie\u0144 utrwala form\u0119 i wydobywa kolory, kt\xF3rych nie da si\u0119 w pe\u0142ni przewidzie\u0107.",
      image: "/process-fire.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="process" class="py-24 px-6 bg-navy-900 text-cream-100"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16 space-y-4"> <div class="w-1 bg-bronze-500 h-12 mx-auto mb-6"></div> <h2 class="text-4xl md:text-5xl font-serif">Proces <span class="italic text-bronze-500">Tworzenia</span></h2> </div> <div class="grid md:grid-cols-3 gap-12"> ${steps.map((step, index) => renderTemplate`<div class="space-y-6 group"> <div class="relative aspect-[4/5] overflow-hidden border border-white/5"> <img${addAttribute(step.image, "src")}${addAttribute(step.title, "alt")} class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"> <div class="absolute top-4 left-4 text-6xl font-serif text-white/10">${index + 1}</div> </div> <h3 class="text-2xl font-serif text-bronze-500">${step.title}</h3> <p class="text-cream-100/70 font-body leading-relaxed border-l border-bronze-500/30 pl-4"> ${step.desc} </p> </div>`)} </div> </div> </section>`;
}, "/Users/antoniptasznik/Downloads/Moja pasja/src/components/Process.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const reviews = [
    {
      text: "Jest w tej ceramice co\u015B pierwotnego. Kiedy trzymam w d\u0142oniach kubek od Aleksandry, czuj\u0119 spok\xF3j. To nie jest po prostu przedmiot, to do\u015Bwiadczenie.",
      author: "Marta K.",
      role: "Kolekcjonerka z Warszawy"
    },
    {
      text: "Zam\xF3wi\u0142am wazon na prezent \u015Blubny. Przyszed\u0142 zapakowany jak dzie\u0142o sztuki. Pi\u0119kny, ci\u0119\u017Cki, z dusz\u0105. Nowo\u017Ce\u0144cy byli zachwyceni.",
      author: "Anna W.",
      role: "Architekt Wn\u0119trz"
    },
    {
      text: "Uwielbiam surowo\u015B\u0107 tych form. Idealnie kontrastuj\u0105 z moim minimalistycznym mieszkaniem. To ceramika, kt\xF3ra ma charakter.",
      author: "Tomasz R.",
      role: "Fotograf"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="testimonials" class="py-24 bg-navy-900 border-t border-white/5 overflow-hidden"> <div class="max-w-7xl mx-auto px-6"> <div class="text-center mb-16 space-y-4"> <span class="text-bronze-500 font-serif italic text-xl tracking-widest">Słowa uznania</span> <h2 class="text-4xl md:text-6xl font-serif text-cream-100">Notatki od <span class="italic text-bronze-500">Kolekcjonerów</span></h2> </div>  <div class="flex flex-col md:flex-row gap-8 items-stretch md:justify-center"> ${reviews.map((review, i) => renderTemplate`<div${addAttribute(`relative group flex-1 min-w-[300px] p-8 md:p-10 bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-bronze-500/30 transition-all duration-500 reveal-on-scroll delay-${i * 100} rounded-sm`, "class")}>  <div class="absolute top-6 left-6 text-6xl font-serif text-bronze-500/20 leading-none">"</div> <div class="relative z-10 flex flex-col h-full justify-between gap-8 pt-8"> <p class="text-lg md:text-xl font-serif text-cream-100/90 leading-relaxed italic"> ${review.text} </p> <div class="flex items-center gap-4 pt-4 border-t border-white/5"> <div class="w-10 h-10 rounded-full bg-bronze-500/20 flex items-center justify-center text-bronze-500 font-serif font-bold"> ${review.author[0]} </div> <div> <p class="text-sm font-bold text-cream-100 uppercase tracking-widest">${review.author}</p> <p class="text-xs text-bronze-500 uppercase tracking-wider mt-1">${review.role}</p> </div> </div> </div> </div>`)} </div> </div> </section>`;
}, "/Users/antoniptasznik/Downloads/Moja pasja/src/components/Testimonials.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "Piel\u0119gnacja i mycie",
      answer: "Moja ceramika jest wypalana w temperaturze 1240\xB0C, co czyni j\u0105 niezwykle trwa\u0142\u0105. Mo\u017Cna j\u0105 bezpiecznie my\u0107 w zmywarce, cho\u0107 dla zachowania idealnego blasku szkliwa na lata, polecam mycie r\u0119czne. Unikaj ekstremalnych szkok\xF3w termicznych (wrz\u0105tek do zamro\u017Conego naczynia)."
    },
    {
      question: "Bezpieczna wysy\u0142ka",
      answer: "Ka\u017Cdy przedmiot pakuj\u0119 'pancernie'. U\u017Cywam ekologicznych wype\u0142niaczy (plaster miodu), folii b\u0105belkowej z recyklingu i podw\xF3jnych karton\xF3w. W rzadkich przypadkach uszkodzenia w transporcie, natychmiast zwracam pieni\u0105dze lub wysy\u0142am nowy produkt na m\xF3j koszt."
    },
    {
      question: "Zwroty i reklamacje",
      answer: "Masz 30 dni na zwrot bez podania przyczyny. Je\u015Bli ceramika nie pasuje do Twojego wn\u0119trza, po prostu j\u0105 ode\u015Blij. Zale\u017Cy mi, aby moje prace dawa\u0142y rado\u015B\u0107, a nie zagraca\u0142y p\xF3\u0142ki."
    },
    {
      question: "Zam\xF3wienia indywidualne",
      answer: "Regularnie realizuj\u0119 zam\xF3wienia dla restauracji i kolekcjoner\xF3w. Napisz do mnie, aby om\xF3wi\u0107 terminy i mo\u017Cliwo\u015Bci realizacji w\u0142asnego projektu."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="py-24 px-6 bg-navy-900 border-t border-white/5" data-astro-cid-al2ca2vr> <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-24" data-astro-cid-al2ca2vr>  <div class="md:col-span-4" data-astro-cid-al2ca2vr> <div class="sticky top-24 space-y-4" data-astro-cid-al2ca2vr> <span class="text-bronze-500 font-serif italic text-xl tracking-widest block mb-2" data-astro-cid-al2ca2vr>Informacje</span> <h2 class="text-4xl text-cream-100 font-serif leading-tight" data-astro-cid-al2ca2vr>Najczęstsze <br data-astro-cid-al2ca2vr> pytania</h2> <p class="text-cream-100/60 font-body mt-4" data-astro-cid-al2ca2vr>
Wszystko, co musisz wiedzieć o użytkowaniu i dostawie mojej ceramiki.
</p> </div> </div>  <div class="md:col-span-8 space-y-4" data-astro-cid-al2ca2vr> ${faqs.map((faq, index) => renderTemplate`<details class="group bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 border border-white/5 rounded-sm overflow-hidden reveal-on-scroll" data-astro-cid-al2ca2vr> <summary class="flex justify-between items-center p-6 cursor-pointer list-none" data-astro-cid-al2ca2vr> <h3 class="text-xl font-serif text-cream-100 group-hover:text-bronze-500 transition-colors" data-astro-cid-al2ca2vr>${faq.question}</h3> <span class="text-bronze-500 text-2xl transition-transform duration-300 group-open:rotate-45 font-light" data-astro-cid-al2ca2vr>+</span> </summary> <div class="px-6 pb-6 text-cream-100/70 font-body leading-relaxed max-w-2xl" data-astro-cid-al2ca2vr> <p data-astro-cid-al2ca2vr>${faq.answer}</p> </div> </details>`)} </div> </div> </section> `;
}, "/Users/antoniptasznik/Downloads/Moja pasja/src/components/FAQ.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main>  ${renderComponent($$result2, "Navigation", $$Navigation, {})}  <div class="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">  <div class="absolute inset-0 z-0"> <img src="/hero.png" alt="Rustykalna ceramika na ciemnym stole" class="w-full h-full object-cover opacity-60 animate-fade-in"> <div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent"></div> </div> <div class="relative z-10 text-center space-y-8 px-6 max-w-4xl mx-auto animate-slide-up"> <h2 class="text-bronze-500 font-serif italic text-xl md:text-2xl tracking-widest uppercase">Ceramika, która zaprasza spokój do wnętrza</h2> <h1 class="text-6xl md:text-8xl lg:text-9xl font-serif text-cream-100 leading-tight">
Zrodzone z <br> <span class="text-bronze-500/80 italic">ciszy</span> </h1> <p class="text-cream-100/80 max-w-2xl mx-auto font-body text-lg md:text-xl leading-relaxed">
Nieśpiesznie toczona glina, utrwalona przez ogień. Tworzę organiczne przedmioty, które celebrują niedoskonałość i pozwalają zatrzymać się w codziennym biegu.
</p> <div class="pt-8 flex flex-col md:flex-row gap-6 justify-center"> ${renderComponent($$result2, "Button", $$Button, { "href": "/kolekcja" }, { "default": ($$result3) => renderTemplate`Zobacz kolekcję` })} ${renderComponent($$result2, "Button", $$Button, { "href": "#about", "variant": "outline" }, { "default": ($$result3) => renderTemplate`O artystce` })} </div> </div> </div>  ${renderComponent($$result2, "Section", $$Section, { "id": "about", "class": "bg-navy-900" }, { "default": ($$result3) => renderTemplate` <div class="grid md:grid-cols-2 gap-12 md:gap-24 items-start relative">  <div class="space-y-24 md:space-y-32 py-12"> <div class="space-y-8 reveal-on-scroll"> <div class="w-16 h-[1px] bg-bronze-500"></div> <h2 class="text-4xl md:text-5xl text-cream-100">Sztuka <br><span class="italic text-bronze-500">powolnego tworzenia</span></h2> <p class="text-lg text-cream-100/70 leading-relaxed font-body">
W świecie masowej produkcji wybieram koło garncarskie. Każdy element jest ręcznie toczony w mojej małej pracowni. Glina pamięta dotyk, na zawsze zamykając moment tworzenia w kamieniu.
</p> </div>  <div class="space-y-16 md:space-y-24 mt-16">  <div class="reveal-on-scroll group"> <h3 class="text-2xl text-cream-100 font-serif mb-4 flex items-center gap-4"> <span class="w-8 h-[1px] bg-bronze-500"></span>
Ślad Ludzkiej Ręki
</h3> <p class="text-cream-100/60 font-body leading-relaxed max-w-sm pl-12 group-hover:text-cream-100/80 transition-colors duration-500">
Każdy przedmiot nosi ślad dłoni. To nie są idealnie równe odlewy z fabryki, ale formy z duszą, kształtowane w rytmie koła garncarskiego.
</p> </div>  <div class="reveal-on-scroll group delay-100"> <h3 class="text-2xl text-cream-100 font-serif mb-4 flex items-center gap-4"> <span class="w-8 h-[1px] bg-bronze-500"></span>
Niepowtarzalność
</h3> <p class="text-cream-100/60 font-body leading-relaxed max-w-sm pl-12 group-hover:text-cream-100/80 transition-colors duration-500">
Nie ma dwóch identycznych naczyń. Szkliwo płynie własnym rytmem, a ogień w piecu każdorazowo maluje inną, unikalną historię na ceramice.
</p> </div>  <div class="reveal-on-scroll group delay-200"> <h3 class="text-2xl text-cream-100 font-serif mb-4 flex items-center gap-4"> <span class="w-8 h-[1px] bg-bronze-500"></span>
Znad Zalewu Szczecińskiego
</h3> <p class="text-cream-100/60 font-body leading-relaxed max-w-sm pl-12 group-hover:text-cream-100/80 transition-colors duration-500">
Tworzę w małej, przydomowej pracowni w Gąsierzynie. Spokój znad Zalewu Szczecińskiego i surowy klimat Stepnicy przenikają do gliny, nadając jej autentyczny charakter.
</p> </div> </div> </div>  <div class="md:sticky md:top-24 h-fit reveal-on-scroll delay-200"> <div class="relative aspect-[4/5] bg-navy-900 border border-white/5 p-4"> <div class="absolute inset-0 bg-gradient-to-tr from-bronze-500/10 to-transparent pointer-events-none mix-blend-overlay"></div> <img src="/artist.jpg" alt="Aleksandra Ptasznik - artystka" class="w-full h-full object-cover grayscale contrast-125"> </div> <p class="text-center text-xs text-cream-100/30 mt-4 uppercase tracking-widest font-serif">Aleksandra Ptasznik, 2026</p> </div> </div> ` })} ${renderComponent($$result2, "Process", $$Process, {})}  ${renderComponent($$result2, "Section", $$Section, { "id": "gallery" }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-16 space-y-4 reveal-on-scroll"> <h2 class="text-4xl md:text-6xl text-cream-100">Wybrane <span class="italic text-bronze-500">prace</span></h2> </div> <div class="grid md:grid-cols-3 gap-8 md:gap-12"> ${products.slice(0, 3).map((product) => renderTemplate`<a${addAttribute(`/produkt/${product.id}`, "href")}${addAttribute(`group cursor-pointer reveal-on-scroll delay-${product.delay} block`, "class")}> <div class="relative aspect-[3/4] overflow-hidden mb-6"> <div class="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-500 z-10"></div> <img${addAttribute(product.images[0], "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"${addAttribute(renderTransition($$result3, "mg44nkrv", "", `image-${product.id}`), "data-astro-transition-scope")}>  <div class="absolute bottom-12 left-0 right-0 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20"> <span class="inline-block px-6 py-2 border border-white/30 text-cream-100 text-xs tracking-widest uppercase bg-navy-900/30 backdrop-blur-md">Zobacz Detal</span> </div> </div> <div class="text-center space-y-2"> <h3 class="text-2xl text-cream-100 font-serif group-hover:text-bronze-500 transition-colors duration-300"${addAttribute(renderTransition($$result3, "q3kpjzws", "", `title-${product.id}`), "data-astro-transition-scope")}>${product.name}</h3> <p class="text-white/40 font-body text-xs mt-1 uppercase tracking-widest">${product.category} • ${product.price}</p> </div> </a>`)} </div> <div class="text-center mt-16 reveal-on-scroll"> ${renderComponent($$result3, "Button", $$Button, { "href": "/kolekcja", "variant": "outline" }, { "default": ($$result4) => renderTemplate`Zobacz pełną ofertę` })} </div> ` })} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "Newsletter", $$Newsletter, {})}  <footer class="bg-navy-900 border-t border-white/5 py-16 px-6 text-center"> <h2 class="text-3xl font-serif text-cream-100 mb-6">Aleksandra Ptasznik</h2> <div class="flex justify-center gap-8 mb-8 text-sm tracking-widest uppercase text-cream-100/60 font-serif"> <a href="#" class="hover:text-bronze-500 transition-colors">Instagram</a> <a href="#" class="hover:text-bronze-500 transition-colors">Kontakt</a> <a href="#" class="hover:text-bronze-500 transition-colors">Regulamin</a> </div> <p class="text-white/20 font-body text-sm">© 2026 Ptasznik Ceramics. Rękodzieło z duszą.</p> </footer> </main> ` })}`;
}, "/Users/antoniptasznik/Downloads/Moja pasja/src/pages/index.astro", "self");

const $$file = "/Users/antoniptasznik/Downloads/Moja pasja/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
