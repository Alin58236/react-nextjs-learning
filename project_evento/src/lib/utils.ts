import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//classValue is basically Instanceof and displays the class of the object -> letting me put strings or objects in inputs
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs))
}

export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEventsByCity(city: string) {
    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
        { next: { revalidate: 300 } }
    );
    const events = await response.json();
    return events;
} 

export async function getEventBySlug(slug: string) {
    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
        { next: { revalidate: 300 } }
    );
    const event = await response.json();
    return event;
}