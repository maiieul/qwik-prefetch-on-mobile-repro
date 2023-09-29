import { type QRL, implicit$FirstArg } from "@builder.io/qwik";

export function delayQrl<T>(fn: QRL<() => T>, delayInMs: number): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(fn());
    }, delayInMs);
  });
}

export const delay$ = implicit$FirstArg(delayQrl);

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
