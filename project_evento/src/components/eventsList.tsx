import React from "react";
import { EventCard } from "./eventCard";
import next from "next";
import { getEventsByCity } from "@/lib/utils";
import { EventoEvent } from "@prisma/client";

export const EventsList = async ({ city }: { city: string }) => {
  console.log("Fetching events for city: " + city);
  const events: EventoEvent[] = await getEventsByCity(city);

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />     
        
      ))}
    </section>
  );
};
