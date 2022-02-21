export default function Notice() {
  return (
    <div className="notice">
      <div className="container">
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
        <i className="material-icons-outlined">close</i>
      </div>
    </div>
  );
}
