const puppeteer = require("puppeteer");
require('dotenv').config();

class ScrapingController {
  static async getLyric(req, res) {
    try {
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

      page.goto(`${linkSite}/?q=${musicName}`);
      await page.waitForSelector('.gs-title');
      await page.click('.gs-title > a');
      const url = page.url();
      const lyric = await page.$(url.includes("traducao.html") ? '.cnt-trad_l' : '.cnt-letra');
      let value = await page.evaluate(el => el.innerText, lyric);
      await new Promise(resolve => setTimeout(resolve, 3000));
      await browser.close();
      return res.status(200).json({ lyric: value });
    } catch (error) {
      return res.status(400).json({ error: "Error, try again." });
    }
  }
}

module.exports = ScrapingController;