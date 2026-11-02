import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "dist");
const host = "127.0.0.1";
const port = Number(process.env.DASHBOARD_PORT || 5173);
const mime = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, `http://${host}:${port}`).pathname);
    let target = path.resolve(root, `.${pathname}`);
    if (target !== root && !target.startsWith(`${root}${path.sep}`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, "index.html");
    } catch {
      target = path.join(root, "index.html");
    }
    const body = await readFile(target);
    response.writeHead(200, {
      "Content-Type": mime[path.extname(target)] || "application/octet-stream",
      "Cache-Control": target.endsWith("index.html") ? "no-store" : "public, max-age=31536000, immutable",
    });
    response.end(body);
  } catch (error) {
    response.writeHead(500).end(String(error));
  }
}).listen(port, host, () => {
  console.log(`Laptop dashboard: http://${host}:${port}`);
  console.log("Orange Pi backend: configured in the dashboard endpoint panel");
  console.log("Press Ctrl+C to stop the laptop frontend.");
});
