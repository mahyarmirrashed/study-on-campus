import type { Space } from "./spaces";

export type Campus = {
  value: string;
  label: string;
  location: { lat: number; lng: number };
  spaces: Space[];
  metadata?: {
    display?: {
      zoom?: number;
      pitch?: number;
      bearing?: number;
    };
  };
};
