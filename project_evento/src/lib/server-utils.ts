import "server-only";
import { EventoEvent } from "@prisma/client";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalize } from "./utils";

//with server-only we can be sure that this code will only run on the server, so we can safely use prisma and other server-side libraries without worrying about client-side bundling issues. This is especially important for libraries like prisma that rely on Node.js APIs and cannot be used in a browser environment.
//also this way the client is further from the database, which is a good thing for security and performance reasons. By keeping the database interactions on the server, we can ensure that sensitive data is not exposed to the client and that the client only receives the necessary data for rendering the UI.
//different from server actions which are meant to be used for handling form submissions and other user interactions, server-only code is meant to be used for any server-side logic that needs to be executed, regardless of whether it's triggered by a user action or not. This can include things like data fetching, authentication, and other server-side operations that are necessary for the application to function properly.

export const getEventsByCityAndPage = unstable_cache( async (city: string, page: number) =>  {

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
})

export const getEventBySlug = unstable_cache( async (slug: string) => {

    const event = await prisma.eventoEvent.findUnique({
        where: {
            slug: slug,
        },
        
    });

    if(!event) {
        return notFound();
    }

    return event;
})

