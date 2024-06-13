import Generic from './lib/Generic.svelte';

export function typed<T extends string | number>(value: T) {
  return {
    Generic: Generic as typeof Generic<T>,
  };
}
