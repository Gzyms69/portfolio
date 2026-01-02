import { chromium } from 'playwright';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const url = 'http://localhost:8081/portfolio/#/';

  try {
    console.log(`Navigating to ${url} ...`);
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait for loader and animations
    await page.waitForTimeout(5000);
    
    console.log('Taking screenshot (ASCII)...');
    await page.screenshot({ path: 'verify_ascii.png' });

    console.log('Double clicking to switch to Sticks...');
    await page.mouse.dblclick(500, 500); 

    // Wait for transition
    await page.waitForTimeout(2000);

    console.log('Taking screenshot (Sticks)...');
    await page.screenshot({ path: 'verify_sticks.png' });

    console.log('Screenshots saved: verify_ascii.png, verify_sticks.png');
  } catch (error) {
    console.error('Error during capture:', error);
  }

  await browser.close();
})();
