import { type Campus } from "$src/campuses";
import { locations as universityOfManitobaLocations } from "./en/university-of-manitoba";
import { locations as universityOfWaterlooLocations } from "./en/university-of-waterloo";

export const campuses: Campus[] = [
  {
    value: "university-of-manitoba",
    label: "University of Manitoba",
    location: { lat: 49.808, lng: -97.134 },
    spaces: universityOfManitobaLocations,
  },
  {
    value: "university-of-waterloo",
    label: "University of Waterloo",
    location: { lat: 43.469, lng: -80.542 },
    spaces: universityOfWaterlooLocations,
  },
];
