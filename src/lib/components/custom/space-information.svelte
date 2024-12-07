<script lang="ts">
  import AmenityIcon from "$lib/components/custom/amenity-icon.svelte";
  import type { Space } from "$src/spaces.d";
  import { ExternalLink } from "lucide-svelte/icons";

  interface Props {
    spaceSelected: Space;
  }
  let { spaceSelected = $bindable() }: Props = $props();

  function spaceGoogleMapLink(space: Space) {
    if (space === undefined) return "";
    return (
      space.metadata?.link ??
      `https://www.google.com/maps?q=${space.location.lat},${space.location.lng}`
    );
  }
</script>

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
