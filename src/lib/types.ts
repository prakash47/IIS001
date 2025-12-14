import { z } from "zod";

export const BookingSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(10, "Phone number must be valid"),
    email: z.string().email("Invalid email address"),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
    time: z.string().min(1, "Time is required"),
    partySize: z.coerce.number().min(1, "Party size must be at least 1").max(20, "For groups larger than 20, please call us directly"),
});

export type BookingFormData = z.infer<typeof BookingSchema>;

export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: "Appetizers" | "Mains" | "Desserts" | "Drinks";
    image: string;
    isVegetarian?: boolean;
    isSpicy?: boolean;
};

export type GalleryImage = {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
};
