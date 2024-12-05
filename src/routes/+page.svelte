<script lang="ts">
  import { PUBLIC_MAPTILER_KEY } from "$env/static/public";
  import { Button } from "$lib/components/ui/button/index.js";

  import { Sun, Moon } from "lucide-svelte/icons";
  import { toggleMode, mode } from "mode-watcher";
  import { MapLibre } from "svelte-maplibre";

  const maptilerTopoLightStyle = `https://api.maptiler.com/maps/topo-v2/style.json?key=${PUBLIC_MAPTILER_KEY}`;
  const maptilerTopoDarkStyle = `https://api.maptiler.com/maps/topo-v2-dark/style.json?key=${PUBLIC_MAPTILER_KEY}`;

  const maptilerStyle = $derived(
    $mode === "dark" ? maptilerTopoDarkStyle : maptilerTopoLightStyle,
  );
</script>

<Button
  class="absolute top-2.5 right-2.5 z-10"
  onclick={toggleMode}
  variant="outline"
  size="icon"
>
  <Sun
    class="h-fit w-fit rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  />
  <Moon
    class="absolute h-fit w-fit rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</Button>
<MapLibre style={maptilerStyle} class="min-h-screen" standardControls />
