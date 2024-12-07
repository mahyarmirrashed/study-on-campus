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

  interface Props {
    amenity: SpaceAmenities;
  }
  let { amenity, ...restProps }: Props = $props();

  const amenityMap: Record<SpaceAmenities, typeof Icon> = {
    Computers: Computer,
    Outlets: Plug,
    Printing: Printer,
    Rooms: Box,
    "Water Fountains": Droplet,
    WiFi: Wifi,
  };

  const Amenity = amenityMap[amenity] ?? CornerDownRight;
</script>

<Amenity class="h-fit w-fit scale-75" {...restProps} />
