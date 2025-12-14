"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
    return (
        <Sonner
            theme="system"
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast:
                        "group-toast group-[.toaster]:bg-neutral-800 group-[.toaster]:text-white group-[.toaster]:border-white/10 group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-gray-400",
                    actionButton:
                        "group-[.toast]:bg-amber-500 group-[.toast]:text-white",
                    cancelButton:
                        "group-[.toast]:bg-neutral-700 group-[.toast]:text-gray-300",
                },
            }}
            {...props}
        />
    );
};

export { Toaster };
