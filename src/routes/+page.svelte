<script lang="ts">
  import { PUBLIC_MAPTILER_KEY } from "$env/static/public";
  import AmenityIcon from "$lib/components/custom/amenity-icon.svelte";
  import SpaceStatusBadge from "$lib/components/custom/space-status-badge.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Command from "$lib/components/ui/command/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { getSpaceStatus } from "$lib/utils";
  import { cn } from "$lib/utils.js";
  import { campuses } from "$src/data/campuses";
  import type { Space, SpaceStatus } from "$src/spaces";
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
  import { tick, onDestroy } from "svelte";
  import { MapLibre, Marker } from "svelte-maplibre";

  let currentTime = $state<Date>(new Date());
  const intervalId = setInterval(() => (currentTime = new Date()), 60 * 1000);
  onDestroy(() => clearInterval(intervalId));

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
  let spaceSelected = $state<Space | undefined>(undefined);
  const spaceSelectedStatus = $derived(
    getSpaceStatus(
      spaceSelected,
      campusSelected?.metadata?.timezone,
      currentTime,
    ),
  );

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

  function spaceGoogleMapLink(space?: Space) {
    if (space === undefined) return "";
    return (
      space.metadata?.link ??
      `https://www.google.com/maps?q=${space.location.lat},${space.location.lng}`
    );
  }

  const spaceStatusMarkerClass: Record<SpaceStatus, string> = {
    Open: "bg-green-400 shadow-green-400 group-hover:bg-green-500 group-hover:shadow-green-500",
    Closed:
      "bg-red-400 shadow-red-400 group-hover:bg-red-500 group-hover:shadow-red-500",
    "Opening Soon":
      "bg-yellow-400 shadow-yellow-400 group-hover:bg-yellow-500 group-hover:shadow-yellow-500",
    "Closing Soon":
      "bg-yellow-400 shadow-yellow-400 group-hover:bg-yellow-500 group-hover:shadow-yellow-500",
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
          class="group flex h-16 w-16 cursor-pointer items-center justify-center"
        >
          <div
            class={cn(
              spaceStatusMarkerClass[
                getSpaceStatus(
                  space,
                  campusSelected.metadata?.timezone,
                  currentTime,
                )
              ],
              "h-2 w-2 rounded-full shadow-3xl",
            )}
          >
            &nbsp;
          </div>
        </div>
      </Marker>
    {/each}
  {/if}
</MapLibre>

<div class="absolute left-1/2 top-2.5 z-10 -translate-x-1/2">
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
  class="absolute right-2.5 top-2.5 z-10"
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

<Card.Root class="absolute bottom-10 left-2.5 z-10">
  <Card.Header>
    <Card.Title>Legend</Card.Title>
    <Card.Description>
      Colors indicate open status of the spaces.
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <div class="flex flex-col gap-y-2">
      <SpaceStatusBadge status={"Open"} class="mr-auto" />
      <SpaceStatusBadge status={"Closing Soon"} class="mr-auto" />
      <SpaceStatusBadge status={"Closed"} class="mr-auto" />
    </div>
  </Card.Content>
</Card.Root>

{#if spaceSelected}
  <Drawer.Root bind:open={spaceInfoDrawerOpen}>
    <Drawer.Content>
      <div class="mx-auto w-full max-w-md px-4 pb-6 md:px-0">
        <Drawer.Header>
          <Drawer.Title>{spaceSelected.label}</Drawer.Title>
          <Drawer.Description>
            <SpaceStatusBadge status={spaceSelectedStatus} />
          </Drawer.Description>
        </Drawer.Header>
        <p class="mb-3">
          {spaceSelected.description}
        </p>
        {#if spaceSelected.metadata?.amenities}
          <ul class="mb-3">
            <h2 class="mb-1 font-semibold">Included Amenities</h2>
            {#each spaceSelected.metadata?.amenities.slice().sort() as amenity}
              <li class="flex gap-x-1 ps-1">
                <AmenityIcon {amenity} />
                <span>{amenity}</span>
              </li>
            {/each}
          </ul>
        {/if}
        <div class="mb-3">
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
        <div>
          <h2 class="font-semibold">Hours</h2>
          {#if spaceSelected.alwaysOpen}
            <span>Always open!</span>
          {:else}
            <ul>
              {#each Object.entries(spaceSelected.hours) as [weekday, segments]}
                <li class="flex justify-between gap-x-1">
                  <span class="first-letter:uppercase">{weekday}</span>
                  {#if segments.length > 0}
                    <span>
                      {segments
                        .map((segment) => `${segment.open} - ${segment.close}`)
                        .join(", ")}
                    </span>
                  {:else}
                    <span>Closed</span>
                  {/if}
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
    </Drawer.Content>
  </Drawer.Root>
{/if}
