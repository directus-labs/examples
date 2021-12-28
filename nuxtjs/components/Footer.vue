<template>
  <footer>
    <div class="container footer__topWrapper">
      <span>
        Generated with <span class="underline">Nuxt</span>, powered by
        <span class="underline">Directus</span>.
      </span>
    </div>
    <div class="container footer__bottomWrapper">
      <span class="footer__copyright">© {{new Date().getFullYear()}} Monospace Inc</span>
      <ul class="footer__socials">
        <li>
          <a
            href="https://github.com/directus"
            class="logo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/c/DirectusVideos"
            class="logo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconsYoutube />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/directus-io"
            class="logo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/directus"
            class="logo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconsTwitter />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
