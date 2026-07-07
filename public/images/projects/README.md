# Project showcase images

Drop a photo/screenshot for each project here. The filename must match the
project `id` in `src/data/projects.ts`. Until a file exists, the card shows a
styled placeholder automatically — so you can add them one at a time.

Expected files (all `.jpg`):

| File                      | Project                              |
| ------------------------- | ------------------------------------ |
| `sage3.jpg`               | SAGE3                                |
| `sbom-visualizer.jpg`     | CycloneDX SBOM Visualizer            |
| `destiny.jpg`             | Destiny-Class CyberCANOE             |
| `hawaii-energy.jpg`       | Hawaii State Energy Office Projects  |
| `dynacove.jpg`            | DynaCOVE                             |
| `haven.jpg`               | HAVEN                                |
| `star-wars.jpg`           | Tatooine                            |
| `satellite-watch.jpg`     | SatWatch                             |

Tips:
- Cards display images at a **16:10** ratio and crop to fill, so aim for
  landscape shots. ~1200×750px is a good target.
- Keep files reasonably small (ideally under ~300 KB) so the page stays fast —
  compress with something like Squoosh or `sips`/`ffmpeg`.
- If you'd rather use `.png` or `.webp`, change the `image` path for that
  project in `src/data/projects.ts` to match.
