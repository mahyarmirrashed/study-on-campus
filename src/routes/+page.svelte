<script lang="ts">
  import { PUBLIC_MAPTILER_KEY } from "$env/static/public";
  import AmenityIcon from "$lib/components/custom/amenity-icon.svelte";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Command from "$lib/components/ui/command/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { cn } from "$lib/utils.js";

  import {
    Check,
    ChevronsUpDown,
    ExternalLink,
    Sun,
    Moon,
  } from "lucide-svelte/icons";
  import maplibregl from "maplibre-gl";
  import { toggleMode, mode } from "mode-watcher";
  import { PersistedState } from "runed";
  import { tick } from "svelte";
  import { MapLibre, Marker } from "svelte-maplibre";

  import { campuses } from "$src/data/campuses";
  import type { Space, SpaceStatus } from "$src/spaces";
  import { getSpaceStatus } from "$lib/utils";

  let campusComboboxOpen = $state(false);
  let campusComboboxTriggerRef = $state<HTMLButtonElement>(null!);
  const campusValue = new PersistedState("count", "");
  const campusSelected = $derived(
    campuses.find((campus) => campus.value === campusValue.current),
  );

  let map = $state<maplibregl.Map>(null!);
  const maptilerTopoLightStyle = `https://api.maptiler.com/maps/topo-v2/style.json?key=${PUBLIC_MAPTILER_KEY}`;
  const maptilerTopoDarkStyle = `https://api.maptiler.com/maps/topo-v2-dark/style.json?key=${PUBLIC_MAPTILER_KEY}`;

  const maptilerStyle = $derived(
    $mode === "dark" ? maptilerTopoDarkStyle : maptilerTopoLightStyle,
  );

  let spaceInfoDrawerOpen = $state(false);
  let spaceSelected = $state<Space>(null!);
  const spaceSelectedStatus = $derived(getSpaceStatus(spaceSelected));

  function openSpaceInfoDrawer(space: Space) {
    spaceInfoDrawerOpen = true;
    spaceSelected = space;
  }
  function closeAndFocusComboboxTrigger() {
    campusComboboxOpen = false;
    tick().then(() => {
      campusComboboxTriggerRef.focus();
    });
  }

  function spaceGoogleMapLink(space: Space) {
    return (
      space.metadata?.link ??
      `https://www.google.com/maps?q=${space.location.lat},${space.location.lng}`
    );
  }

  const spaceStatusBadgeClasses: Record<SpaceStatus, string> = {
    Open: "bg-green-400 hover:bg-green-500",
    Closed: "bg-red-400 hover:bg-red-500",
    "Opening Soon": "bg-yellow-400 hover:bg-yellow-500",
    "Closing Soon": "bg-yellow-400 hover:bg-yellow-500",
  };
  const spaceStatusMarkerClass: Record<SpaceStatus, string> = {
    Open: "bg-green-400 hover:bg-green-500 shadow-green-400/50",
    Closed: "bg-red-400 hover:bg-red-500 shadow-red-400/50",
    "Opening Soon": "bg-yellow-400 hover:bg-yellow-500 shadow-yellow-400/50",
    "Closing Soon": "bg-yellow-400 hover:bg-yellow-500 shadow-yellow-400/50",
  };

  $effect(() => {
    if (campusSelected) {
      const displayOptions = campusSelected.metadata?.display;
      map.jumpTo({
        center: campusSelected.location,
        zoom: displayOptions?.zoom ?? 16,
        pitch: displayOptions?.pitch ?? 60,
        bearing: displayOptions?.bearing ?? 0,
      });
    }
  });
</script>

<svelte:head>
  <title>Campus Study Spots</title>
</svelte:head>

<MapLibre bind:map style={maptilerStyle} class="min-h-screen" standardControls>
  {#if campusSelected}
    {#each campusSelected.spaces as space}
      <Marker
        lngLat={space.location}
        class="cursor-pointer"
        onclick={() => openSpaceInfoDrawer(space)}
      >
        <div
          class={cn(
            spaceStatusMarkerClass[getSpaceStatus(space)],
            "w-4 h-4 rounded-full",
          )}
        >
          &nbsp;
        </div>
      </Marker>
    {/each}
  {/if}
</MapLibre>

<div class="z-10 absolute top-2.5 left-1/2 -translate-x-1/2">
  <Popover.Root bind:open={campusComboboxOpen}>
    <Popover.Trigger bind:ref={campusComboboxTriggerRef}>
      {#snippet child({ props })}
        <Button
          variant="outline"
          class="w-52 justify-between"
          {...props}
          role="combobox"
          aria-expanded={campusComboboxOpen}
        >
          {campusSelected?.label || "Select a campus..."}
          <ChevronsUpDown class="opacity-50" />
        </Button>
      {/snippet}
    </Popover.Trigger>
    <Popover.Content class="w-52 p-0">
      <Command.Root>
        <Command.Input placeholder="Search campuses..." />
        <Command.List>
          <Command.Empty>No campus found.</Command.Empty>
          <Command.Group>
            {#each campuses as campus}
              <Command.Item
                value={campus.value}
                onSelect={() => {
                  campusValue.current = campus.value;
                  closeAndFocusComboboxTrigger();
                }}
              >
                <Check
                  class={cn(
                    "ml-auto",
                    campusValue.current !== campus.value && "text-transparent",
                  )}
                />
                {campus.label}
              </Command.Item>
            {/each}
          </Command.Group>
        </Command.List>
      </Command.Root>
    </Popover.Content>
  </Popover.Root>
</div>

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

<Drawer.Root bind:open={spaceInfoDrawerOpen}>
  <Drawer.Content>
    <div class="mx-auto w-full max-w-md pb-4">
      <Drawer.Header>
        <Drawer.Title>{spaceSelected.label}</Drawer.Title>
        <Drawer.Description>
          <Badge
            class={cn(
              spaceStatusBadgeClasses[spaceSelectedStatus],
              "border-transparent",
            )}
          >
            {spaceSelectedStatus}
          </Badge>
        </Drawer.Description>
      </Drawer.Header>
      <p class="mb-3">
        {spaceSelected.description}
      </p>
      {#if spaceSelected.metadata?.amenities}
        <ul class="mb-3">
          <h2 class="font-semibold mb-1">Included Amenities</h2>
          {#each spaceSelected.metadata?.amenities as amenity}
            <li class="flex gap-x-1 ps-1">
              <AmenityIcon {amenity} />
              <span>{amenity}</span>
            </li>
          {/each}
        </ul>
      {/if}
      <h2 class="font-semibold">Directions</h2>
      <a
        class="flex gap-x-1 hover:underline"
        href={spaceGoogleMapLink(spaceSelected)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Google Maps</span>
        <ExternalLink class="h-fit w-fit scale-75" />
      </a>
    </div>
  </Drawer.Content>
</Drawer.Root>
