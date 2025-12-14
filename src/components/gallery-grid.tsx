"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const GALLERY_IMAGES = [
    { id: 1, src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200", alt: "Signature Cocktail" },
    { id: 2, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200", alt: "Plating Detail" },
    { id: 3, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200", alt: "Dining Room" },
    { id: 4, src: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=1200", alt: "Chef Special" },
    { id: 5, src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1200", alt: "Private Dining" },
    { id: 6, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200", alt: "Dessert" },
];

export function GalleryGrid() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedImageIndex(index);
    const closeLightbox = () => setSelectedImageIndex(null);

    const nextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev! + 1));
        }
    };

    const prevImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev! - 1));
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {GALLERY_IMAGES.map((image, index) => (
                    <div
                        key={image.id}
                        onClick={() => openLightbox(index)}
                        className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                            <p className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                View
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Overlay */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                    >
                        <X className="size-10" />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hidden sm:block"
                    >
                        <ChevronLeft className="size-12" />
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video">
                        <img
                            src={GALLERY_IMAGES[selectedImageIndex].src}
                            alt={GALLERY_IMAGES[selectedImageIndex].alt}
                            className="w-full h-full object-contain"
                        />
                        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-medium drop-shadow-md">
                            {GALLERY_IMAGES[selectedImageIndex].alt}
                        </p>
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hidden sm:block"
                    >
                        <ChevronRight className="size-12" />
                    </button>
                </div>
            )}
        </>
    );
}
