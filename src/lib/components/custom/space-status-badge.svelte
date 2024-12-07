<script lang="ts">
  import { Badge } from "$lib/components/ui/badge/index.js";
  import * as m from "$lib/paraglide/messages.js";
  import { cn } from "$lib/utils.js";
  import type { SpaceStatus } from "$src/spaces.d";

  interface Props {
    status: SpaceStatus;
    class?: string;
  }
  let { status, class: className, ...restProps }: Props = $props();

  const t: Record<SpaceStatus, string> = {
    Open: m.open(),
    Closed: m.closed(),
    "Opening Soon": m.openingSoon(),
    "Closing Soon": m.closingSoon(),
  };
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
  {t[status]}
</Badge>
