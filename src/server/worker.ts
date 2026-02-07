import app from "./index";
import type { Env } from "../shared/types";

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // API routes — delegate to Hono
    if (url.pathname.startsWith("/demo/api/")) {
      return app.fetch(request, env, ctx);
    }

    // Try static asset
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    // SPA fallback — serve index.html for client-side routing under /demo
    if (url.pathname === "/demo" || url.pathname.startsWith("/demo/")) {
      const fallbackUrl = new URL("/demo/index.html", request.url);
      return env.ASSETS.fetch(new Request(fallbackUrl, request));
    }

    return assetResponse;
  },
};
