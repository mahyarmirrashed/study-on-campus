<script lang="ts">
  import { PUBLIC_MAPTILER_KEY } from "$env/static/public";
  import PageControls from "$lib/components/custom/page-controls.svelte";
  import SpaceInformation from "$lib/components/custom/space-information.svelte";
  import SpaceMarker from "$lib/components/custom/space-marker.svelte";
  import SpaceStatusBadge from "$lib/components/custom/space-status-badge.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Command from "$lib/components/ui/command/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import * as m from "$lib/paraglide/messages.js";
  import { getSpaceStatus } from "$lib/utils";
  import { cn } from "$lib/utils.js";
  import { campuses } from "$src/data";
  import { languageTag } from "$src/lib/paraglide/runtime";
  import type { Space } from "$src/spaces";
  import { Check, ChevronsUpDown } from "lucide-svelte/icons";
  import maplibregl from "maplibre-gl";
  import { mode } from "mode-watcher";
  import { PersistedState } from "runed";
  import { tick, onDestroy } from "svelte";
  import { MapLibre, Marker } from "svelte-maplibre";
  import translate from "translate";

  let currentTime = $state<Date>(new Date());
  const intervalId = setInterval(() => (currentTime = new Date()), 60 * 1000);
  onDestroy(() => clearInterval(intervalId));

  let campusComboboxOpen = $state(false);
  let campusComboboxTriggerRef = $state<HTMLButtonElement>(null!);
  const campusValue = new PersistedState("campus", "");
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
  <title>{m.websiteTitle()}</title>
</svelte:head>

<MapLibre bind:map style={maptilerStyle} class="min-h-screen" standardControls>
  {#if campusSelected}
    {#each campusSelected.spaces as space}
      <Marker
        lngLat={space.location}
        class="cursor-pointer"
        onclick={() => openSpaceInfoDrawer(space)}
      >
        <SpaceMarker
          status={getSpaceStatus(
            space,
            campusSelected.metadata?.timezone,
            currentTime,
          )}
        />
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
          class="w-60 justify-between"
          {...props}
          role="combobox"
          aria-expanded={campusComboboxOpen}
        >
          {#if campusSelected?.label}
            {#await translate(campusSelected.label, languageTag())}
              ...
            {:then result}
              {result}
            {:catch}
              {campusSelected.label}
            {/await}
          {:else}
            {m.selectCampus()}
          {/if}
          <ChevronsUpDown class="opacity-50" />
        </Button>
      {/snippet}
    </Popover.Trigger>
    <Popover.Content class="w-60 p-0">
      <Command.Root>
        <Command.Input placeholder={m.searchCampus()} />
        <Command.List>
          <Command.Empty>{m.campusNotFound()}</Command.Empty>
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
                    campusValue.current !== campus.value && "text-transparent",
                  )}
                />
                <span class="mr-auto">
                  {#await translate(campus.label, languageTag())}
                    ...
                  {:then result}
                    {result}
                  {:catch}
                    {campus.label}
                  {/await}
                </span>
              </Command.Item>
            {/each}
          </Command.Group>
        </Command.List>
      </Command.Root>
    </Popover.Content>
  </Popover.Root>
</div>

<PageControls />

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
        <SpaceInformation space={spaceSelected} />
      </div>
    </Drawer.Content>
  </Drawer.Root>
{/if}
