import { PUBLIC_API_ENDPOINT__UNIVERISTY_OF_WATERLOO } from "$env/static/public";
import { type Space, type SpaceHours, type Weekdays } from "$src/spaces.d";

interface WaterlooClassrooms {
  data: {
    features: {
      properties: {
        buildingName: string;
        supportOpenClassrooms: boolean;
        openClassroomSlots: string;
      };
      geometry: {
        coordinates: [number, number];
      };
    }[];
  };
}

interface WaterlooOpenClassroomSlots {
  data: {
    Schedule: {
      Weekday: string;
      Slots: {
        StartTime: string;
        EndTime: string;
      }[];
    }[];
  }[];
}

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

(async function () {
  try {
    const response = await fetch(PUBLIC_API_ENDPOINT__UNIVERISTY_OF_WATERLOO);
    const waterlooData: WaterlooClassrooms = await response.json();

    const dynamicLocations: Space[] = waterlooData.data.features.map(
      (feature) => {
        const { buildingName, openClassroomSlots } = feature.properties;
        const [lng, lat] = feature.geometry.coordinates;

        const parsedSlots: WaterlooOpenClassroomSlots = openClassroomSlots
          ? JSON.parse(openClassroomSlots)
          : { data: [] };

        const buildingHours: Record<
          Weekdays,
          { earliest: string; latest: string }
        > = {
          monday: { earliest: "23:59", latest: "00:00" },
          tuesday: { earliest: "23:59", latest: "00:00" },
          wednesday: { earliest: "23:59", latest: "00:00" },
          thursday: { earliest: "23:59", latest: "00:00" },
          friday: { earliest: "23:59", latest: "00:00" },
          saturday: { earliest: "23:59", latest: "00:00" },
          sunday: { earliest: "23:59", latest: "00:00" },
        };

        for (const room of parsedSlots.data) {
          for (const schedule of room.Schedule) {
            const day = schedule.Weekday.toLowerCase() as Weekdays;
            for (const slot of schedule.Slots) {
              const start = slot.StartTime.substring(0, 5);
              const end = slot.EndTime.substring(0, 5);

              if (start < buildingHours[day].earliest) {
                buildingHours[day].earliest = start;
              }
              if (end > buildingHours[day].latest) {
                buildingHours[day].latest = end;
              }
            }
          }
        }

        const hours: SpaceHours = {
          monday:
            buildingHours.monday.earliest === "23:59"
              ? []
              : [
                  {
                    open: buildingHours.monday.earliest,
                    close: buildingHours.monday.latest,
                  },
                ],
          tuesday:
            buildingHours.tuesday.earliest === "23:59"
              ? []
              : [
                  {
                    open: buildingHours.tuesday.earliest,
                    close: buildingHours.tuesday.latest,
                  },
                ],
          wednesday:
            buildingHours.wednesday.earliest === "23:59"
              ? []
              : [
                  {
                    open: buildingHours.wednesday.earliest,
                    close: buildingHours.wednesday.latest,
                  },
                ],
          thursday:
            buildingHours.thursday.earliest === "23:59"
              ? []
              : [
                  {
                    open: buildingHours.thursday.earliest,
                    close: buildingHours.thursday.latest,
                  },
                ],
          friday:
            buildingHours.friday.earliest === "23:59"
              ? []
              : [
                  {
                    open: buildingHours.friday.earliest,
                    close: buildingHours.friday.latest,
                  },
                ],
          saturday:
            buildingHours.saturday.earliest === "23:59"
              ? []
              : [
                  {
                    open: buildingHours.saturday.earliest,
                    close: buildingHours.saturday.latest,
                  },
                ],
          sunday:
            buildingHours.sunday.earliest === "23:59"
              ? []
              : [
                  {
                    open: buildingHours.sunday.earliest,
                    close: buildingHours.sunday.latest,
                  },
                ],
        };

        return {
          value: buildingName?.toLowerCase().replace(/\s+/g, "-") || "",
          label: buildingName || "Unknown Building",
          description: "No description available.",
          location: { lat, lng },
          hours,
          metadata: {
            amenities: ["WiFi", "Outlets"],
            link: "",
          },
        };
      },
    );

    locations.push(...dynamicLocations);
  } catch (e) {
    console.error("Failed to fetch Waterloo classrooms:", e);
  }
})();
