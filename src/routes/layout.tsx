import { component$, Slot } from "@builder.io/qwik";
import { Link, type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async () => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
};

export default component$(() => {
  return (
    <>
      <Link prefetch href="/test1">
        go to route 1
      </Link>
      <br />
      <br />
      <Link prefetch href="/test2">
        go to route 2
      </Link>
      <br />
      <br />
      <Link prefetch href="/test3">
        go to route 3
      </Link>
      <br />
      <br />
      <Slot />
    </>
  );
});
