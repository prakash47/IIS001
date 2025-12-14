"use server";

import { BookingSchema, type BookingFormData } from "@/lib/types";
import { type ActionResponse } from "@/types";

export async function createBooking(prevState: any, formData: FormData): Promise<ActionResponse<BookingFormData>> {
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const rawData = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        date: formData.get("date"),
        time: formData.get("time"),
        partySize: formData.get("partySize"),
    };

    const result = BookingSchema.safeParse(rawData);

    if (!result.success) {
        return {
            success: false,
            message: "Please fix the errors below.",
            errors: result.error.flatten().fieldErrors,
        };
    }

    // TODO: Connect to actual database or email service
    console.log("Booking Received:", result.data);

    return {
        success: true,
        message: "Booking confirmed! We look forward to seeing you.",
        data: result.data,
    };
}
