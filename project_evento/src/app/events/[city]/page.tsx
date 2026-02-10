import H1 from "@/components/H1";
import { EventsPageProps, EventType } from "@/lib/types";


const EventsPage = async ({ params }: EventsPageProps) => {
  // we can access the city parameter from the URL using the params object passed to the page component. This allows us to dynamically render content based on the city specified in the URL. The way this is accessed is through the actual route given by the folder structure
  // eg. in this case it is events/city, so we can access the city parameter through params.city

  let paramList = await params;
  let city = paramList.city.charAt(0).toUpperCase() + paramList.city.slice(1);

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=austin`,
  );

  const events : EventType[] = await response.json();

  console.log(events);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>{city === "All" ? "All Events" : `Events in ${city}`}</H1>

      {events.map((event) => (
        <section
          key={event.id}
          
        >
          {event.name}
        </section>
      ))}
    </main>
  );
};

export default EventsPage;
