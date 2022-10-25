import IconMonospace from "./icons/Monospace.tsx";

export default function Header() {
  return (
    <header>
      <nav class="container">
        <a href="/">
          <IconMonospace />
        </a>
        <span class="header__description">
          An example site powered by <span class="accent">Fresh</span> and{" "}
          <span class="accent">Directus</span>.
        </span>
      </nav>
    </header>
  );
}