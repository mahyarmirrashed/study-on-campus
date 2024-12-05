export type Campus = {
  value: string;
  label: string;
  location: { lat: number; lng: number };
};

export const campuses: Campus[] = [
  {
    value: "university-of-manitoba",
    label: "University of Manitoba",
    location: { lat: 49.810556, lng: -97.13527 },
  },
  {
    value: "university-of-waterloo",
    label: "University of Waterloo",
    location: { lat: 43.47233, lng: -80.54486 },
  },
];
