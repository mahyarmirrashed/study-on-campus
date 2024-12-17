<script lang="ts">
  import { cn } from "$lib/utils.js";
  import type { SpaceStatus } from "$src/spaces";

  interface Props {
    status: SpaceStatus;
  }
  let { status }: Props = $props();

  const classes: Record<SpaceStatus, string> = {
    Open: "bg-green-400 shadow-green-400 group-hover:bg-green-500 group-hover:shadow-green-500",
    Closed:
      "bg-red-400 shadow-red-400 group-hover:bg-red-500 group-hover:shadow-red-500",
    "Opening Soon":
      "bg-yellow-400 shadow-yellow-400 group-hover:bg-yellow-500 group-hover:shadow-yellow-500",
    "Closing Soon":
      "bg-yellow-400 shadow-yellow-400 group-hover:bg-yellow-500 group-hover:shadow-yellow-500",
  };
</script>

<div
  class="animate-appear group flex h-16 w-16 cursor-pointer items-center justify-center"
>
  <div class={cn(classes[status], "h-2 w-2 rounded-full shadow-3xl")}>
    &nbsp;
  </div>
</div>
