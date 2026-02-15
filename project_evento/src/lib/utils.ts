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

export async function getEventsByCityAndPage(city: string, page: number) {

    console.log("Getting events for city:", city, "page:", page);
    const events: EventoEvent[] = await prisma.eventoEvent.findMany({
        where: {
            city: city === "All" ? undefined : capitalize(city),
        },
        orderBy: {
            date: "asc",
        },
        take:6, // number of events per page
        skip: (page - 1) * 6, // skip the events from previous pages    
    });

    let totalEvents = 0;
    if(!events || events.length === 0) {
        return notFound();
    }

    if(city === "All") {
        totalEvents = await prisma.eventoEvent.count();
    } else {
        totalEvents = await prisma.eventoEvent.count({
            where: {

    
            city: city === "All" ? undefined : capitalize(city),
        },
    })}

    return { events, totalEvents };
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

