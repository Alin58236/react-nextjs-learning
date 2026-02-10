"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EventForm = () => {

   const [searchText, setSearchText] = useState("");
    const router = useRouter(); // necessary import from next/navigation, to be able to change the url and navigate to the search page with the query
   

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!searchText.trim()) return; // if the search text is empty, do nothing

    router.push(`/events/${searchText.trim()}`); // navigate to the search page with the query  

  };


  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        onChange={(e) => setSearchText(e.target.value) //controlled input
          }
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 focus:ring-2 focus:bg-white/[10%] transition"
        placeholder="Search events in any city..."
        spellCheck={false}
        suppressHydrationWarning
      />
    </form>
  );
};

export default EventForm;
