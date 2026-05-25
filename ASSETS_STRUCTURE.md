# NailMatch — Asset Structure

All project assets live under `src/assets/`:

## src/assets/builder/
Nail Builder screen images (shapes + styles).
- `Nail builder.png` — hero image
- `Trending nails.png` — trending section
- Shape options: `almendra.png`, `ovalada.png`, `Cuadrada.png`, `siletto.png`
- Style options: `black.png`, `nude.png`, `pink.png`, `Red.png`, `glitter.png`, `Flowers.png`, `corazones.png`

## src/assets/misc/
Navigation tab bar icons.
- `Home.png`, `search.png`, `Calendar.png`, `Chat.png`
- `Favoritos.png`, `booking.png`, `ajustes.png`, `profile.png`

## src/assets/profiles/
Profile pictures and portfolios for each manicurist.
Each manicurist has:
- `ProfilePIC.png` or `ProfilePIC.jpg`
- `portafolio/1.jpg … 6.jpg` (or .jpeg)

### Available profiles:
- `ana-martinez/`
- `laura-hernandez/`
- `maria-gonzalez/`
- `pixie-hades-nails/`
- `sofia-lopez/`

## src/assets/icons/
- `Guidelines.md` — icon usage guidelines

## Usage in code (example)
```tsx
import profilePic from "@/assets/profiles/ana-martinez/ProfilePIC.png";
import homeIcon from "@/assets/misc/Home.png";
import almendra from "@/assets/builder/almendra.png";
```
