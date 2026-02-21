import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const variants = ['support', 'developer', 'office', 'it-specialist'];
const languages = ['en', 'pl'];
// Use a unique port to avoid conflicts with development sessions
const PORT = 9090;
const baseUrl = `http://localhost:${PORT}/portfolio/#/resume`;

const waitForServer = async (url) => {
  console.log(`⏳ Waiting for server at ${url}...`);
  for (let i = 0; i < 30; i++) { // 30 attempts
    try {
      const response = await fetch(url.replace('/portfolio/#/resume', '/')); // Check root
      if (response.ok) return true;
    } catch (e) {}
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  return false;
};

(async () => {
  console.log('🚀 Starting Resume PDF Generation Pipeline...');

  // 1. Start a dedicated Vite server for generation
  console.log(`🔌 Spawning dedicated Vite server on port ${PORT}...`);
  const viteProcess = spawn('npx', ['vite', '--port', PORT.toString()], {
    stdio: 'ignore', // Suppress output to keep console clean
    shell: true,
    cwd: path.join(__dirname, '..') // Run in project root
  });

  try {
    // 2. Wait for server to be ready
    const serverReady = await waitForServer(`http://localhost:${PORT}`);
    if (!serverReady) {
      throw new Error('Server failed to start within timeout');
    }
    console.log('✅ Server is ready!');

    // 3. Launch Browser
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
        console.log(`📄 Generating: ${v} [${lang}]...`);
        
        try {
          await page.goto(url, { waitUntil: 'networkidle' });
          // Ensure fonts and animations are settled
          await page.waitForTimeout(3000);
          
          const fileName = `Dawid Czerwiński resume-${v}-${lang}.pdf`;
          const filePath = path.join(outputDir, fileName);
          
          await page.pdf({
            path: filePath,
            format: 'A4',
            printBackground: true,
            margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' }
          });
          
          console.log(`   └─ Saved: public/resumes/${fileName}`);
        } catch (err) {
          console.error(`❌ Failed to generate ${v}-${lang}:`, err.message);
        }
      }
    }

    await browser.close();
    console.log('✨ All resumes generated successfully!');

  } catch (err) {
    console.error('🔥 Critical Failure:', err);
  } finally {
    // 4. Cleanup: Kill the server
    if (viteProcess) {
      console.log('🧹 Cleaning up server process...');
      viteProcess.kill();
    }
    process.exit(0);
  }
})();
