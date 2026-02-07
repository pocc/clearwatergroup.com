import { Hono } from "hono";
import type { Env } from "../shared/types";

const app = new Hono<{ Bindings: Env }>().basePath("/demo/api");

app.get("/health", (c) => c.json({ status: "ok" }));

export default app;
