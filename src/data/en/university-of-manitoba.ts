import { type Space } from "$src/spaces";

export const locations: Space[] = [
  {
    value: "elizabeth-dafoe-library",
    label: "Elizabeth Dafoe Library",
    description:
      "The Elizabeth Dafoe Library is University of Manitoba's largest library, supporting research and teaching primarily in the Faculties of Arts, Education, Kinesiology and Recreation Management, Social Work, and Graduate Studies, as well as University 1.",
    location: { lat: 49.81037245765845, lng: -97.13158463047291 },
    hours: {
      monday: [{ open: "08:00", close: "23:00" }],
      tuesday: [{ open: "08:00", close: "23:00" }],
      wednesday: [{ open: "08:00", close: "23:00" }],
      thursday: [{ open: "08:00", close: "23:00" }],
      friday: [{ open: "08:00", close: "23:00" }],
      saturday: [{ open: "10:00", close: "18:00" }],
      sunday: [{ open: "10:00", close: "18:00" }],
    },
    metadata: {
      amentities: ["WiFi"],
    },
  },
];
