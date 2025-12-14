"use client";

import { useActionState, useEffect, useState } from "react";
import { createBooking } from "@/actions/booking";
import {
    Loader2, Calendar, Clock, User, Phone, Mail, CheckCircle2,
    ChevronRight, ArrowRight, UtensilsCrossed
} from "lucide-react";
import { type ActionResponse } from "@/types";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const initialState: ActionResponse<any> = {
    success: false,
    message: "",
};

const STEPS = [
    { id: 1, title: "Your Details", icon: User },
    { id: 2, title: "Date & Time", icon: Calendar },
    { id: 3, title: "Confirmation", icon: CheckCircle2 },
];

export function BookingForm() {
    const [state, action, isPending] = useActionState(createBooking, initialState);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "", phone: "", email: "", partySize: "2", date: "", time: ""
    });

    // Handle Input Change for Controlled Inputs (needed for multi-step)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (state.success) {
            toast.success("Reservation Confirmed!", {
                description: "We have sent a confirmation email to your inbox.",
                duration: 5000,
            });
            setStep(3); // Move to success step
        } else if (state.message) {
            toast.error(state.message);
        }
    }, [state]);

    const nextStep = () => {
        // Generic validation for Step 1
        if (step === 1) {
            if (!formData.name || !formData.phone || !formData.email) {
                toast.error("Please fill in all contact details.");
                return;
            }
            setStep(2);
        }
    };

    const prevStep = () => setStep(step - 1);

    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl shadow-2xl p-8 md:p-10">
            {/* Decorative Gradient Blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 mb-8">
                <h2 className="text-3xl font-serif font-bold text-white mb-2">Book a Table</h2>
                <p className="text-gray-400">Join us for an unforgettable evening.</p>

                {/* Step Indicator */}
                <div className="flex items-center gap-4 mt-6">
                    {STEPS.map((s) => {
                        const isActive = step >= s.id;
                        const isCurrent = step === s.id;
                        return (
                            <div key={s.id} className="flex items-center gap-2">
                                <div className={cn(
                                    "flex items-center justify-center size-8 rounded-full text-xs font-bold transition-all duration-300",
                                    isActive ? "bg-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)]" : "bg-white/10 text-gray-400"
                                )}>
                                    {isActive ? <s.icon className="size-4" /> : s.id}
                                </div>
                                {s.id !== 3 && (
                                    <div className={cn("w-8 md:w-16 h-0.5 rounded-full transition-colors duration-300", isActive ? "bg-amber-500/50" : "bg-white/10")} />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            <form action={action} className="relative z-10 space-y-6">
                {/* Hidden inputs to pass data to server action from state */}
                <input type="hidden" name="name" value={formData.name} />
                <input type="hidden" name="phone" value={formData.phone} />
                <input type="hidden" name="email" value={formData.email} />
                <input type="hidden" name="partySize" value={formData.partySize} />
                <input type="hidden" name="date" value={formData.date} />
                <input type="hidden" name="time" value={formData.time} />

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-5"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-amber-500/80 flex items-center gap-2">
                                    <User className="size-4" /> Full Name
                                </label>
                                <input
                                    type="text" name="name" value={formData.name} onChange={handleChange}
                                    placeholder="e.g. Alexander Hamilton"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-amber-500/80 flex items-center gap-2">
                                        <Phone className="size-4" /> Phone
                                    </label>
                                    <input
                                        type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                        placeholder="(555) 000-0000"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-amber-500/80 flex items-center gap-2">
                                        <Mail className="size-4" /> Email
                                    </label>
                                    <input
                                        type="email" name="email" value={formData.email} onChange={handleChange}
                                        placeholder="alex@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-amber-500/80 flex items-center gap-2">
                                    <UtensilsCrossed className="size-4" /> Party Size
                                </label>
                                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-2">
                                    {[2, 3, 4, 5, 6, 8].map(size => (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, partySize: size.toString() })}
                                            className={cn(
                                                "flex-1 py-2 rounded-lg text-sm font-medium transition-all",
                                                formData.partySize === size.toString()
                                                    ? "bg-amber-500 text-white shadow-lg"
                                                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                                            )}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                    <input
                                        type="number" name="partySize" value={formData.partySize} onChange={handleChange}
                                        className="w-16 bg-transparent text-center text-white outline-none border-l border-white/10 pl-2 ml-2"
                                        min="1" max="20"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-amber-500/80 flex items-center gap-2">
                                    <Calendar className="size-4" /> Select Date
                                </label>
                                <input
                                    type="date" name="date" value={formData.date} onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all [color-scheme:dark] cursor-pointer"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-amber-500/80 flex items-center gap-2">
                                    <Clock className="size-4" /> Select Time
                                </label>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                    {["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"].map(t => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, time: t })}
                                            className={cn(
                                                "py-2 px-3 rounded-lg border text-sm font-medium transition-all",
                                                formData.time === t
                                                    ? "bg-amber-500 border-amber-500 text-white shadow-lg transform scale-105"
                                                    : "bg-white/5 border-white/10 text-gray-300 hover:border-amber-500/50 hover:text-white"
                                            )}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                                <input type="hidden" name="time" value={formData.time} required />
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center py-10"
                        >
                            <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="size-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
                            <p className="text-gray-400 max-w-xs mx-auto mb-8">
                                We can't wait to host you on <strong className="text-white">{formData.date}</strong> at <strong className="text-white">{formData.time}</strong>.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setStep(1);
                                    setFormData({ name: "", phone: "", email: "", partySize: "2", date: "", time: "" });
                                }}
                                className="text-amber-500 hover:text-amber-400 font-medium hover:underline"
                            >
                                Make another reservation
                            </button>
                            {/* Stop form submission here since it's already done */}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Action Buttons */}
                {step < 3 && (
                    <div className="flex gap-4 pt-4 border-t border-white/10 mt-8">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all font-medium"
                            >
                                Back
                            </button>
                        )}

                        {step === 1 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
                            >
                                Next Step <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={isPending || !formData.date || !formData.time}
                                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-bold shadow-[0_4px_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="animate-spin size-5" /> Confirming...
                                    </>
                                ) : (
                                    <>
                                        Complete Reservation <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                )}
            </form>
        </div>
    );
}
