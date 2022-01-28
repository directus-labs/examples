<script>
  import { Router, Route } from "svelte-navigator";
  import Notice from "./components/Notice.svelte";
  import Header from "./components/Header.svelte";
  import Info from "./components/Info.svelte";
  import Footer from "./components/Footer.svelte";

  import Home from "./routes/Home.svelte";
  import Article from "./routes/Article.svelte";
  import NotFound from "./routes/NotFound.svelte";
</script>

<div class="layout">
  <Notice />
  <Header />
  <Router>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/articles/:id">
      <Article />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Router>
  <Info />
  <Footer />
</div>
