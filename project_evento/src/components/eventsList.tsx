import React from "react";
import { EventCard } from "./eventCard";
import next from "next";
import { getEventsByCity, getEventsByCityAndPage } from "@/lib/utils";
import { EventoEvent } from "@prisma/client";
import { EventsPageProps } from "@/lib/types";
import PaginationControls from "./paginationControls";

type EventsListComponentProps = {
  city: string;
  page: number;
};

function calculatePaths(city: string, page: number) {}

export const EventsList = async ({ city, page }: EventsListComponentProps) => {
  console.log("Fetching events for city: " + city + " page: " + page);
  const {
    events,
    totalEvents,
  }: { events: EventoEvent[]; totalEvents: number } =
    await getEventsByCityAndPage(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalEvents > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      <PaginationControls prev={previousPath} next={nextPath} />
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls prev={previousPath} next={nextPath} />
    </section>
  );
};
