import { GalleryGrid } from "@/components/gallery-grid";

export default function GalleryPage() {
    return (
        <div className="bg-neutral-900 min-h-screen pb-20">
            <div className="bg-neutral-800 py-16 md:py-24 mb-12">
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Atmosphere</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Immerse yourself in the visual journey of The Saffron Table.
                    </p>
                </div>
            </div>

            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                <GalleryGrid />
            </div>
        </div>
    );
}
