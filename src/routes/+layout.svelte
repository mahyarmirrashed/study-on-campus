<script lang="ts">
  import { i18n } from "$lib/i18n";
  import "../app.css";
  import "../maplibre.css";
  import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import { ModeWatcher } from "mode-watcher";

  let { children } = $props();
</script>

<svelte:head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-SK8KKXP57Z">
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-SK8KKXP57Z");
  </script>
</svelte:head>

<ModeWatcher />
<ParaglideJS {i18n}>
  {@render children()}
</ParaglideJS>
