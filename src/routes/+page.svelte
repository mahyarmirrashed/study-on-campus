<script lang="ts">
  import { PUBLIC_MAPTILER_KEY } from "$env/static/public";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Command from "$lib/components/ui/command/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { cn } from "$lib/utils.js";

  import { Check, ChevronsUpDown, Sun, Moon } from "lucide-svelte/icons";
  import { toggleMode, mode } from "mode-watcher";
  import { tick } from "svelte";
  import { MapLibre } from "svelte-maplibre";

  import { campuses } from "./campuses";

  let open = $state(false);
  let value = $state("");
  let triggerRef = $state<HTMLButtonElement>(null!);
  const selectedCampus = $derived(
    campuses.find((f) => f.value === value)?.label,
  );

  const maptilerTopoLightStyle = `https://api.maptiler.com/maps/topo-v2/style.json?key=${PUBLIC_MAPTILER_KEY}`;
  const maptilerTopoDarkStyle = `https://api.maptiler.com/maps/topo-v2-dark/style.json?key=${PUBLIC_MAPTILER_KEY}`;

  const maptilerStyle = $derived(
    $mode === "dark" ? maptilerTopoDarkStyle : maptilerTopoLightStyle,
  );

  function closeAndFocusTrigger() {
    open = false;
    tick().then(() => {
      triggerRef.focus();
    });
  }
</script>

<MapLibre style={maptilerStyle} class="min-h-screen" standardControls />

<div class="z-10 absolute top-2.5 left-1/2 -translate-x-1/2">
  <Popover.Root bind:open>
    <Popover.Trigger bind:ref={triggerRef}>
      {#snippet child({ props })}
        <Button
          variant="outline"
          class="w-[200px] justify-between"
          {...props}
          role="combobox"
          aria-expanded={open}
        >
          {selectedCampus || "Select a campus..."}
          <ChevronsUpDown class="opacity-50" />
        </Button>
      {/snippet}
    </Popover.Trigger>
    <Popover.Content class="w-[200px] p-0">
      <Command.Root>
        <Command.Input placeholder="Search framework..." />
        <Command.List>
          <Command.Empty>No campus found.</Command.Empty>
          <Command.Group>
            {#each campuses as campus}
              <Command.Item
                value={campus.value}
                onSelect={() => {
                  value = campus.value;
                  closeAndFocusTrigger();
                }}
              >
                <Check
                  class={cn(
                    "ml-auto",
                    value !== campus.value && "text-transparent",
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
