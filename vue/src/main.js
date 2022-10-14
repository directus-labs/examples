import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "modern-normalize";
import "./stylesheet/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
