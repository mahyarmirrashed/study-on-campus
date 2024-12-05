<script lang="ts">
  import { PUBLIC_MAPTILER_KEY } from "$env/static/public";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import * as Command from "$lib/components/ui/command/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { cn } from "$lib/utils.js";
  import maplibregl from "maplibre-gl";

  import { Check, ChevronsUpDown, Sun, Moon } from "lucide-svelte/icons";
  import { toggleMode, mode } from "mode-watcher";
  import { tick } from "svelte";
  import { MapLibre, Marker } from "svelte-maplibre";

  import { campuses } from "$src/data/campuses";

  let campusComboboxOpen = $state(false);
  let campusComboboxTriggerRef = $state<HTMLButtonElement>(null!);
  let campusValue = $state("");
  const campusSelected = $derived(
    campuses.find((campus) => campus.value === campusValue),
  );

  let map = $state<maplibregl.Map>(null!);
  const maptilerTopoLightStyle = `https://api.maptiler.com/maps/topo-v2/style.json?key=${PUBLIC_MAPTILER_KEY}`;
  const maptilerTopoDarkStyle = `https://api.maptiler.com/maps/topo-v2-dark/style.json?key=${PUBLIC_MAPTILER_KEY}`;

  const maptilerStyle = $derived(
    $mode === "dark" ? maptilerTopoDarkStyle : maptilerTopoLightStyle,
  );

  let campusInfoDrawerOpen = $state(false);

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
  <title>Campus Study Spots</title>
</svelte:head>

<MapLibre bind:map style={maptilerStyle} class="min-h-screen" standardControls>
  {#if campusSelected}
    {#each campusSelected.spaces as space}
      <Marker
        lngLat={space.location}
        class="cursor-pointer"
        onclick={() => (campusInfoDrawerOpen = true)}
      >
        <span>{space.label}</span>
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
                  campusValue = campus.value;
                  closeAndFocusComboboxTrigger();
                }}
              >
                <Check
                  class={cn(
                    "ml-auto",
                    campusValue !== campus.value && "text-transparent",
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

<Drawer.Root bind:open={campusInfoDrawerOpen}>
  <Drawer.Content>
    <div class="mx-auto w-full max-w-sm">
      <Drawer.Header>
        <Drawer.Title>Move Goal</Drawer.Title>
        <Drawer.Description>Set your daily activity goal.</Drawer.Description>
      </Drawer.Header>
      <div class="p-4 pb-0">
        <Accordion.Root type="single">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It adheres to the WAI-ARIA design pattern.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  </Drawer.Content>
</Drawer.Root>
