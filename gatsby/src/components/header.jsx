import * as React from "react";
import IconMonospace from "./icons/monospace";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <a href="/">
          <IconMonospace />
        </a>
        <span className="header__description">
          An example site powered by <span className="accent">Gatsby</span> and{" "}
          <span className="accent">Directus</span>.
        </span>
      </nav>
    </header>
  );
}
