import { Hono } from "hono";
import type { Env } from "../shared/types";

const app = new Hono<{ Bindings: Env }>().basePath("/api");

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

  const res = await fetch("https://formsubmit.co/ajax/oj@clearwatergroup.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: body.name,
      email: body.email,
      message: body.message,
      _subject: `Contact form: ${body.name}`,
      _replyto: body.email,
    }),
  });

  const result = ((await res.json()) as { success: string; message?: string });
  if (result.success !== "true") {
    console.error("FormSubmit error:", result.message);
    return c.json({ error: "Failed to send message" }, 500);
  }

  return c.json({ success: true });
});

export default app;
