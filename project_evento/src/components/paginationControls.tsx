import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const btnClass =
  "text-white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";

const PaginationControls = ({ prev, next }: { prev: string; next: string }) => {
  return (
    <section className="flex justify-between w-full ">
      {prev !== "" && (
        <Link className={btnClass} href={prev}>
          <ArrowLeftIcon /> Previous
        </Link>
      )}

      {next !== "" && (
        <Link className={btnClass} href={next}>
          Next <ArrowRightIcon /> 
        </Link>
      )}
    </section>
  );
};

export default PaginationControls;
