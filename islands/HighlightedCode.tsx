import { useMemo, useState } from "preact/hooks";
//? Function to copy content to clipboard
import { copyToClipboard } from "../services/copyToClipboard.ts";
//? Import type for typecasting useState
import type { booleanOrUndefined } from "../types/booleanOrUndefined.ts";
//? Import status report toggle
import { CopyStatus } from "../components/misc/CopyStatus.tsx";

//? Define function that will try to copy the edited content to
//? clipboard and then update the success state
function copyCodeBlockContentToClipboard(
  didCopyToClipboard: (toggleCopy: boolean | undefined) => void,
) {
  //? Attempts to find the element that was highlighted
  const highlightedCodeBlock = document.getElementsByClassName(
    "shj-numbers",
  )[0]
    ?.nextElementSibling?.outerHTML;

  //? Attempt to update the content of 'highlightedCodeBlock' with
  //? the proper classes, if anything was highlighted at all
  const correctedCodeBlock = highlightedCodeBlock?.replace(
    "<div>",
    '<div class="shl-code-block">',
  )?.replaceAll("shj-syn", "shl");

  //? Check if nothing was highlighted to be replaced, returns error if so
  if (correctedCodeBlock === undefined) {
    didCopyToClipboard(false);
    return;
  }

  //? If everything worked fine, copy to clipboard
  copyToClipboard(correctedCodeBlock);
  //? Update status message and reset it later
  didCopyToClipboard(true);
  setTimeout(() => {
    didCopyToClipboard(undefined);
  }, 3000);
}

//? Exports a code block that gets colored by
export default function HighlightedCode(
  { textToHighlight }: { textToHighlight: string },
) {
  //? Tracks what is the message to be displayed about the "copy to clipboard" status
  const [hasCopied, didCopyToClipboard] = useState<booleanOrUndefined>();

  return (
    <>
      {useMemo(() => (
        <div
          key="highlighted-code-block"
          class="shj-lang-js self-start select-none max-w-full"
          onClick={() => {
            copyCodeBlockContentToClipboard(didCopyToClipboard);
          }}
        >
          {textToHighlight}
        </div>
      ), [])}
      {/* Updates user if code block content was copied */}
      <CopyStatus copyStatus={hasCopied} />
    </>
  );
}
