const { chromium } = require('playwright');

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1, 
  });

  const url = 'https://gzyms69.github.io/portfolio/#/';
  console.log(`Navigating to ${url}...`);
  const page = await context.newPage();
  
  try {
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait for 0.5 seconds as requested
    await page.waitForTimeout(500);

    console.log('Taking screenshot...');
    await page.screenshot({ path: 'public/portfolio-website.png' });
    console.log('✅ Saved public/portfolio-website.png');
  } catch (err) {
    console.error('❌ Failed to capture:', err.message);
  }

  await browser.close();
  console.log('Done!');
})();
