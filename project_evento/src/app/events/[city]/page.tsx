import Loading from "@/app/events/[city]/loading";
import { EventsList } from "@/components/eventsList";
import H1 from "@/components/h1";
import { EventsPageProps } from "@/lib/types";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: EventsPageProps): Promise<Metadata> {
  let paramList = await params;
  let city = capitalize(paramList.city);

  return {
    title:
      city === "All" ? "Evento - All Events" : `Evento - Events in ${city}`,
    description: "Discover and attend over 10,000 events worldwide!",
  };
}

const EventsPage = async ({ params, searchParams }: EventsPageProps) => {
  /* we can access the city parameter from the URL using the params object passed to the page component. This allows us to dynamically render content based on the city specified in the URL. The way this is accessed is through the actual route given by the folder structure*/
  // eg. in this case it is events/city, so we can access the city parameter through params.city

  let paramList = await params;
  let searchParamList = await searchParams;

  const city =
    (await paramList.city.charAt(0).toUpperCase()) + paramList.city.slice(1);

  const page = searchParamList?.page ?? "1"; // default to page 1 if no page parameter is provided

  console.log("Selected city: " + city + " page: " + page);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "All" ? "All Events" : `Events in ${city}`}
      </H1>

      <Suspense fallback={<Loading />}>
        {" "}
        {/* Suspense is used to handle the loading state of the EventsList component. While the data is being fetched, we can show a fallback UI (like a loading spinner) to indicate that the content is loading. Once the data is fetched, the EventsList component will be rendered with the fetched events.*/}
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
