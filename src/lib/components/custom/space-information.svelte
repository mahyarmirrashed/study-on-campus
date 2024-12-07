<script lang="ts">
  import AmenityIcon from "$lib/components/custom/amenity-icon.svelte";
  import { Skeleton } from "$lib/components/ui/skeleton/index.js";
  import * as m from "$lib/paraglide/messages.js";
  import { languageTag } from "$src/lib/paraglide/runtime";
  import type { AvailableLanguageTag } from "$src/paraglide/runtime";
  import type {
    Space,
    SpaceAmenities,
    SpaceHoursSegment,
    Weekdays,
  } from "$src/spaces.d";
  import { ExternalLink } from "lucide-svelte/icons";
  import translate from "translate";

  interface Props {
    space: Space;
  }
  let { space = $bindable() }: Props = $props();

  const ta: Record<SpaceAmenities, string> = {
    Computers: m.computers(),
    Outlets: m.outlets(),
    Printing: m.printing(),
    Rooms: m.rooms(),
    "Water Fountains": m.waterFountains(),
    WiFi: m.wifi(),
  };
  const tw: Record<Weekdays, string> = {
    monday: m.monday(),
    tuesday: m.tuesday(),
    wednesday: m.wednesday(),
    thursday: m.thursday(),
    friday: m.friday(),
    saturday: m.saturday(),
    sunday: m.sunday(),
  };

  function spaceGoogleMapLink(space: Space) {
    if (space === undefined) return "";
    return (
      space.metadata?.link ??
      `https://www.google.com/maps?q=${space.location.lat},${space.location.lng}`
    );
  }
  function spaceHours(
    hours: SpaceHoursSegment[],
    language: AvailableLanguageTag,
  ) {
    if (hours.length === 0) return m.closed();

    const localizeHours = (time: string) => time.replace(/\:/g, "h");
    const compiledHours = hours
      .map((hours) => `${hours.open} - ${hours.close}`)
      .join(", ");

    return ["fr"].includes(language)
      ? localizeHours(compiledHours)
      : compiledHours;
  }
</script>

<div class="mb-3">
  {#await translate(space.description, languageTag())}
    <div class="flex flex-col gap-y-2">
      {#each Array(3)}
        <Skeleton class="h-4 w-full" />
      {/each}
    </div>
  {:then result}
    {result}
  {:catch}
    {space.description}
  {/await}
</div>
{#if space.metadata?.amenities}
  <ul class="mb-3">
    <h2 class="mb-1 font-semibold">{m.includedAmenities()}</h2>
    {#each space.metadata?.amenities.slice().sort() as amenity}
      <li class="flex gap-x-1 ps-1">
        <AmenityIcon {amenity} />
        <span>{ta[amenity]}</span>
      </li>
    {/each}
  </ul>
{/if}
<div class="mb-3">
  <h2 class="font-semibold">{m.directions()}</h2>
  <a
    class="flex gap-x-1 hover:underline"
    href={spaceGoogleMapLink(space)}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>{m.googleMaps()}</span>
    <ExternalLink class="h-fit w-fit scale-75" />
  </a>
</div>
<div>
  <h2 class="font-semibold">{m.hours()}</h2>
  {#if space.alwaysOpen}
    <span>{m.alwaysOpen()}</span>
  {:else}
    <ul>
      {#each Object.entries(space.hours) as [weekday, hours]}
        <li class="flex justify-between gap-x-1">
          <span class="first-letter:uppercase">{tw[weekday as Weekdays]}</span>
          <span>
            {spaceHours(hours, languageTag())}
          </span>
        </li>
      {/each}
    </ul>
  {/if}
</div>
