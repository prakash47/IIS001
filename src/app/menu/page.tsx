import { MENU_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function MenuPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>;
}) {
    const { category = "All" } = await searchParams;

    const categories = ["All", "Appetizers", "Mains", "Desserts", "Drinks"];

    const filteredItems = category === "All"
        ? MENU_ITEMS
        : MENU_ITEMS.filter((item) => item.category === category);

    return (
        <div className="bg-neutral-900 min-h-screen pb-20">
            <div className="bg-neutral-800 py-16 md:py-24 mb-12">
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Menu</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover a symphony of flavors prepared with passion and precision.
                    </p>
                </div>
            </div>

            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Filter Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <Link
                            key={cat}
                            href={cat === "All" ? "/menu" : `/menu?category=${cat}`}
                            className={cn(
                                "px-6 py-2 rounded-full border transition-all duration-200 text-sm font-medium",
                                category === cat
                                    ? "bg-amber-500 border-amber-500 text-white"
                                    : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                            )}
                        >
                            {cat}
                        </Link>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="group flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-grow w-full">
                                <div className="flex justify-between items-baseline mb-2 border-b border-white/10 pb-2 border-dotted">
                                    <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                                        {item.name}
                                    </h3>
                                    <span className="text-xl font-semibold text-amber-500">${item.price}</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                                    {item.description}
                                </p>
                                <div className="flex gap-2">
                                    {item.isVegetarian && (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400 ring-1 ring-inset ring-green-600/20">
                                            Vegetarian
                                        </span>
                                    )}
                                    {item.isSpicy && (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-500/10 text-red-400 ring-1 ring-inset ring-red-600/20">
                                            Spicy
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No items found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
