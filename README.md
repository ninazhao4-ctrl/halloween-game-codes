# Halloween: The Game Codes

A lightweight, GitHub-friendly static website for `halloweenthegamecodes.com`.

## Preview locally

Run any static file server from this folder. For example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Structure

- `index.html`: Homepage and code status hub
- `new-codes/`: New codes tracker
- `codes-wiki/`: Code verification and redemption guide
- `wiki/`: Characters, maps, perks, and multiplayer hub
- `content/`: Portable YAML-frontmatter content records
- `assets/`: Shared styles, JavaScript, and supplied images

The site uses root-relative production links for `halloweenthegamecodes.com` and requires no build step.
