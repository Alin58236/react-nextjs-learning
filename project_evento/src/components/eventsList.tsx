import { EventType } from "@/lib/types";
import React from "react";
import { EventCard } from "./eventCard";
import next from "next";
import { getEventsByCity } from "@/lib/utils";

export const EventsList = async ({ city }: { city: string }) => {
  const slug = city.toLowerCase();

  console.log("Fetching events for city: " + slug);

  const events: EventType[] = await getEventsByCity(slug);

  console.log(events);
  

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};
