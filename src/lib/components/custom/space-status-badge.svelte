<script lang="ts">
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { cn } from "$lib/utils.js";
  import type { SpaceStatus } from "$src/spaces.d";

  let {
    status,
    class: className,
    ...restProps
  }: { status: SpaceStatus; class?: string } = $props();

  const classes: Record<SpaceStatus, string> = {
    Open: "bg-green-400 hover:bg-green-500",
    Closed: "bg-red-400 hover:bg-red-500",
    "Opening Soon": "bg-yellow-400 hover:bg-yellow-500",
    "Closing Soon": "bg-yellow-400 hover:bg-yellow-500",
  };
</script>

<Badge
  class={cn(classes[status], "border-transparent", className)}
  {...restProps}
>
  {status}
</Badge>
