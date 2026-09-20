/**
 * Blur-in images inside `root` as they load, and report when all of them have.
 *
 * Uses DOM `load` events rather than NuxtImg's emit so it also catches images that
 * were already complete before hydration (cached, or SSR-rendered above the fold),
 * which would otherwise never fire a load event and stay blurred.
 *
 * `ready` flips true when every image is loaded (or errored), or after `timeout` ms,
 * so a slow tile can never hide a whole section indefinitely.
 */
export function useImageReveal(root: Ref<HTMLElement | null>, timeout = 2500) {
  const ready = ref(false);

  onMounted(() => {
    const imgs = Array.from(root.value?.querySelectorAll<HTMLImageElement>("img") ?? []);
    if (imgs.length === 0) {
      ready.value = true;
      return;
    }

    let remaining = imgs.length;
    const done = (img: HTMLImageElement) => {
      if (img.dataset.loaded) return;
      img.dataset.loaded = "1";
      if (--remaining <= 0) ready.value = true;
    };

    for (const img of imgs) {
      if (img.complete && img.naturalWidth > 0) {
        done(img);
      } else {
        img.addEventListener("load", () => done(img), { once: true });
        img.addEventListener("error", () => done(img), { once: true });
      }
    }

    const timer = window.setTimeout(() => (ready.value = true), timeout);
    onBeforeUnmount(() => window.clearTimeout(timer));
  });

  return { ready };
}
