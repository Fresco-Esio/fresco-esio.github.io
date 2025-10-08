const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport size
  await page.setViewportSize({ width: 1280, height: 900 });
  
  // Navigate to the local dev server
  await page.goto('http://localhost:3003', { waitUntil: 'networkidle' });
  
  // Wait for SVG to be visible
  await page.waitForSelector('svg.fiore-graphic', { state: 'visible', timeout: 10000 });
  
  // Wait for animations to settle
  await page.waitForTimeout(8000);
  
  // Take screenshot
  await page.screenshot({ path: 'fiore-screenshot.png', fullPage: false });
  
  console.log('✓ Screenshot saved as fiore-screenshot.png');
  
  await browser.close();
})();
