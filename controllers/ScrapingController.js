const puppeteer = require("puppeteer");
require('dotenv').config();

class ScrapingController {
  static async getLyric(req, res) {
    const { musicName } = req.params;
    const linkSite = process.env.LYRICS_URL
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setRequestInterception(true);

    // DISABLE UNNECESSARY LOADS
    page.on('request', (req) => {
      if (req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image') {
        req.abort();
      }
      else {
        req.continue();
      }
    });

    await page.goto(`${linkSite}/?q=${musicName}`);
    await page.waitForSelector('.gs-title');
    await page.click('.gs-title > a');
    await page.waitForSelector('.cnt-head');
    const url = page.url();
    const lyric = await page.$(url.includes("traducao.html") ? '.cnt-trad_l' : '.cnt-letra');
    let value = await page.evaluate(el => el.innerText, lyric)
    res.status(200).json({ lyric: value });
    await browser.close();
  }
}

module.exports = ScrapingController;