import { type Space } from "$src/spaces.d";

export const locations: Space[] = [
  {
    value: "dana-porter-library",
    label: "Dana Porter Library",
    description:
      "Built in 1965, the Dana Porter Library is home to a large collection of books focused on the Arts, Humanities and Social Sciences.",
    location: { lat: 43.46970996120006, lng: -80.54228100658808 },
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
      amenities: ["WiFi", "Water Fountains", "Outlets"],
      link: "https://maps.app.goo.gl/5xkMePMsgStWSzgF8",
    },
  },
  {
    value: "david-centre-library",
    label: "Davis Centre Library",
    description:
      "The Davis Centre Library houses resources for engineering, mathematics, and science.",
    location: { lat: 43.47298768397052, lng: -80.5419473517104 },
    hours: {
      monday: [{ open: "08:00", close: "24:00" }],
      tuesday: [{ open: "08:00", close: "24:00" }],
      wednesday: [{ open: "08:00", close: "24:00" }],
      thursday: [{ open: "08:00", close: "24:00" }],
      friday: [{ open: "08:00", close: "24:00" }],
      saturday: [{ open: "11:00", close: "24:00" }],
      sunday: [{ open: "11:00", close: "24:00" }],
    },
    metadata: {
      amenities: ["WiFi", "Water Fountains", "Outlets"],
      link: "https://maps.app.goo.gl/Z5CsTbspAfcd8XGS7",
    },
  },
];
