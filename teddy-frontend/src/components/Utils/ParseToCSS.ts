export function parseToCSSClass(className?: string, error?: string) {
  return [error ? "field-error" : "", className ?? ""]
    .toString()
    .replaceAll(",", " ");
}
