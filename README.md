<p align="center">
  <img src="public/gamerdex-logo.png" alt="GamerDex" width="320" />
</p>

<p align="center">
  <strong>Your Ultimate Game Companion</strong>
</p>

The home site for GamerDex, live at [gamerdex.app](https://gamerdex.app). It introduces the project, links to each tracker, and hosts the privacy policy and terms of service that every tracker shares.

GamerDex trackers are free and need no account. Each one keeps your progress in your browser, and cloud sync is optional and saves your data to storage you own.

## Trackers

| Game                  | Site                                                                             | Source                                                                                |
| --------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Dinkum                | [dinkum.gamerdex.app](https://dinkum.gamerdex.app)                               | [dinkum-tracker](https://github.com/GamerdexApp/dinkum-tracker)                       |
| Stardew Valley        | [stardew-valley.gamerdex.app](https://stardew-valley.gamerdex.app)               | [stardew-valley-companion](https://github.com/GamerdexApp/stardew-valley-companion)   |
| Supermarket Simulator | [supermarket-simulator.gamerdex.app](https://supermarket-simulator.gamerdex.app) |                                                                                       |
| Whiteout Survival     | [whiteout-survival.gamerdex.app](https://whiteout-survival.gamerdex.app)         | [whiteout-survival-tracker](https://github.com/GamerdexApp/whiteout-survival-tracker) |

The homepage cards come from `GAME_CARDS` in `src/components/GameCard.tsx`. Card art lives in `public/games`. When you add a tracker, also add it to `public/llms.txt` and the About section copy.

## Run it

Node 24 and pnpm 10 are required.

```
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Other commands:

```
pnpm build
pnpm lint
pnpm format
pnpm format:check
```

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, Flowbite React and TypeScript, and deployed on Vercel.

## Legal pages

The privacy policy (`/privacy`) and terms of service (`/terms`) cover every tracker and the cloud sync providers. Update them and their dates before a tracker collects something new or adds a sync provider.

## Contact

Open an issue here or on the tracker's repository, or join the [Discord](https://discord.gg/NBTjUCvqev).

GamerDex is an unofficial fan project. It is not affiliated with or endorsed by the developers or publishers of any game it covers.

## License

All rights reserved.
