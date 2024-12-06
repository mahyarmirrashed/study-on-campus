<script lang="ts">
  import { i18n } from "$lib/i18n";
  import "../app.css";
  import "../maplibre.css";
  import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import { ModeWatcher } from "mode-watcher";

  let { children } = $props();
</script>

<ModeWatcher />
<ParaglideJS {i18n}>
  {@render children()}
</ParaglideJS>
