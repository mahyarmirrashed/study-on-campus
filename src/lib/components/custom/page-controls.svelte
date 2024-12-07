<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import {
    setLanguageTag,
    type AvailableLanguageTag,
  } from "$src/lib/paraglide/runtime";
  import { Sun, Moon } from "lucide-svelte/icons";
  import { toggleMode } from "mode-watcher";
  import { PersistedState } from "runed";

  const language = new PersistedState<AvailableLanguageTag>("language", "fr");

  function switchLanguage() {
    if (language.current === "en") language.current = "fr";
    else if (language.current === "fr") language.current = "en";

    setLanguageTag(language.current);
  }
</script>

<div class="absolute right-2.5 top-2.5 z-10 flex flex-col gap-y-2">
  <Button onclick={toggleMode} variant="outline" size="icon">
    <Sun
      class="h-fit w-fit rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Moon
      class="absolute h-fit w-fit rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
  <Button
    onclick={switchLanguage}
    variant="outline"
    size="icon"
    class="uppercase"
  >
    {language.current}
    <span class="sr-only">Toggle language</span>
  </Button>
</div>
