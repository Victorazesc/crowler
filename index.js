// const puppeteer = require('puppeteer');

const chromium = require('chrome-aws-lambda');

const sleep = async (time) => new Promise((resolve) => setTimeout(resolve, time))


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
        // this executes in the page
        await document.querySelector(btnSelector).click();
      }, 'div[jsname="ksKsZd"]');

      await page.waitForSelector('.vHW8K')
      // await page.screenshot({ path: `prints/example${votos}.png` });
      await browser.close();
      votos = votos + 1
      console.log(votos)
    } catch (error) {
      console.log(error.message)
      await sleep(100)
    }

  } while (true)
};



votar()





