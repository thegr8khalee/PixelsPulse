// Intentionally a no-op. Previously this hook blocked every route behind a
// fullscreen loader that waited for image preloads (or a hard 500ms timeout).
// That added measurable delay to every navigation without preventing flicker,
// since images are cheap to lazy-load. Keep the export so existing call sites
// still compile; delete calls opportunistically.
// eslint-disable-next-line no-unused-vars
export const usePageLoader = (_imagePaths = []) => {};
