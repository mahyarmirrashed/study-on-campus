export type Campus = {
  value: string;
  label: string;
  location: { lat: number; lng: number };
};

export const campuses: Campus[] = [
  {
    value: "university-of-manitoba",
    label: "University of Manitoba",
    location: { lat: 49.808, lng: -97.134 },
  },
  {
    value: "university-of-waterloo",
    label: "University of Waterloo",
    location: { lat: 43.469, lng: -80.542 },
  },
];
