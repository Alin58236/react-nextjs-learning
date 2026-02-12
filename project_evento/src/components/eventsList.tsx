import { EventType } from "@/lib/types";
import React from "react";
import { EventCard } from "./eventCard";

export const EventsList = async ({ city }: { city: string }) => {

  const slug = city.toLowerCase();
  const searchString =  `https://bytegrad.com/course-assets/projects/evento/api/events?city=${slug}`;
  console.log("Fetching events for city: " + searchString);

  const response = await fetch(
    searchString,
  );

  console.log(response);
  const events: EventType[] = await response.json();

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};
