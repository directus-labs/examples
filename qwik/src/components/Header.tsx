import { component$ } from '@builder.io/qwik';
import IconMonospace from "./icons/Monospace";

export default component$(() => {
  return (
    <header>
      <nav class="container">
        <a href="/">
          <IconMonospace />
        </a>
        <span class="header__description">
          An example site powered by <span class="accent">Qwik</span> and{" "}
          <span class="accent">Directus</span>.
        </span>
      </nav>
    </header>
  );
});
