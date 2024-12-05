import { type Space } from "$src/spaces.d";

export const locations: Space[] = [
  {
    value: "dana-porter-library",
    label: "Dana Porter Library",
    location: { lat: 43.46990996120006, lng: -80.54232110658808 },
    hours: {
      monday: [{ open: "08:00", close: "23:00" }],
      tuesday: [{ open: "08:00", close: "23:00" }],
      wednesday: [{ open: "08:00", close: "23:00" }],
      thursday: [{ open: "08:00", close: "23:00" }],
      friday: [{ open: "08:00", close: "23:00" }],
      saturday: [{ open: "11:00", close: "23:00" }],
      sunday: [{ open: "11:00", close: "23:00" }],
    },
    metadata: {
      amentities: ["WiFi"],
    },
  },
];
