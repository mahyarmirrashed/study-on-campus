export type Campus = {
  value: string;
  label: string;
  location: { lat: number; lng: number };
  metadata?: {
    display?: {
      zoom?: number;
      pitch?: number;
      bearing?: number;
    };
  };
};
