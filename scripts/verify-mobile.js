import { chromium, devices } from 'playwright';
import fs from 'fs';

const SITE_URL = 'https://gzyms69.github.io/portfolio/';
const SCREENSHOT_DIR = 'mobile_verify';

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR);
}

(async () => {
  console.log('[SYSTEM] Initializing Mobile Verification (iPhone 13)...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ...devices['iPhone 13'],
  });
  const page = await context.newPage();

  try {
    console.log(`[ACTION] Navigating to ${SITE_URL}...`);
    await page.goto(SITE_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000); 
    await page.screenshot({ path: `${SCREENSHOT_DIR}/01_mobile_initial.png` });

    // 1. Open Mobile Menu
    console.log('[ACTION] Opening Mobile Menu...');
    const powerButton = page.locator('button:has(svg.lucide-power)').last();
    await powerButton.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `${SCREENSHOT_DIR}/02_mobile_menu_open.png` });

    // 2. Start Snake Game on Mobile
    console.log('[ACTION] Launching Snake Game...');
    await page.locator('button:has-text("SNAKE")').click();
    await page.waitForTimeout(1000);
    // Confirm dialog
    await page.locator('button:has-text("CONFIRM")').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `${SCREENSHOT_DIR}/03_mobile_snake_game.png` });

    // 3. Verify D-pad visibility
    const hasDpad = await page.locator('.grid-cols-3.sm\:hidden').isVisible();
    console.log(`[VERIFY] Mobile D-pad visible: ${hasDpad}`);

    console.log('[SUCCESS] Mobile verification complete.');
  } catch (error) {
    console.error('[ERROR] Mobile verification failed:', error.message);
  } finally {
    await browser.close();
    console.log('[SYSTEM] Results saved to mobile_verify/');
  }
})();
