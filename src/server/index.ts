import { Hono } from "hono";
import type { Env } from "../shared/types";

const app = new Hono<{ Bindings: Env }>().basePath("/demo/api");

app.get("/health", (c) => c.json({ status: "ok" }));

app.post("/contact", async (c) => {
  const body = await c.req.json<{
    name: string;
    email: string;
    message: string;
  }>();

  if (!body.name || !body.email || !body.message) {
    return c.json({ error: "All fields are required" }, 400);
  }

  console.log("Contact form submission:", {
    name: body.name,
    email: body.email,
    message: body.message,
    timestamp: new Date().toISOString(),
  });

  return c.json({ success: true });
});

export default app;
