const puppeteer = require("puppeteer");
require('dotenv').config();

class ScrapingController {
  static async getLyric(req, res) {
    const { musicName } = req.params;
    const linkSite = process.env.LYRICS_URL
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(`${linkSite}/?q=${musicName}`);
    await page.waitForSelector('.gs-title');
    await page.click('.gs-title > a');
    await page.waitForSelector('.cnt-head');
    const url = page.url();
    if (url.includes("traducao.html")) {
      const baseUrl = url.replace("/traducao.html", "");
      await page.goto(baseUrl);
    }
    const lyric = await page.$('.cnt-letra');
    let value = await page.evaluate(el => el.innerText, lyric)
    res.status(200).json({ lyric: value });
    await browser.close();
  }
}

module.exports = ScrapingController;