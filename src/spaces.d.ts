export type SpaceAmenities = "WiFi" | "Outlets" | "Fountains";

export type SpaceHoursSegment = { open: string; close: string };

export type SpaceHours = {
  monday: SpaceHoursSegment[];
  tuesday: SpaceHoursSegment[];
  wednesday: SpaceHoursSegment[];
  thursday: SpaceHoursSegment[];
  friday: SpaceHoursSegment[];
  saturday: SpaceHoursSegment[];
  sunday: SpaceHoursSegment[];
};

export type Space = {
  value: string;
  label: string;
  description: string;
  location: { lat: number; lng: number };
  hours: SpaceHours;
  metadata?: {
    amentities: SpaceAmenities[];
  };
};
