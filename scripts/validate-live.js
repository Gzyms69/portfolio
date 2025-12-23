import { chromium } from 'playwright';
import fs from 'fs';

const SITE_URL = 'https://gzyms69.github.io/portfolio/';
const SCREENSHOT_DIR = 'temp_screenshots';

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR);
}

(async () => {
  console.log('[SYSTEM] Initializing Playwright browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();

  try {
    console.log(`[ACTION] Navigating to ${SITE_URL}...`);
    await page.goto(SITE_URL, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `${SCREENSHOT_DIR}/01_initial_load.png` });
    console.log('[LOG] Initial load captured.');

    // 1. Click Nav Menu Toggle (The Power Button)
    console.log('[ACTION] Clicking the Power Button (Nav Toggle)...');
    // Using a selector that matches your Navigation.tsx button
    const powerButton = page.locator('button:has(svg.lucide-power)');
    await powerButton.click();
    await page.waitForTimeout(1000); // Wait for menu animation
    await page.screenshot({ path: `${SCREENSHOT_DIR}/02_menu_open.png` });
    console.log('[LOG] Menu state captured.');

    // 2. Click Theme Toggle (ASCII -> Sticks)
    console.log('[ACTION] Switching to 3D Dossier Theme...');
    // Look for the background switch button
    const themeButton = page.locator('button:has-text("MOTYW"), button:has-text("MODE"), button:has(svg.lucide-boxes), button:has(svg.lucide-command)');
    await themeButton.click();
    console.log('[LOG] Theme switch triggered.');
    
    // Wait for CRT zap and 3D mount
    await page.waitForTimeout(2000); 
    await page.screenshot({ path: `${SCREENSHOT_DIR}/03_dossier_mode.png` });
    console.log('[LOG] Dossier view captured.');

    // 3. Exit Theme (Sticks -> ASCII)
    console.log('[ACTION] Clicking Dossier Power Button to Exit...');
    const dossierPower = page.locator('button[title="SYSTEM_SHUTDOWN"]');
    await dossierPower.click();
    
    await page.waitForTimeout(2000); // Wait for return transition
    await page.screenshot({ path: `${SCREENSHOT_DIR}/04_returned_to_ascii.png` });
    console.log('[LOG] Return to ASCII captured.');

    console.log('[SUCCESS] All UI actions performed successfully.');
  } catch (error) {
    console.error('[ERROR] UI Action failed:', error.message);
    await page.screenshot({ path: `${SCREENSHOT_DIR}/error_state.png` });
  } finally {
    await browser.close();
    console.log('[SYSTEM] Browser closed. Check temp_screenshots/ for results.');
  }
})();
