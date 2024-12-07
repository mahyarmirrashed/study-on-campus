add *args:
  @pnpm dlx shadcn-svelte@latest add {{args}}

serve *args:
  @pnpm dev {{args}}

t:
  @pnpm dlx @inlang/cli machine translate --project project.inlang

tgen:
  @pnpm dlx @inlang/paraglide-js compile --project ./project.inlang --outdir ./src/paraglide
