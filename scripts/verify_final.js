import { chromium } from 'playwright';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Port 8081 based on previous output
  const url = 'http://localhost:8081/portfolio/#/';

  try {
    console.log(`Navigating to ${url} ...`);
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait for the terminal loader to complete
    await page.waitForTimeout(6000);
    
    console.log('Taking screenshot (ASCII)...');
    await page.screenshot({ path: 'verify_ascii_final.png' });

    console.log('Double clicking to switch to Sticks...');
    // Double click the background area (center-ish)
    await page.mouse.dblclick(400, 400); 

    // Wait for TV flash transition to settle
    await page.waitForTimeout(3000);

    console.log('Taking screenshot (Sticks)...');
    await page.screenshot({ path: 'verify_sticks_final.png' });

    console.log('Screenshots saved: verify_ascii_final.png, verify_sticks_final.png');
  } catch (error) {
    console.error('Error during capture:', error);
  }

  await browser.close();
})();
