import {
  app,
  get,
  post,
  redirect,
  contentType,
} from "https://denopkg.com/syumai/dinatra/mod.ts";

const greeting = "Hello from hazelthenuttypug!";

app(
  get("/", () => greeting),
  get("/:id", ({ params }) => greeting + `</br>and hello to ${params.id}`),
);