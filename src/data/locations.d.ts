export type LocationAmenities = "WiFi" | "Outlets" | "Fountains";

export type LocationHoursSegment = { open: string; close: string };

export type LocationHours = {
  monday: LocationHoursSegment[];
  tuesday: LocationHoursSegment[];
  wednesday: LocationHoursSegment[];
  thursday: LocationHoursSegment[];
  friday: LocationHoursSegment[];
  saturday: LocationHoursSegment[];
  sunday: LocationHoursSegment[];
};

export type Location = {
  value: string;
  label: string;
  description: string;
  location: { lat: number; lng: number };
  hours: LocationHours;
  metadata?: {
    amentities: LocationAmenities[];
  };
};
