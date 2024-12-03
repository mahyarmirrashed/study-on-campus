<script lang="ts">
  import { PUBLIC_MAPTILER_KEY } from "$env/static/public";
  import { MapLibre, FillExtrusionLayer } from "svelte-maplibre";

  const maptilerStyle = `https://api.maptiler.com/maps/streets-v2/style.json?key=${PUBLIC_MAPTILER_KEY}`;
</script>

<MapLibre style={maptilerStyle} class="min-h-screen" standardControls>
  <FillExtrusionLayer
    source="maptiler_planet"
    sourceLayer="building"
    paint={{}}
  />
</MapLibre>
