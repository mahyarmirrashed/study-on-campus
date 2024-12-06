import { type Space } from "$src/spaces.d";

export const locations: Space[] = [
  {
    value: "architecture-fine-arts-library",
    label: "Architecture/Fine Arts Library",
    description:
      "The Architecture/Fine Arts Library supports the teaching and research requirements of the Faculty of Architecture, which includes programs in Architecture, City Planning, Interior Design and Landscape Architecture, as well as the School of Art with programs in Fine Arts and Art History.",
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
      amenities: ["WiFi", "Computers", "Printing"],
      link: "https://maps.app.goo.gl/CFbxpALxC7HpwdBx8",
    },
  },
  {
    value: "donald-craik-engineering-library",
    label: "Donald W. Craik Engineering Library",
    description:
      "The Donald W. Craik Engineering Library serves engineeirng resources, including books, journals, and electronic databases, to support academic and research needs of students and faculty.",
    location: { lat: 49.80835859585458, lng: -97.13445434076718 },
    alwaysOpen: true,
    metadata: {
      amenities: ["WiFi"],
    },
  },
  {
    value: "e-k-williams-law-library",
    label: "E. K. Williams Law Library",
    description:
      "E.K. Williams Law Library primarily serves the teaching and research needs of the Faculty of Law and the University. The library is also an integral part of the legal resources of Manitoba, where it plays a prominent role in the delivery of legal information to the members of the legal profession, the judiciary, other professional groups, and the general public.",
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
      amenities: ["WiFi", "Computers", "Printing"],
      link: "https://maps.app.goo.gl/NzVn21YBon12p11e8",
    },
  },
  {
    value: "eckhardt-gramatte-music-library",
    label: "Eckhardt Gramatté Music Library",
    description:
      "The Eckhardt Gramatté Music Library supports study, research, and performance at the University of Manitoba. As a unit of the University of Manitoba Libraries, the Music Library provides a vast range of print, recorded and electronic resources to students, faculty and staff of the University as well as members of the public.",
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
      amenities: ["WiFi", "Printing"],
      link: "https://maps.app.goo.gl/BkewBe4p6jjSWEgb7",
    },
  },
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
      amenities: ["WiFi", "Rooms", "Computers", "Printing"],
      link: "https://maps.app.goo.gl/pq5cGKjbKwuJFan86",
    },
  },
  {
    value: "father-harold-drake-library",
    label: "St. Paul's College",
    description:
      "The Fr. Harold Drake Library at St. Paul's College focuses on supporting the teaching and research needs of staff and students at St. Paul's College including the Jesuit Centre for Catholic Studies and Arthur V. Mauro Institute for Peace and Justice.",
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
      amenities: ["WiFi", "Printing"],
      link: "https://maps.app.goo.gl/JGQEwkeyEtG1cDCbA",
    },
  },
  {
    value: "jim-peebles-science-and-technology-library",
    label: "Jim Peebles Science and Technology Library",
    description:
      "The Jim Peebles Science and Technology Library serves the research, study, and teaching requirements of the Faculties of Science, Engineering, Agricultural and Food Sciences, and Environment, Earth, and Resources.",
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
      amenities: ["WiFi", "Rooms", "Computers", "Printing"],
      link: "https://maps.app.goo.gl/48NVXVD6kGeSoEue9",
    },
  },
];
