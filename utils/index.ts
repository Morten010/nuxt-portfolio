import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatTime = (seconds: number): string => {
  if (seconds < 0) {
      throw new Error("Seconds cannot be negative.");
  }

  if (seconds >= 3600) {
      const hours = Math.floor(seconds / 3600);
      return `${hours}h`;
  } else if (seconds >= 60) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes}m`;
  } else {
      return `${seconds}s`;
  }
}