import H1 from "@/components/h1";
import EventSection from "@/components/eventSection";

import Image from "next/image";
import React from "react";
import { getEventBySlug, sleep } from "@/lib/utils";
import { Metadata } from "next";
import { get } from "http";
import { EventoEvent } from "@/generated/prisma/client";

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event: EventoEvent = await getEventBySlug(slug);
  return {
    title: `Evento - ${event.name}`,
    description: "Discover and attend over 10,000 events worldwide!",
  };
}

const EventPage = async (params: PageProps) => {
  const { slug } = await params.params;
  
  const event: EventoEvent = await getEventBySlug(slug); // this function most probably wont execute at render because it already executed once at getMetadata and the data is cached, so it will just return the cached data instead of making a new request, but if it does execute, it will fetch the event data based on the slug and return it as an object of type EventoEvent.
  console.log(event);

  return (
    <main>
      <section
        id="introSection"
        className=" flex  relative  justify-center items-center overflow-hidden -z-1 py-14 md:py-40"
      >
        <Image
          className="object-cover blur-3xl z-0"
          src={event.imageUrl}
          alt="backgroundimg"
          fill
          quality={40}
          sizes="(max-width: 1280px) 100vw, 1280px"
        />

        <div className="z-1 flex flex-col lg:flex-row gap-6 lg:gap-x-16 relative">
          <Image
            className=" rounded-xl border-2 border-white/50 object-cover"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="text-white/75 whitespace-nowrap text-xl italic">
              Organized By {event.organizerName}
            </p>

            <button className="bg-white/20 text-lg bg-blur capitalize text-white  w-[95vw] sm:w-full rounded-md border-white/10 border-2 py-2 mt-5 lg:mt-auto state-effect">
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <EventSection
          props={{
            event,
            title: "About The Event",
            content: event.description,
          }}
        />

        <EventSection
          props={{ event, title: "Location", content: event.location }}
        />
      </div>
    </main>
  );
};

export default EventPage;
