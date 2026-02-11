import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const variants = ['support', 'developer', 'office'];
const languages = ['en', 'pl'];
const baseUrl = 'http://localhost:8080/portfolio/#/resume';

(async () => {
  console.log('🚀 Starting Resume PDF Generation...');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Create directory if not exists
  const outputDir = path.join(__dirname, '../public/resumes');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const lang of languages) {
    for (const v of variants) {
      const url = `${baseUrl}?v=${v}&lang=${lang}`;
      console.log(`📄 Generating: ${v} [${lang}] from ${url}`);
      
      try {
        await page.goto(url, { waitUntil: 'networkidle' });
        // Give Framer Motion and fonts some time to settle
        await page.waitForTimeout(2000);
        
        const fileName = `resume-${v}-${lang}.pdf`;
        const filePath = path.join(outputDir, fileName);
        
        await page.pdf({
          path: filePath,
          format: 'A4',
          printBackground: true,
          margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' }
        });
        
        console.log(`✅ Saved to public/resumes/${fileName}`);
      } catch (err) {
        console.error(`❌ Failed to generate ${v}-${lang}:`, err.message);
      }
    }
  }

  await browser.close();
  console.log('✨ All resumes generated successfully!');
})();
