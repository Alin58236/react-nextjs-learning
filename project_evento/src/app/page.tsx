import EventForm from "@/components/eventForm";
import Link from "next/link";


export default function Home() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search")?.toString().trim();

    if (query) {
      // Redirect to the search results page with the query as a URL parameter
      window.location.href = `/events/search?query=${encodeURIComponent(query)}`;
    }
  }


  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        Find events around you
      </h1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">Browse more than <span className="font-bold text-accent italic underline">10,000 events</span> around you</p>

      <EventForm />

      <section className="mt-6 flex gap-x-4 text-sm text-white/[50%]">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link
            href="/events/austin"
  
          >
            Austin
          </Link>
          <Link
            href="/events/Seattle"

          >
            Seattle
          </Link>
        </div>
      </section>
    </main>
  );
}
