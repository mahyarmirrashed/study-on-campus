<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Sun, Moon } from "lucide-svelte/icons";
  import { toggleMode } from "mode-watcher";
</script>

<div class="absolute right-2.5 top-2.5 z-10">
  <Button onclick={toggleMode} variant="outline" size="icon">
    <Sun
      class="h-fit w-fit rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Moon
      class="absolute h-fit w-fit rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</div>
