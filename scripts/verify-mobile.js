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
    await page.waitForTimeout(2000); // Wait for boot animation
    await page.screenshot({ path: `${SCREENSHOT_DIR}/01_mobile_initial.png` });

    // 1. Check Mobile Nav
    console.log('[ACTION] Checking Mobile Navigation...');
    // In mobile, we have a fixed header with icons.
    const hasHomeIcon = await page.locator('nav.sm\\:hidden svg.lucide-home').isVisible();
    console.log(`[VERIFY] Mobile Home Icon visible: ${hasHomeIcon}`);
    await page.screenshot({ path: `${SCREENSHOT_DIR}/02_mobile_header.png` });

    // 2. Switch to 3D Theme on Mobile
    console.log('[ACTION] Toggling 3D Mode on Mobile...');
    // The theme button in the navigation menu (desktop) isn't visible, 
    // but the background toggle is currently missing from the mobile header in the code!
    // Let's verify if there is ANY way to switch background on mobile.
    const modeText = await page.innerText('body');
    console.log(`[DATA] Is 'MODE' or 'MOTYW' visible? ${modeText.includes('MODE') || modeText.includes('MOTYW')}`);

    console.log('[SUCCESS] Mobile verification complete.');
  } catch (error) {
    console.error('[ERROR] Mobile verification failed:', error.message);
  } finally {
    await browser.close();
    console.log('[SYSTEM] Results saved to mobile_verify/');
  }
})();
