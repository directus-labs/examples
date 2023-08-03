import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const closed = useSignal(false);

  if (closed.value) {
    return <></>;
  }

  return (
    <div class="notice">
      <div class="container">
        <span>
          The source code for this blog is{" "}
          <a
            href="https://github.com/directus/examples"
            target="_blank"
            rel="noreferrer"
          >
            available on GitHub.
          </a>
        </span>
        <i class="material-icons-outlined notice__close" onClick$={() => closed.value = true}>close</i>
      </div>
    </div>
  );
});
