import re
import sys
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "resource"
OUT = ROOT / "extracted"
OUT.mkdir(exist_ok=True)


def clean(text: str) -> str:
    text = text.replace("\u00a0", " ")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def main() -> None:
    for pdf in sorted(SRC.glob("*.pdf")):
        try:
            reader = PdfReader(str(pdf))
            chunks = []
            for i, page in enumerate(reader.pages, 1):
                try:
                    page_text = page.extract_text() or ""
                except Exception as exc:  # noqa: BLE001
                    page_text = f"[EXTRACT ERROR ON PAGE {i}: {exc}]"
                chunks.append(f"\n\n===== PAGE {i} =====\n{page_text}")
            out_path = OUT / (pdf.stem + ".txt")
            out_path.write_text(clean("".join(chunks)), encoding="utf-8")
            print(f"{pdf.name}: {len(reader.pages)} pages -> {out_path.name}")
        except Exception as exc:  # noqa: BLE001
            print(f"FAILED {pdf.name}: {exc}", file=sys.stderr)


if __name__ == "__main__":
    main()
