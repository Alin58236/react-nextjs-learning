import React from "react";

type PageProps = {
  params: { slug: string };
};

const EventPage = async (params: PageProps) => {

  const { slug } = await params.params;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
  );

  const event = await response.json()

  console.log(event)


  return <div>Event Page {event.name}</div>;
};

export default EventPage;
