import React, { useState } from 'react';

interface ProductGalleryProps {
    images: string[];
    name: string;
    isAvailable: boolean;
    id: string;
}

export default function ProductGallery({ images, name, isAvailable, id }: ProductGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // If no images, return fallback
    if (!images || images.length === 0) return null;

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="space-y-6">
            {/* Main Image */}
            <div
                className="relative aspect-[3/2] overflow-hidden bg-white/5 cursor-zoom-in group"
                onClick={() => setIsLightboxOpen(true)}
            >
                <img
                    src={images[selectedIndex]}
                    alt={`${name} - widok ${selectedIndex + 1}`}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 ${!isAvailable ? 'grayscale opacity-80' : ''
                        }`}
                    style={{ viewTransitionName: `image-${id}` }}
                />

                {/* Sold Out Badge */}
                {!isAvailable && (
                    <div className="absolute inset-0 bg-navy-900/40 backdrop-blur-[2px] flex items-center justify-center pointer-events-none">
                        <span className="border border-white/30 px-6 py-2 text-cream-100 text-xs tracking-widest uppercase bg-navy-900/60">
                            Wyprzedane
                        </span>
                    </div>
                )}

                {/* Hover Hint */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-navy-900/80 backdrop-blur-md p-2 rounded-full border border-white/10 text-cream-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedIndex(i)}
                            className={`relative aspect-square overflow-hidden cursor-pointer border transition-all duration-300 ${i === selectedIndex
                                ? 'border-bronze-500 ring-1 ring-bronze-500 opacity-100'
                                : 'border-white/10 hover:border-bronze-500 opacity-60 hover:opacity-100'
                                }`}
                            aria-label={`Pokaż zdjęcie ${i + 1}`}
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Lightbox / Modal */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/95 backdrop-blur-xl animate-fade-in"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 p-2 text-cream-100/60 hover:text-bronze-500 transition-colors z-50"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Previous Button */}
                    {images.length > 1 && (
                        <button
                            className="absolute left-4 md:left-8 p-4 text-cream-100/40 hover:text-bronze-500 transition-colors z-50"
                            onClick={prevImage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    )}

                    {/* Main Lightbox Image */}
                    <div
                        className="max-w-[90vw] max-h-[90vh] relative p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[selectedIndex]}
                            alt={name}
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl shadow-black/50"
                        />

                        {/* Counter */}
                        <div className="absolute -bottom-8 left-0 right-0 text-center text-cream-100/40 font-serif tracking-widest text-sm">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </div>

                    {/* Next Button */}
                    {images.length > 1 && (
                        <button
                            className="absolute right-4 md:right-8 p-4 text-cream-100/40 hover:text-bronze-500 transition-colors z-50"
                            onClick={nextImage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
