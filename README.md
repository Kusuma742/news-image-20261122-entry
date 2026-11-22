# 22 November 2026 — The World in One Picture

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Kusuma742/news-image-20261122-entry/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Kusuma742/news-image-20261122-entry/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

Built for the make.fun bounty: https://make.fun/bounty/news-image-20261122

One image summing up Sunday 22 November 2026's world news, in the style of
a newspaper front page: a masthead naming the day, a lead story, and five
more stories across regions and fields.

## The six stories

1. **Lead — Mexico captures 'El Chapo Isidro'.** Special forces arrest
   cartel boss Fausto Isidro Meza Flores, on the FBI's 10 most wanted list;
   11 killed in the operation (7 gunmen, 4 soldiers).
2. **Russia hits Zelensky's hometown.** A ballistic missile kills 2 and
   wounds dozens in Kryvyi Rih; Ukraine hits a Russian cargo ship in the
   Gulf of Finland.
3. **Iran strikes Bahrain.** An industrial site is hit (Bahrain says
   civilian property was struck); Iran also hits 3 tankers and shows off
   missile launchers.
4. **COP31: second day of overtime.** The Antalya climate talks drag on as
   nations split over fossil fuels; a new draft deal aims to avert collapse.
5. **FBI database hacked.** Trump confirms a breach of the FBI's NCIC
   criminal database, holding fingerprints and wanted-person records.
6. **Boat capsizes in Nigeria.** At least 24 dead as a boat carrying people
   to a funeral sinks.

All six stories were verified against news reports of 22 November 2026
before the image was drawn. The illustrations were generated text-free;
every word in the image was rendered crisply by a script, so nothing is
garbled and the masthead and headlines stay legible at 300 pixels across.

## Run it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` to the output directory and verifies the copy
matches byte for byte. Node 22, no dependencies, no network.

## Files

- `entry.png` — the image (1024x1024 PNG)
- `main.ts` — the program that writes it to the output directory
- `README.md` — this file
- `LICENSE` — MIT
