import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//classValue is basically Instanceof and displays the class of the object -> letting me put strings or objects in inputs
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs))
}