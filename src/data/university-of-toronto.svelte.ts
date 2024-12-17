import { type Space } from "$src/spaces.d";

export const locations = $state<Space[]>([
  {
    value: "john-p-robarts-research-library",
    label: "John P. Robarts Research Library",
    description:
      "Massive research center at the University of Toronto, focused on arts, social sciences & government.",
    location: { lat: 43.66446804156252, lng: -79.3995157978792 },
    hours: {
      monday: [{ open: "08:30", close: "23:00" }],
      tuesday: [{ open: "08:30", close: "23:00" }],
      wednesday: [{ open: "08:30", close: "23:00" }],
      thursday: [{ open: "08:30", close: "23:00" }],
      friday: [{ open: "08:30", close: "23:00" }],
      saturday: [{ open: "09:00", close: "22:00" }],
      sunday: [{ open: "10:00", close: "22:00" }],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/zVf6CFQA5SnRtxNW7",
    },
  },
  {
    value: "e-j-pratt-library",
    label: "E. J. Pratt Library",
    description:
      "Supports undergraduate programs in the humanities and social sciences, including specialized Victoria College programs.",
    location: { lat: 43.666364235118486, lng: -79.39129020831867 },
    hours: {
      monday: [{ open: "09:00", close: "23:45" }],
      tuesday: [{ open: "09:00", close: "23:45" }],
      wednesday: [{ open: "09:00", close: "23:45" }],
      thursday: [{ open: "09:00", close: "23:45" }],
      friday: [{ open: "09:00", close: "18:45" }],
      saturday: [{ open: "10:00", close: "23:45" }],
      sunday: [{ open: "10:00", close: "23:45" }],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/YuWigtdeDz7ETeBq6",
    },
  },
  {
    value: "gerstein-science-information-centre",
    label: "Gerstein Science Information Centre",
    description:
      "The largest science and health science academic library with a collection consisting primarily of material on the sciences.",
    location: { lat: 43.66207857639802, lng: -79.39370214277896 },
    hours: {
      monday: [{ open: "08:30", close: "23:00" }],
      tuesday: [{ open: "08:30", close: "23:00" }],
      wednesday: [{ open: "08:30", close: "23:00" }],
      thursday: [{ open: "08:30", close: "23:00" }],
      friday: [{ open: "08:30", close: "22:00" }],
      saturday: [{ open: "09:00", close: "22:00" }],
      sunday: [{ open: "10:00", close: "22:00" }],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/ZXPQSTgZTcYmQAm6A",
    },
  },
  {
    value: "knox-college",
    label: "Knox College",
    description:
      "Knox College is a diverse community committed to the ideals of intellectual engagement, critical inquiry, and integrity, as well as to the principles of excellence, fairness, and respect for all people.",
    location: { lat: 43.66132661472304, lng: -79.39707027756067 },
    hours: {
      monday: [{ open: "08:00", close: "16:30" }],
      tuesday: [{ open: "08:00", close: "16:30" }],
      wednesday: [{ open: "08:00", close: "16:30" }],
      thursday: [{ open: "08:00", close: "16:30" }],
      friday: [{ open: "08:00", close: "16:30" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/fPj3gTJWDYjevyCV9",
    },
  },
  {
    value: "university-college-library",
    label: "University College Library",
    description:
      "The University College Library offers a large study space with lots of natural light, 20 computers, a group study room, and is also the home of the UC Writing Centre.",
    location: { lat: 43.66295474108995, lng: -79.39540967937556 },
    hours: {
      monday: [{ open: "09:00", close: "20:00" }],
      tuesday: [{ open: "09:00", close: "20:00" }],
      wednesday: [{ open: "09:00", close: "20:00" }],
      thursday: [{ open: "09:00", close: "20:00" }],
      friday: [{ open: "09:00", close: "17:00" }],
      saturday: [{ open: "13:00", close: "17:00" }],
      sunday: [{ open: "13:00", close: "17:00" }],
    },
    metadata: {
      amenities: [
        "WiFi",
        "Outlets",
        "Printing",
        "Water Fountains",
        "Computers",
      ],
      link: "https://maps.app.goo.gl/ZGF3MEeBhrcLDmbt9",
    },
  },
  {
    value: "myhal-centre-for-engineering",
    label: "Myhal Centre for Engineering Innovation and Entrepreneurship",
    description:
      "The Myhal Centre is designed to foster collaboration between researchers, students, industry partners and alumni, sparking the exchange of new ideas and catalyzing innovation.",
    location: { lat: 43.660773623027836, lng: -79.39671147994689 },
    hours: {
      monday: [{ open: "07:00", close: "23:00" }],
      tuesday: [{ open: "07:00", close: "23:00" }],
      wednesday: [{ open: "07:00", close: "23:00" }],
      thursday: [{ open: "07:00", close: "23:00" }],
      friday: [{ open: "07:00", close: "23:00" }],
      saturday: [{ open: "08:30", close: "20:00" }],
      sunday: [{ open: "08:30", close: "20:00" }],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/zvgpytTr524PNFYt8",
    },
  },
  {
    value: "bahen-centre-for-information-technology",
    label: "Bahen Centre for Information Technology",
    description:
      "The Bahen Centre for Information Technology in Toronto, ON is a facility dedicated to advancing research and education in the field of information technology.",
    location: { lat: 43.659955698049664, lng: -79.3972051681471 },
    hours: {
      monday: [{ open: "08:30", close: "21:00" }],
      tuesday: [{ open: "08:30", close: "21:00" }],
      wednesday: [{ open: "08:30", close: "21:00" }],
      thursday: [{ open: "08:30", close: "21:00" }],
      friday: [{ open: "08:30", close: "18:00" }],
      saturday: [],
      sunday: [{ open: "08:30", close: "21:00" }],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/LTRHuzjD4QxYuiJKA",
    },
  },
  {
    value: "sidney-smith-hall",
    label: "Sidney Smith Hall",
    description:
      "The Sidney Smith Commons is a an academic resource to help Arts & Science students through their undergraduate journey.",
    location: { lat: 43.66271896031365, lng: -79.39855745074708 },
    hours: {
      monday: [{ open: "10:00", close: "18:30" }],
      tuesday: [{ open: "10:00", close: "18:30" }],
      wednesday: [{ open: "10:00", close: "18:30" }],
      thursday: [{ open: "10:00", close: "18:30" }],
      friday: [{ open: "10:00", close: "17:00" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/Hgzsqy7pbPqYGrHj9",
    },
  },
  {
    value: "medical-sciences-building",
    label: "Medical Sciences Building",
    description:
      "The Temerty Faculty of Medicine at the University of Toronto is at the centre of one of North America’s largest biomedical research, education and clinical care networks.",
    location: { lat: 43.66093893044146, lng: -79.39343029804239 },
    hours: {
      monday: [{ open: "08:45", close: "17:00" }],
      tuesday: [{ open: "08:45", close: "17:00" }],
      wednesday: [{ open: "08:45", close: "17:00" }],
      thursday: [{ open: "08:45", close: "17:00" }],
      friday: [{ open: "08:45", close: "17:00" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets", "Water Fountains"],
      link: "https://maps.app.goo.gl/Dv6dvftxwTD2hHLT9",
    },
  },
  {
    value: "music-library",
    label: "Music Library",
    description:
      "The Music Library features articles, scores, encyclopedias, dissertations, and streaming media related to the study of music.",
    location: { lat: 43.666597437748635, lng: -79.39435735738708 },
    hours: {
      monday: [{ open: "08:30", close: "19:00" }],
      tuesday: [{ open: "08:30", close: "19:00" }],
      wednesday: [{ open: "08:30", close: "19:00" }],
      thursday: [{ open: "08:30", close: "19:00" }],
      friday: [{ open: "08:30", close: "18:00" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/CxKfwqXP62PHbHKAA",
    },
  },
  {
    value: "gail-brooker-library",
    label: "Gail Brooker Library",
    description:
      "The library has collections covering the decorative arts as they relate to ceramic objects manufactured in England, France, Italy, Austria and Germany.",
    location: { lat: 43.66819955524035, lng: -79.39308239668598 },
    hours: {
      monday: [{ open: "13:00", close: "16:00" }],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/AKdVpGR55NJu5e98A",
    },
  },
  {
    value: "rotman-school-of-management",
    label: "Rotman School of Management",
    description:
      "Rotman School of Management in Toronto offers innovative business education, integrative thinking, leadership development, and prime access to networking in Canada’s dynamic economic and cultural hub.",
    location: { lat: 43.66539062727333, lng: -79.39854570027774 },
    hours: {
      monday: [{ open: "09:00", close: "21:00" }],
      tuesday: [{ open: "09:00", close: "21:00" }],
      wednesday: [{ open: "09:00", close: "21:00" }],
      thursday: [{ open: "09:00", close: "21:00" }],
      friday: [{ open: "09:00", close: "21:00" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/yVbwJV4Le6tS3mzc9",
    },
  },
  {
    value: "emmanuel-college-library",
    label: "Emmanuel College Library",
    description:
      "Emmanuel College, within the University of Toronto, offers theological education emphasizing social justice, interfaith dialogue, and access to rich academic and urban resources.",
    location: { lat: 43.66683513656461, lng: -79.39286966347382 },
    hours: {
      monday: [{ open: "09:00", close: "21:00" }],
      tuesday: [{ open: "09:00", close: "21:00" }],
      wednesday: [{ open: "09:00", close: "21:00" }],
      thursday: [{ open: "09:00", close: "21:00" }],
      friday: [{ open: "09:00", close: "17:00" }],
      saturday: [{ open: "13:00", close: "17:00" }],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/GrMVn3G9JXVa9Htz5",
    },
  },
  {
    value: "ivey-library",
    label: "Ivey Library",
    description:
      "Ivey Library, at Emmanuel College in the University of Toronto, provides specialized theological resources, study spaces, and support, fostering academic excellence in a vibrant environment.",
    location: { lat: 43.66195183556734, lng: -79.40017968749 },
    alwaysOpen: true,
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/jsJNhaiQ1QXie69H8",
    },
  },
  {
    value: "eberhard-zeidler-library",
    label: "Eberhard Zeidler Library",
    description:
      "The Eberhard Zeidler Library, located within the University of Toronto’s Daniels Building, offers extensive resources in architecture, landscape architecture, and urban design, supporting academic excellence.",
    location: { lat: 43.65948402826712, lng: -79.4006472022839 },
    hours: {
      monday: [{ open: "09:00", close: "21:00" }],
      tuesday: [{ open: "09:00", close: "21:00" }],
      wednesday: [{ open: "09:00", close: "21:00" }],
      thursday: [{ open: "09:00", close: "21:00" }],
      friday: [{ open: "09:00", close: "19:00" }],
      saturday: [{ open: "12:00", close: "17:00" }],
      sunday: [{ open: "12:00", close: "17:00" }],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/azSiqBsWBNNGk2mx6",
    },
  },
  {
    value: "earth-sciences-library",
    label: "Earth Sciences Library",
    description:
      "The Noranda Earth Sciences Library at the University of Toronto offers extensive resources in geology and environmental science, supporting research and learning in Earth Sciences.",
    location: { lat: 43.66057710831297, lng: -79.39973551814924 },
    hours: {
      monday: [{ open: "09:00", close: "21:00" }],
      tuesday: [{ open: "09:00", close: "21:00" }],
      wednesday: [{ open: "09:00", close: "21:00" }],
      thursday: [{ open: "09:00", close: "21:00" }],
      friday: [{ open: "09:00", close: "18:00" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/vzitf925LX81BHj8A",
    },
  },
  {
    value: "engineering-and-computer-science-library",
    label: "Engineering and Computer Science Library",
    description:
      "The Engineering and Computer Science Library at the University of Toronto offers extensive resources and study spaces, supporting engineering and computer science research and education.",
    location: { lat: 43.660274633220986, lng: -79.3948690894763 },
    hours: {
      monday: [{ open: "09:00", close: "21:00" }],
      tuesday: [{ open: "09:00", close: "21:00" }],
      wednesday: [{ open: "09:00", close: "21:00" }],
      thursday: [{ open: "09:00", close: "21:00" }],
      friday: [{ open: "09:00", close: "17:00" }],
      saturday: [{ open: "10:00", close: "17:00" }],
      sunday: [{ open: "13:00", close: "18:00" }],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/hFNNWom4EfdPZzhu8",
    },
  },
  {
    value: "john-m-kelly-library",
    label: "John M. Kelly Library",
    description:
      "The John M. Kelly Library at the University of St. Michael’s College, University of Toronto, offers extensive humanities and social sciences collections, supporting diverse academic programs.",
    location: { lat: 43.665375420435694, lng: -79.38947345882741 },
    hours: {
      monday: [{ open: "08:30", close: "23:30" }],
      tuesday: [{ open: "08:30", close: "23:30" }],
      wednesday: [{ open: "08:30", close: "23:30" }],
      thursday: [{ open: "08:30", close: "23:30" }],
      friday: [{ open: "08:30", close: "23:30" }],
      saturday: [{ open: "10:00", close: "23:30" }],
      sunday: [{ open: "13:00", close: "23:30" }],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/7m9AsVYX1swhaqTk6",
    },
  },
  {
    value: "a-d-allen-chemistry-library",
    label: "A. D. Allen Chemistry Library",
    description:
      "The A.D. Allen Chemistry Library at the University of Toronto offers extensive resources and study spaces, supporting chemistry research and education.",
    location: { lat: 43.66179180735074, lng: -79.39779551746699 },
    hours: {
      monday: [{ open: "10:00", close: "19:00" }],
      tuesday: [{ open: "10:00", close: "19:00" }],
      wednesday: [{ open: "10:00", close: "19:00" }],
      thursday: [{ open: "10:00", close: "19:00" }],
      friday: [{ open: "10:00", close: "19:00" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/yDvihnazaA8s8hsT6",
    },
  },
  {
    value: "mathematical-sciences-library",
    label: "Mathematical Sciences Library",
    description:
      "The Mathematical Sciences Library at the University of Toronto offers extensive resources and study spaces, supporting research and education in mathematics and statistical sciences.",
    location: { lat: 43.6597359794816, lng: -79.39706012591914 },
    hours: {
      monday: [{ open: "09:00", close: "17:00" }],
      tuesday: [{ open: "09:00", close: "17:00" }],
      wednesday: [{ open: "09:00", close: "17:00" }],
      thursday: [{ open: "09:00", close: "17:00" }],
      friday: [{ open: "09:00", close: "17:00" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/2WRmtdVU4rT5yZAj9",
    },
  },
  {
    value: "innis-college",
    label: "Innis College",
    description:
      "Innis College, established in 1964 at the University of Toronto, offers programs in Cinema Studies, Urban Studies, and Writing and Rhetoric, fostering a vibrant academic community.",
    location: { lat: 43.66573524927401, lng: -79.39961603167595 },
    hours: {
      monday: [{ open: "08:00", close: "21:00" }],
      tuesday: [{ open: "08:00", close: "21:00" }],
      wednesday: [{ open: "08:00", close: "21:00" }],
      thursday: [{ open: "08:00", close: "21:00" }],
      friday: [{ open: "08:00", close: "21:00" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/5tSLpqGGv14qguu7A",
    },
  },
  {
    value: "john-w-graham-library",
    label: "John W. Graham Library",
    description:
      "The John W. Graham Library, serving Trinity and Wycliffe Colleges at the University of Toronto, offers extensive theological resources and study spaces, supporting academic excellence.",
    location: { lat: 43.665259408603106, lng: -79.39633787389684 },
    hours: {
      monday: [{ open: "08:30", close: "23:45" }],
      tuesday: [{ open: "08:30", close: "23:45" }],
      wednesday: [{ open: "08:30", close: "23:45" }],
      thursday: [{ open: "08:30", close: "23:45" }],
      friday: [{ open: "08:30", close: "19:45" }],
      saturday: [{ open: "09:15", close: "19:45" }],
      sunday: [{ open: "13:15", close: "23:45" }],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/jzi12m7qvCDYWqMM9",
    },
  },
  {
    value: "regis-college",
    label: "Regis College",
    description:
      "Regis College, the Jesuit Faculty of Theology at the University of Toronto, offers programs in theology and ministry, emphasizing Jesuit traditions and academic excellence.",
    location: { lat: 43.664229501433454, lng: -79.38998668479978 },
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
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/Ad87rAjcvttdiRkv6",
    },
  },
  {
    value: "bora-laskin-law-library",
    label: "Bora Laskin Law Library",
    description:
      "The Bora Laskin Law Library at the University of Toronto supports legal research and education with extensive collections and study spaces.",
    location: { lat: 43.666186648399915, lng: -79.3938063340236 },
    hours: {
      monday: [{ open: "08:45", close: "23:00" }],
      tuesday: [{ open: "08:45", close: "23:00" }],
      wednesday: [{ open: "08:45", close: "23:00" }],
      thursday: [{ open: "08:45", close: "23:00" }],
      friday: [{ open: "08:45", close: "20:00" }],
      saturday: [{ open: "10:00", close: "20:00" }],
      sunday: [{ open: "10:00", close: "20:00" }],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/Q8Yuvam1aLqhPuBf7",
    },
  },
  {
    value: "dentistry-library",
    label: "Dentistry Library",
    description:
      "The Dentistry Library at the University of Toronto offers extensive dental resources and study spaces, supporting research and education in dental sciences.",
    location: { lat: 43.656384016321454, lng: -79.38703499453736 },
    hours: {
      monday: [{ open: "09:00", close: "17:00" }],
      tuesday: [{ open: "09:00", close: "17:00" }],
      wednesday: [{ open: "09:00", close: "17:00" }],
      thursday: [{ open: "09:00", close: "17:00" }],
      friday: [{ open: "09:00", close: "17:00" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/3J7bHokjDudEZiG56",
    },
  },
  {
    value: "utsu-student-commons",
    label: "UTSU Student Commons",
    description:
      "The UTSU Student Commons, located at 230 College Street, serves as a central hub for University of Toronto students. It offers study spaces, meeting rooms, lounges, and a café, fostering community engagement and providing resources for student activities.",
    location: { lat: 43.65867796664493, lng: -79.3978822751627 },
    hours: {
      monday: [{ open: "09:00", close: "21:00" }],
      tuesday: [{ open: "09:00", close: "21:00" }],
      wednesday: [{ open: "09:00", close: "21:00" }],
      thursday: [{ open: "09:00", close: "21:00" }],
      friday: [{ open: "09:00", close: "21:00" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/eAYLPrwRvF4h8avk8",
    },
  },
  {
    value: "oise-library",
    label: "OISE Library",
    description:
      "The OISE Library at the University of Toronto is Canada’s largest academic education library, supporting teacher training, graduate studies, and research in education.",
    location: { lat: 43.66803443817239, lng: -79.39858835469845 },
    hours: {
      monday: [{ open: "09:00", close: "16:00" }],
      tuesday: [{ open: "09:00", close: "16:00" }],
      wednesday: [{ open: "09:00", close: "16:00" }],
      thursday: [{ open: "09:00", close: "16:00" }],
      friday: [{ open: "09:00", close: "16:00" }],
      saturday: [],
      sunday: [],
    },
    metadata: {
      amenities: ["WiFi", "Outlets"],
      link: "https://maps.app.goo.gl/6fg5ikSrUb1zav2G9",
    },
  },
]);
