import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1366,
    height: 768,
    deviceScaleFactor: 1
  });
  await page.goto('https://123job.vn/');
  await page.waitForSelector('.after-right');
  await page.click('.after-right');
  await page.waitForSelector('input[name=email]');
  await page.waitForSelector('input[name=password]');
  await page.$eval('input[name=email]', el => el.value = 'l19htm4n@gmail.com');
  await page.waitForTimeout(1000);
  await page.$eval('input[name=password]', el => el.value = 'huongmk1234');
  await page.waitForTimeout(1000);
  await page.click('.btn.btn-primary.btn-block.js-iframe-login');
  await page.waitForTimeout(5000);

  const name = await page.evaluate(() => {
    const dom = document.querySelector('.content__user-name');
    return dom.textContent;
  });
  console.log('name: ' + name);

  await browser.close();
})();

