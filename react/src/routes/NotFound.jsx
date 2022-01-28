import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="error">
      <section>
        <div className="container">
          <h1>Uh-oh, we can't seem to find the page you're looking for.</h1>
          <p>
            <Link to="/">Click here</Link> to head back to the safety of the
            homepage.
          </p>
        </div>
      </section>
    </main>
  );
}
