const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth');


puppeteer.executablePath

console.log(process.argv.slice(2)[0])

async function votar () {
  let votos = 0



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

  await page.waitForTimeout(2500)

  do {
    try {
      await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe0PbHNk7nCs7NqTAzGh81fP1C2sCpJ1X3Nj-3-IREsbP6KGw/viewform');

      await page.waitForSelector('[data-value="Opção 9"]')
      await page.click('[data-value="Opção 9"]')
      await page.waitForSelector('[role="button"]')
      await page.click('[role="button"]')
      await page.waitForSelector('.vHW8K')
      votos = votos + 1
      console.clear()
      console.log(`###################\n\n ${votos} Votos!\n\n###################`)
    } catch (error) {
      console.log(error.message)
    }
  } while (true)

}



votar()





