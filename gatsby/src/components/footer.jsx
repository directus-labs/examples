import * as React from "react";
import IconGithub from "./icons/github";
import IconLinkedin from "./icons/linkedin";
import IconTwitter from "./icons/twitter";
import IconYoutube from "./icons/youtube";

export default function Footer() {
  return (
    <footer>
      <div className="container footer__topWrapper">
        <span>
          Generated with <span className="underline">Gatsby</span>, powered by{" "}
          <span className="underline">Directus</span>.
        </span>
      </div>
      <div className="container footer__bottomWrapper">
        <span className="footer__copyright">
          © {new Date().getFullYear()} Monospace Inc
        </span>
        <ul className="footer__socials">
          <li>
            <a
              href="https://github.com/directus"
              className="logo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/DirectusVideos"
              className="logo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/directus"
              className="logo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/directus"
              className="logo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconTwitter />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
