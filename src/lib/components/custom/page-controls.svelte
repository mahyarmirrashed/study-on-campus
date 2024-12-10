<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { PUBLIC_GITHUB_LINK } from "$env/static/public";
  import SpaceStatusBadge from "$lib/components/custom/space-status-badge.svelte";
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { i18n } from "$lib/i18n";
  import * as m from "$lib/paraglide/messages.js";
  import {
    setLanguageTag,
    type AvailableLanguageTag,
  } from "$src/lib/paraglide/runtime";
  import { CircleHelp, Github, Moon, Sun } from "lucide-svelte/icons";
  import { toggleMode } from "mode-watcher";
  import { PersistedState } from "runed";

  const language = new PersistedState<AvailableLanguageTag>("language", "en");

  function switchLanguage() {
    if (language.current === "en") language.current = "fr";
    else if (language.current === "fr") language.current = "en";

    setLanguageTag(language.current);

    const canonicalPath = i18n.route($page.url.pathname);
    const localisedPath = i18n.resolveRoute(canonicalPath, language.current);
    goto(localisedPath);
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
    <span class="sr-only">{m.toggleTheme()}</span>
  </Button>
  <Button
    onclick={switchLanguage}
    variant="outline"
    size="icon"
    class="uppercase"
  >
    {language.current}
    <span class="sr-only">{m.toggleLanguage()}</span>
  </Button>
  <a href={PUBLIC_GITHUB_LINK} target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon" class="uppercase">
      <Github class="h-fit w-fit scale-100 " />
      <span class="sr-only">{m.visitSource()}</span>
    </Button>
  </a>
  <Dialog.Root>
    <Dialog.Trigger
      class={buttonVariants({ variant: "outline", size: "icon" })}
    >
      <CircleHelp class="h-fit w-fit scale-100 " />
      <span class="sr-only">{m.getHelp()}</span>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>{m.legend()}</Dialog.Title>
        <Dialog.Description>
          {m.colorIndication()}
        </Dialog.Description>
      </Dialog.Header>
      <div class="flex flex-col gap-y-2">
        <SpaceStatusBadge status={"Open"} class="mr-auto" />
        <SpaceStatusBadge status={"Closing Soon"} class="mr-auto" />
        <SpaceStatusBadge status={"Closed"} class="mr-auto" />
      </div>
    </Dialog.Content>
  </Dialog.Root>
</div>
