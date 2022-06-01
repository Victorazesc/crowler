const puppeteer = require('puppeteer');

// const sleep = async (time) => new Promise((resolve) => setTimeout(resolve, time))


(async () => {

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe0PbHNk7nCs7NqTAzGh81fP1C2sCpJ1X3Nj-3-IREsbP6KGw/viewform');

  await page.click('[data-value="Opção 9"]')
  await page.click('[role="button"]')

  await page.evaluate(async (btnSelector) => {
    // this executes in the page
    await document.querySelector(btnSelector).click();
  }, 'div[jsname="ksKsZd"]');

  await page.waitForSelector('.vHW8K')

  await page.screenshot({ path: `examplttte.png` });
  // await browser.close();

})();






