<script lang="ts">
  import type { SpaceAmenities } from "$src/spaces.d";
  import {
    Computer,
    Plug,
    Printer,
    Box,
    Droplet,
    Wifi,
    CornerDownRight,
    Icon,
  } from "lucide-svelte/icons";

  export let amenity: SpaceAmenities;

  const amenityMap: Record<SpaceAmenities, typeof Icon> = {
    Computers: Computer,
    Outlets: Plug,
    Printing: Printer,
    Rooms: Box,
    "Water Fountains": Droplet,
    WiFi: Wifi,
  };
</script>

<svelte:component
  this={amenityMap[amenity] ?? CornerDownRight}
  class="h-fit w-fit scale-75"
/>
