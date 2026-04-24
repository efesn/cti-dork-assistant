import { spawn, spawnSync } from "node:child_process";
import process from "node:process";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright-core";

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const appUrl = "http://127.0.0.1:4173";

function startDevServer() {
  if (process.platform === "win32") {
    return spawn(
      "cmd.exe",
      ["/c", "npm run dev -- --host 127.0.0.1 --port 4173"],
      {
        stdio: "pipe",
        shell: false
      }
    );
  }

  return spawn("npm", ["run", "dev", "--", "--host", "127.0.0.1", "--port", "4173"], {
    stdio: "pipe",
    shell: false
  });
}

function stopDevServer(server) {
  if (!server || server.killed || !server.pid) return;

  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
    return;
  }

  server.kill("SIGTERM");
}

async function waitForServer(maxRetry = 40) {
  for (let index = 0; index < maxRetry; index += 1) {
    try {
      const response = await fetch(appUrl);
      if (response.ok) return;
    } catch {
      // keep trying
    }
    await delay(500);
  }
  throw new Error("Vite dev server başlatılamadı.");
}

async function capture() {
  const server = startDevServer();
  server.stdout.on("data", () => {});
  server.stderr.on("data", () => {});

  try {
    await waitForServer();

    const browser = await chromium.launch({
      executablePath: edgePath,
      headless: true
    });

    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 }
    });

    await page.goto(appUrl, { waitUntil: "networkidle" });
    await page.screenshot({
      path: "docs/screenshots/01-ana-ekran.png",
      fullPage: true
    });

    await page.fill('input[placeholder="ornek.com"]', "example.com");
    await delay(300);
    await page.screenshot({
      path: "docs/screenshots/02-sonuc-kartlari.png",
      fullPage: true
    });

    await page.fill('input[placeholder="CVE, phishing, ransomware..."]', "phishing");
    await delay(300);
    await page.screenshot({
      path: "docs/screenshots/03-filtre-ve-export.png",
      fullPage: true
    });

    await browser.close();
  } finally {
    stopDevServer(server);
  }
}

capture()
  .then(() => {
    console.log("Ekran görüntüleri oluşturuldu.");
  })
  .catch((error) => {
    console.error("Screenshot üretimi başarısız:", error);
    process.exitCode = 1;
  });
