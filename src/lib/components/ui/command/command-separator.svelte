<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { Command as CommandPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CommandPrimitive.SeparatorProps = $props();
</script>

<CommandPrimitive.Separator
  class={cn("-mx-1 h-px bg-border", className)}
  bind:ref
  {...restProps}
/>
