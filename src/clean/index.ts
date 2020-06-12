export default function clean(text: string): string {
  const newLine = "\n";
  const splitText = text
    .split(newLine)
    .map((comment) => removeComment(comment));

  const fullText = splitText.join(newLine);
  return fullText;
}

function removeComment(text: string): string {
  return text.replace(/(^[ \\t]+)?(^)((\/\/))(.*)/gm, "");
}
