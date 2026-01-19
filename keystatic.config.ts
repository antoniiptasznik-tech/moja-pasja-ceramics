import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        products: collection({
            label: 'Produkty',
            slugField: 'name',
            path: 'src/content/products/*',
            format: { data: 'json' },
            schema: {
                name: fields.slug({ name: { label: 'Nazwa produktu' } }),
                category: fields.text({ label: 'Kategoria' }),
                price: fields.text({ label: 'Cena (np. 180 PLN)' }),
                description: fields.text({ label: 'Opis', multiline: true }),
                dimensions: fields.text({ label: 'Wymiary' }),
                care: fields.text({ label: 'Pielęgnacja', multiline: true }),
                images: fields.array(
                    fields.text({ label: 'URL obrazu (np. /bowl.png)' }),
                    {
                        label: 'Galeria obrazów',
                        itemLabel: props => props.value
                    }
                ),
                isAvailable: fields.checkbox({
                    label: 'Dostępny w sprzedaży',
                    description: 'Odznacz, jeśli produkt ma być widoczny jako wyprzedany',
                    defaultValue: true
                }),
                sequence: fields.number({
                    label: 'Kolejność wyświetlania',
                    defaultValue: 0
                }),
                delay: fields.text({
                    label: 'Czas wysyłki (np. 2-3 dni robocze)',
                    description: 'Pozostaw puste dla domyślnego czasu',
                }),
            },
        }),
        blog: collection({
            label: 'Blog',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Tytuł posta' } }),
                date: fields.date({ label: 'Data publikacji' }),
                excerpt: fields.text({ label: 'Krótki opis (zajawka)', multiline: true }),
                coverImage: fields.text({ label: 'URL obrazu okładkowego' }),
                content: fields.markdoc({
                    label: 'Treść posta',
                }),
            },
        }),
    },
});
