import type { Space, SpaceStatus, Weekdays } from "$src/spaces";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const WARNING_MINUTES = 30;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function timeStringToMinutes(time: string): number {
  const [hh, mm] = time.split(":").map(Number);
  return hh * 60 + mm;
}

export function getSpaceStatus(
  space: Space,
  timezone?: string,
  currentTime = new Date(),
): SpaceStatus {
  if (space.alwaysOpen) return "Open";

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  };
  if (timezone) options.timeZone = timezone;

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(currentTime);

  let weekday: Weekdays | undefined;
  let hour: string | undefined;
  let minute: string | undefined;

  for (const part of parts) {
    if (part.type === "weekday") {
      weekday = part.value.toLowerCase() as Weekdays;
    } else if (part.type === "hour") {
      hour = part.value;
    } else if (part.type === "minute") {
      minute = part.value;
    }
  }

  if (!weekday || !hour || !minute)
    throw new Error("Failed to parse current time information.");

  const current = timeStringToMinutes(`${hour}:${minute}`);

  for (const period of space.hours[weekday] || []) {
    const open = timeStringToMinutes(period.open);
    const close = timeStringToMinutes(period.close);

    if (current >= open && current < close)
      return close - current <= WARNING_MINUTES ? "Closing Soon" : "Open";

    if (current < open)
      return open - current <= WARNING_MINUTES ? "Opening Soon" : "Closed";
  }

  return "Closed";
}
