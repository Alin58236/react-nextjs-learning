import Skeleton from "@/components/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Skeleton className="w-[450px]"/>
      <Skeleton className="w-[200px]"/>
      <Skeleton className="w-[350px]"/>
    </div>
  );
};

export default Loading;
