import App from "./App.svelte";
import "modern-normalize";
import "./stylesheet/main.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
