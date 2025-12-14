import Link from "next/link";
import { ArrowRight, Star, Award, ChefHat } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-amber-500 font-semibold tracking-[0.2em] uppercase text-sm md:text-base animate-fade-in-up">
            Welcome to The Saffron Table
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mt-4 mb-6 leading-tight font-serif">
            Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            A sanctuary of culinary artistry where tradition meets innovation.
            Experience fine dining redefined in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-amber-600 border border-transparent rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 hover:scale-105"
            >
              Book a Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-transparent border border-white rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:scale-105"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features/Highlights */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors">
              <div className="inline-flex items-center justify-center size-16 rounded-full bg-amber-500/10 text-amber-500 mb-6">
                <ChefHat className="size-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Master Chefs</h3>
              <p className="text-gray-400">
                Curated by world-renowned chefs bringing you authentic flavors with modern twists.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors">
              <div className="inline-flex items-center justify-center size-16 rounded-full bg-amber-500/10 text-amber-500 mb-6">
                <Star className="size-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">5-Star Service</h3>
              <p className="text-gray-400">
                Impeccable service that anticipates your needs, ensuring a seamless dining experience.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors">
              <div className="inline-flex items-center justify-center size-16 rounded-full bg-amber-500/10 text-amber-500 mb-6">
                <Award className="size-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Award Winning</h3>
              <p className="text-gray-400">
                Recognized globally for our commitment to quality, ambiance, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel / Glimpse */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Glimpse of Elegance</h2>
          <Link href="/gallery" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium">
            View Full Gallery <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-96">
          <img src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Dish 1" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Dish 2" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Interior" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Dish 3" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </section>
    </div>
  );
}
