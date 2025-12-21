const { chromium } = require('playwright');

const projects = [
  { name: 'bookshop', url: 'https://github.com/Gzyms69/bookshop-library' },
  { name: 'polyglot', url: 'https://github.com/Gzyms69/rust-polyglot' },
  { name: 'portfolio', url: 'https://github.com/Gzyms69/portfolio' }
];

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 1000 },
    deviceScaleFactor: 2, 
  });

  for (const project of projects) {
    console.log(`Navigating to ${project.name}...`);
    const page = await context.newPage();
    try {
      await page.goto(project.url, { waitUntil: 'networkidle' });
      
      const readme = page.locator('#readme');
      if (await readme.count() > 0) {
        console.log(`Capturing README section for ${project.name}...`);
        await readme.scrollIntoViewIfNeeded();
        // Capture the element itself for perfect focus
        await readme.screenshot({ path: `public/${project.name}.png` });
      } else {
        console.log(`README not found for ${project.name}, taking full page...`);
        await page.screenshot({ path: `public/${project.name}.png` });
      }
      console.log(`✅ Saved public/${project.name}.png`);
    } catch (err) {
      console.error(`❌ Failed ${project.name}:`, err.message);
    }
    await page.close();
  }

  await browser.close();
  console.log('Done!');
})();
