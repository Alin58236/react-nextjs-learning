"use client";

import H1 from "@/components/h1";
import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  
    useEffect(() => {
      console.error( error);
    }, [error]);
  
    return (
    <main className="text-center py-24">
      <H1 className="mb-5">Something went wrong!</H1>
      <button
        onClick={reset}
        className="bg-red-600 text-white px-4 py-2 rounded-md  transition hover:bg-white hover:text-black  focus:outline-none "
      >
        Try again
      </button>
    </main>
  );
};

export default Error;
