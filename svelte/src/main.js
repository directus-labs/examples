import App from "./App.svelte";
import "modern-normalize";
import "../../shared/stylesheet/main.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
