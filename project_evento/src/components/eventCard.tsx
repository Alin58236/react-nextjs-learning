"use client";

import { EventoEvent } from "@/generated/prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const MotionLink = motion(Link);

export const EventCard = ({ event }: { event: EventoEvent }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });

  const calculatedScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const calculatedOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
      href={`/event/${event.slug}`}
      style={{
        scale: calculatedScale,
        opacity: calculatedOpacity,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
    >
      <section className="relative flex flex-col flex-1 basis-80 h-full w-full bg-white/[3%] rounded-xl overflow-hidden hover:scale-105 active:scale-[1.02] transition">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={380}
          className="object-cover h-[60%]"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold ">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>

        <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md ">
          <p className="text-xl font-bold -mb-1">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleString("en-US", { month: "short" })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
};
