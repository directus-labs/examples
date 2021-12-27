import * as React from "react";
import { Link } from "gatsby";
import DefaultLayout from "../layouts/default";

const NotFoundPage = () => {
  return (
    <DefaultLayout>
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
    </DefaultLayout>
  );
};

export default NotFoundPage;
