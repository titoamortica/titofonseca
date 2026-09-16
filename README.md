# Tito Fonseca — Midori Mantises

Updated player archive for Tito Fonseca.

## Included
- Hero image using `assets/tito-fonseca.png`
- Midori Mantises logo using `assets/midori-mantises.png`
- Profile / Team / Stats / Highlights / Journal / Gallery
- Stats: 60 points per game, 70% field goal
- Highlights: undefeated pre-season, 100-point game, plus empty future-highlight slots
- Journal has no public "new entry" button. Add/edit entries directly in `index.html`.
- Gallery has no public upload button. Add new photos yourself by editing `index.html` and putting image files in `assets/`.
- Visitors can like and comment on photos.

## Important: likes/comments
This version stores likes and comments in the visitor's own browser (`localStorage`). That means the interface works immediately, but a like/comment made by one visitor is **not shared with everyone**.

For real shared likes/comments across all visitors, the site needs a small online database/backend such as Supabase or Firebase. GitHub Pages alone cannot store shared visitor data.

## Adding a new photo
1. Put the image in `assets/`.
2. Copy a `.gallery-card` block in `index.html`.
3. Change the image filename and the `data-photo` / comment target IDs.
4. Commit the changes to GitHub.

## Editing the journal
Journal entries are intentionally owner-only: edit the HTML inside `#journalList` in `index.html`. Visitors have no journal editing controls.
