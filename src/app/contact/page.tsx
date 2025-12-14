import { BookingForm } from "@/components/booking-form";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-neutral-900 min-h-screen pb-20 relative overflow-hidden">
            {/* Background Ambient Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-700/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-0 py-16 md:py-24 mb-12 border-b border-white/5">
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto text-center relative z-10">
                    <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in">Connect With Us</span>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Reservations <span className="text-amber-500">&</span> Contact
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Whether for a romantic dinner or a large celebration, we are here to make your experience exceptional.
                    </p>
                </div>
            </div>

            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Contact Info Panel */}
                    <div className="space-y-12 lg:sticky lg:top-32">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6 font-serif border-l-4 border-amber-500 pl-4">Get in Touch</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Have questions about the menu or need to arrange a private event?
                                Our concierge team is at your disposal.
                            </p>

                            <div className="flex gap-4">
                                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 group">
                                        <Icon className="size-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="group flex gap-5 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                                <div className="flex-shrink-0 size-14 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:text-white group-hover:bg-amber-500 transition-all duration-300">
                                    <MapPin className="size-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                                    <p className="text-gray-400 leading-relaxed font-light">
                                        123 Culinary Avenue, Food City,<br />
                                        FC 90210, United States
                                    </p>
                                    <a href="#" className="text-amber-500 text-sm font-medium mt-2 inline-block hover:underline">Get Directions</a>
                                </div>
                            </div>

                            <div className="group flex gap-5 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                                <div className="flex-shrink-0 size-14 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:text-white group-hover:bg-amber-500 transition-all duration-300">
                                    <Phone className="size-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Concierge</h3>
                                    <p className="text-gray-400 text-lg font-light">
                                        +1 (555) 123-4567
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Available daily from 10 AM to 10 PM
                                    </p>
                                </div>
                            </div>

                            <div className="group flex gap-5 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                                <div className="flex-shrink-0 size-14 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:text-white group-hover:bg-amber-500 transition-all duration-300">
                                    <Clock className="size-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Opening Hours</h3>
                                    <ul className="text-gray-400 space-y-1 font-light">
                                        <li className="flex justify-between w-48"><span>Mon - Thu</span> <span>5 PM - 10 PM</span></li>
                                        <li className="flex justify-between w-48"><span>Fri - Sat</span> <span>5 PM - 11 PM</span></li>
                                        <li className="flex justify-between w-48"><span>Sun</span> <span>4 PM - 9 PM</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="lg:mt-12">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
