import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { delay } from "~/utils";

export const useExampleLoader = routeLoader$(async () => {
  await delay(1000);
  return {
    example:
      "I delay loading for 1s on the server. Would be cool if I could be prefetched!",
  };
});

export default component$(() => {
  const exampleLoader = useExampleLoader();
  return (
    <>
      <header>
        <h1>Page 2</h1>
      </header>
      <br />
      <br />
      {exampleLoader.value.example}
      <br />
      <Link prefetch href="/test3">
        go to route 3
      </Link>
    </>
  );
});
