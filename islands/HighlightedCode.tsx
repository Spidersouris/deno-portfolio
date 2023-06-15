import { useMemo, useState } from "preact/hooks";
import { copyToClickboard } from "../services/copyToClipboard.ts";

//? Exports a code block that gets colored by
export default function HighlightedCode(
  { textToHighlight }: { textToHighlight: string },
) {
  const [hasCopied, didCopyToClipboard] = useState(false);
  return (
    <>
      {useMemo(() => (
        <div
          key="highlighted-code-block"
          class="shj-lang-js self-start select-none max-w-full"
          onClick={() => {
            const highlightedCodeBlock = document.getElementsByClassName(
              "shj-numbers",
            )[0]
              ?.nextElementSibling?.outerHTML;
            if (highlightedCodeBlock === null) {
              return;
            }

            const correctedCodeBlock = highlightedCodeBlock?.replace(
              "<div>",
              '<div class="shl-code-block">',
            )?.replaceAll("shj-syn", "shl");

            if (correctedCodeBlock === undefined) {
              console.log("unable to update outerHTML");
              return;
            }

            copyToClickboard(correctedCodeBlock);
            didCopyToClipboard(true);
            setTimeout(() => {
              didCopyToClipboard(false);
            }, 3000);
          }}
        >
          {textToHighlight}
        </div>
      {/* Updates user if code block content was copied */}
      <p class="inline-block self-start mt-2 md:mb-6">
        {hasCopied === undefined
          ? "Copy to clipboard ⤴️"
          : hasCopied === true
          ? "Copied to clipboard! ✅"
          : `Failed to copy to clipboard ❌ This usually happens because the content you provided has nothing to actually highlight.`}
      </p>
    </>
  );
}
