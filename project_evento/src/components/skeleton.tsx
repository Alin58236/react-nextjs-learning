import { cn } from "@/lib/utils";
import React from "react";

type SkeletonProps = {
  className?: string;
};

const Skeleton = (props: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse h-4 w-[550px] bg-white/5 rounded-md",
        props.className,
      )}
    ></div>
  );
};

export default Skeleton;
