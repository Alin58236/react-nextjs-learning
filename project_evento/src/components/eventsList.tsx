import { EventType } from "@/lib/types";
import React from "react";
import { EventCard } from "./eventCard";

export const EventsList = ({ events }: { events: EventType[] }) => {
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};
