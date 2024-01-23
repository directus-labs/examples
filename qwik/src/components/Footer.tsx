import { component$ } from '@builder.io/qwik';
import IconGithub from "./icons/Github";
import IconLinkedin from "./icons/Linkedin";
import IconTwitter from "./icons/Twitter";
import IconYoutube from "./icons/Youtube";

export default component$(() => {
  return (
    <footer>
      <div class="container footer__topWrapper">
        <span>
          Generated with <span class="underline">Qwik</span>, powered by{" "}
          <span class="underline">Directus</span>.
        </span>
      </div>
      <div class="container footer__bottomWrapper">
        <span class="footer__copyright">
          © {new Date().getFullYear()} Monospace Inc
        </span>
        <ul class="footer__socials">
          <li>
            <a
              href="https://github.com/directus"
              class="logo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/DirectusVideos"
              class="logo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/directus-io"
              class="logo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/directus"
              class="logo"
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
});
