import H1 from "@/components/h1";
import EventSection from "@/components/eventSection";
import { EventType } from "@/lib/types";
import Image from "next/image";
import React from "react";

type PageProps = {
  params: { slug: string };
};

const EventPage = async (params: PageProps) => {
  const { slug } = await params.params;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
  );
  const event: EventType = await response.json();
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

        <EventSection props={{ event, title: "About The Event", content: event.description }} />
          
       <EventSection props={{ event, title: "Location", content: event.location }} />
      </div>
    </main>
  );
};

export default EventPage;
