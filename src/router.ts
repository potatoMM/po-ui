import { createWebHashHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/switchPage.vue";
import Button from "./components/ButtonPage.vue";
import Dialog from "./components/DialogPage.vue";
import Tabs from "./components/TabsPage.vue";

import { h } from "vue";
import Markdown from "./components/Markdown.vue";

const history = createWebHashHistory();
const md = (filename) =>
  h(Markdown, { path: `../markdown/${filename}.md`, key: filename });

const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        { path: "intro", component: md("intro") },
        { path: "get-started", component: md("get-started") },
        { path: "install", component: md("install") },
        {
          path: "switch",
          component: Switch,
        },
        {
          path: "button",
          component: Button,
        },
        {
          path: "dialog",
          component: Dialog,
        },
        {
          path: "tabs",
          component: Tabs,
        },
      ],
    },
  ],
});
export default router;
