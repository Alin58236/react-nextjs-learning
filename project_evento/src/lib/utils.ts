import { EventoEvent } from "@prisma/client";

import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";





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

    console.log("Getting events for city:", city);
    const events: EventoEvent[] = await prisma.eventoEvent.findMany({
        where: {
            city: city === "All" ? undefined : capitalize(city),
        },
        orderBy: {
            date: "asc",
        },
    });

    if(!events || events.length === 0) {
        return notFound();
    }

    return events;
}

export async function getEventBySlug(slug: string) {

    const event = await prisma.eventoEvent.findUnique({
        where: {
            slug: slug,
        },
        
    });

    if(!event) {
        return notFound();
    }


    return event;
}

