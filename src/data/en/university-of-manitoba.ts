import { type Space } from "$src/spaces.d";

export const locations: Space[] = [
  {
    value: "architecture-fine-arts-library",
    label: "Architecture/Fine Arts Library",
    location: { lat: 49.80815612216234, lng: -97.13530152378586 },
    hours: {
      monday: [{ open: "08:30", close: "17:30" }],
      tuesday: [{ open: "08:30", close: "17:30" }],
      wednesday: [{ open: "08:30", close: "17:30" }],
      thursday: [{ open: "08:30", close: "17:30" }],
      friday: [{ open: "08:30", close: "17:30" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amentities: ["WiFi", "Computers", "Printing"],
      link: "https://maps.app.goo.gl/CFbxpALxC7HpwdBx8",
    },
  },
  {
    value: "donald-craik-engineering-library",
    label: "Donald W. Craik Engineering Library",
    location: { lat: 49.80835859585458, lng: -97.13445434076718 },
    alwaysOpen: true,
    metadata: {
      amentities: ["WiFi"],
    },
  },
  {
    value: "e-k-williams-law-library",
    label: "E. K. Williams Law Library",
    location: { lat: 49.81194940624498, lng: -97.13047415092316 },
    hours: {
      monday: [{ open: "08:30", close: "23:00" }],
      tuesday: [{ open: "08:30", close: "23:00" }],
      wednesday: [{ open: "08:30", close: "23:00" }],
      thursday: [{ open: "08:30", close: "23:00" }],
      friday: [{ open: "08:30", close: "23:00" }],
      saturday: [{ open: "10:00", close: "18:00" }],
      sunday: [{ open: "10:00", close: "18:00" }],
    },
    metadata: {
      amentities: ["WiFi", "Computers", "Printing"],
      link: "https://maps.app.goo.gl/NzVn21YBon12p11e8",
    },
  },
  {
    value: "eckhardt-gramatte-music-library",
    label: "Eckhardt Gramatté Music Library",
    location: { lat: 49.808042975950016, lng: -97.1321825540353 },
    hours: {
      monday: [{ open: "08:30", close: "16:30" }],
      tuesday: [{ open: "08:30", close: "16:30" }],
      wednesday: [{ open: "08:30", close: "16:30" }],
      thursday: [{ open: "08:30", close: "16:30" }],
      friday: [{ open: "08:30", close: "16:30" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amentities: ["WiFi", "Printing"],
      link: "https://maps.app.goo.gl/BkewBe4p6jjSWEgb7",
    },
  },
  {
    value: "elizabeth-dafoe-library",
    label: "Elizabeth Dafoe Library",
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
      amentities: ["WiFi", "Rooms", "Computers", "Printing"],
      link: "https://maps.app.goo.gl/pq5cGKjbKwuJFan86",
    },
  },
  {
    value: "father-harold-drake-library",
    label: "St. Paul's College",
    location: { lat: 49.81045700369361, lng: -97.13799926192738 },
    hours: {
      monday: [{ open: "08:30", close: "16:30" }],
      tuesday: [{ open: "08:30", close: "16:30" }],
      wednesday: [{ open: "08:30", close: "16:30" }],
      thursday: [{ open: "08:30", close: "16:30" }],
      friday: [{ open: "08:30", close: "16:30" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amentities: ["WiFi", "Printing"],
      link: "https://maps.app.goo.gl/JGQEwkeyEtG1cDCbA",
    },
  },
  {
    value: "jim-peebles-science-and-technology-library",
    label: "Jim Peebles Science and Technology Library",
    location: { lat: 49.81151151579056, lng: -97.13336330797407 },
    hours: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amentities: ["WiFi", "Rooms", "Computers", "Printing"],
      link: "https://maps.app.goo.gl/48NVXVD6kGeSoEue9",
    },
  },
];
