# Sharing Tailwind v4 Styles in an Nx Monorepo

Demo: share Tailwind `@theme` tokens across multiple apps via a shared styles package in a PNPM + [Nx](https://nx.dev) workspace.

```
apps/shop/           # React + Vite
apps/admin/          # React + Vite
packages/shared/styles/  # Shared @theme tokens (CSS-only, no build step)
```

Both apps `@import '@org/shared-styles'` and get consistent `bg-primary`, `text-ink`, `shadow-md`, etc.

[`@juristr/nx-tailwind-sync`](https://www.npmjs.com/package/@juristr/nx-tailwind-sync) auto-manages `@source` directives from the Nx project graph.

For a detailed walkthrough, see the [Nx guide on using Tailwind CSS in a monorepo](https://nx.dev/docs/technologies/react/guides/using-tailwind-css-in-react).

## Run It

```bash
pnpm install
pnpm nx dev shop    # localhost:4200
pnpm nx dev admin   # localhost:4201
```

## Nx

[Nx](https://nx.dev) is a build system for monorepos. It caches what didn't change, runs only what's affected, and scales your CI with [remote caching](https://nx.dev/ci/features/remote-cache), [task distribution](https://nx.dev/ci/features/distribute-task-execution), and [self-healing CI](https://nx.dev/ci/features/self-healing) that automatically detects, fixes, and verifies failures on your pipeline.

- [Docs](https://nx.dev/docs) · [Blog](https://nx.dev/blog) · [YouTube](https://youtube.com/@nxdevtools) · [Discord](https://go.nx.dev/community) · [X](https://x.com/nxdevtools)
