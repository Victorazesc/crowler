const chromium = require('chrome-aws-lambda');

async function votar () {
  let votos = 0

  do {
    try {
      const browser = await chromium.puppeteer.launch({
        args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
      })
      const page = await browser.newPage();
      await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe0PbHNk7nCs7NqTAzGh81fP1C2sCpJ1X3Nj-3-IREsbP6KGw/viewform');
      await page.waitForSelector('[data-value="Opção 9"]')
      await page.click('[data-value="Opção 9"]')
      await page.waitForSelector('[role="button"]')
      await page.click('[role="button"]')

      await page.evaluate(async (btnSelector) => {
        await document.querySelector(btnSelector).click();
      }, 'div[jsname="ksKsZd"]');

      await page.waitForSelector('.vHW8K')
      await browser.close();
      votos = votos + 1
      console.log(votos)
    } catch (error) {
      console.log(error.message)
    }

  } while (true)
};


votar()
