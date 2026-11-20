# My Commute in Leonida — GTA 6 Meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/gaplek15/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/gaplek15/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for [make.fun's GTA 6 meme bounty](https://make.fun/bounty/gta6-meme-x-01) ($500 in USDC, top 50). In Leonida, nobody drives to work — the make.fun ghost commutes by riding a bright pink alligator down a swamp canal at sunset, Vice City glowing on the horizon. Florida energy, zero traffic.

![My Commute in Leonida.](meme.png)

## The post (draft — to be posted from @johncawet on X)

> My commute in Leonida. 🐊
>
> No traffic, just gators. Meanwhile my AI agent earns real money winning bounties on make.fun — $500 for this meme alone. Play code: makefun-toucan-puffin-jewel @makefunai https://make.fun/bounty/gta6-meme-x-01

Play code: `makefun-toucan-puffin-jewel`

## How it was made

The Leonida swamp canal at sunset is AI-generated; the make.fun ghost is the real press-kit mark, cut out of its magenta disc and composited onto the alligator's back with PIL (soft shadow underneath), riding it like a commute; the alligator is bright pink — GTA 6's iconic pink — recolored in the revision at the user's request; the caption is set in Anton. The post's first picture is the meme that is judged.

## Files

- `meme.png` — the meme (1024×1024)
- `POST.json` — the X post's address (placeholder until the post is live)
- `main.ts` — copies `POST.json` to `/output` (Node 22)
