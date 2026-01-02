import { chromium } from 'playwright';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log('Navigating to http://localhost:8081/portfolio/ ...');
    await page.goto('http://localhost:8081/portfolio/', { waitUntil: 'networkidle' });
    
    // Wait a bit for animations
    await page.waitForTimeout(2000);
    
    console.log('Taking screenshot (ASCII)...');
    await page.screenshot({ path: 'debug_screenshot.png' });
    console.log('Screenshot saved to debug_screenshot.png');

    console.log('Double clicking to switch background...');
    // Double click the main container
    await page.mouse.dblclick(500, 500); 

    // Wait for transition
    await page.waitForTimeout(2000);

    console.log('Taking screenshot (Sticks)...');
    await page.screenshot({ path: 'debug_screenshot_sticks.png' });
    console.log('Screenshot saved to debug_screenshot_sticks.png');

  } catch (error) {
    console.error('Error taking screenshot:', error);
  }

  await browser.close();
})();
