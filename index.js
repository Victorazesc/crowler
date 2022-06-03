const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth');


puppeteer.executablePath

console.log(process.argv.slice(2)[0])

async function votar () {
  let votos = 0


  try {
    puppeteer.use(StealthPlugin())
    const browser = await puppeteer.launch({ headless: process.argv.slice(2)[0] ? false : true })
    const page = await browser.newPage();

    console.log('logando no google...')

    await page.goto('https://accounts.google.com/signin/v2/identifier');

    await page.waitForSelector('[type="email"]')
    await page.type('[type="email"]', 'crowlerazevedo@gmail.com')
    await page.click('#identifierNext')
    await page.waitForTimeout(1500)
    await page.type('[type="password"]', 'corte99100wc')
    await page.click('#passwordNext')

    await page.waitForTimeout(1500)
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe0PbHNk7nCs7NqTAzGh81fP1C2sCpJ1X3Nj-3-IREsbP6KGw/viewform');

    await page.waitForSelector('[data-value="Opção 9"]')
    await page.click('[data-value="Opção 9"]')
    await page.waitForSelector('[role="button"]')
    await page.click('[role="button"]')

    votos = votos + 1
    console.log(`###################\n\n ${votos} Votos!\n\n###################`)

    while (true) {
      try {
        await page.waitForSelector('[class="c2gzEf"]')
        await page.click('a')
        await page.waitForSelector('[data-value="Opção 9"]')
        await page.click('[data-value="Opção 9"]')
        await page.waitForSelector('[role="button"]')
        await page.click('[role="button"]')

        await page.evaluate(async (btnSelector) => {
          await document.querySelector(btnSelector).click();
        }, 'div[jsname="ksKsZd"]');

        votos = votos + 1
        console.clear()
        console.log(`###################\n\n ${votos} Votos!\n\n###################`)



      } catch (error) {
        console.log(error.message)
      }

    }
    // await browser.close();

  } catch (error) {
    console.log(error.message)
  }

};


votar()





