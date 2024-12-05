export type SpaceAmenities =
  | "Computers"
  | "Outlets"
  | "Printing"
  | "Rooms"
  | "Water Fountains"
  | "WiFi";

export type SpaceHoursSegment = { open: string; close: string };
export type SpaceStatus = "Open" | "Closed" | "Opening Soon" | "Closing Soon";
export type Weekdays =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type SpaceHours = {
  [W in Weekdays]: SpaceHoursSegment[];
};

export type Space = {
  value: string;
  label: string;
  location: { lat: number; lng: number };
  metadata?: {
    amentities?: SpaceAmenities[];
    link?: string;
  };
} & (
  | { alwaysOpen: true; hours?: never }
  | { alwaysOpen?: false; hours: SpaceHours }
);
