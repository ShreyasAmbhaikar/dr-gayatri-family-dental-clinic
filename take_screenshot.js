const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  
  // Scroll through the page to trigger all lazy-loaded images
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });

  // Wait 1.5 seconds for all images to settle
  await new Promise(r => setTimeout(r, 1500));

  const outputPath = path.join('C:', 'Users', 'Shreyas Asus Tuf', '.gemini', 'antigravity', 'brain', 'f43f5688-5e0d-4678-9c69-4ad631e5d656', 'iteration_current.png');
  await page.screenshot({ path: outputPath, fullPage: true });
  console.log('Screenshot saved to:', outputPath);
  await browser.close();
})();
