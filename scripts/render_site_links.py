"""Regenerate static navigation/footer from templates/site-links.html. Python 3 only."""
from pathlib import Path
import re
root = Path(__file__).resolve().parents[1]
links = (root / "templates/site-links.html").read_text()
count = 0
for path in root.rglob("*.html"):
    if path.parts[-2] == "templates":
        continue
    text = path.read_text()
    original = text
    own = "/" + path.relative_to(root).as_posix().removesuffix("index.html")
    for slot in ("header", "footer"):
        content = links
        if slot == "header":
            content = content.replace('href="' + own + '"', 'href="' + own + '" aria-current="page"')
        pattern = r"(<!-- shared-site-links:" + slot + r":start -->).*?(<!-- shared-site-links:" + slot + r":end -->)"
        text = re.sub(pattern, lambda m: m[1] + "\n" + content.strip() + "\n" + m[2], text, flags=re.S)
    if text != original:
        path.write_text(text)
        count += 1
print("Updated", count, "HTML files")
