import { type Campus } from "$src/campuses.d";
import { locations as universityOfManitobaLocations } from "./university-of-manitoba";
import { locations as universityOfWaterlooLocations } from "./university-of-waterloo";

export const campuses: Campus[] = [
  {
    value: "university-of-manitoba",
    label: "University of Manitoba",
    location: { lat: 49.808, lng: -97.133 },
    spaces: universityOfManitobaLocations,
    metadata: { timezone: "America/Winnipeg" },
  },
  {
    value: "university-of-waterloo",
    label: "University of Waterloo",
    location: { lat: 43.469, lng: -80.542 },
    spaces: universityOfWaterlooLocations,
    metadata: { timezone: "America/Toronto" },
  },
];
