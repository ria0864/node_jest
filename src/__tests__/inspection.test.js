const puppeteer = require('puppeteer');
const {
  toMatchImageSnapshot
} = require('jest-image-snapshot');
expect.extend({
  toMatchImageSnapshot
});

describe('snapshot test', () => {
  it("google main hompage", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com');
    //await page.type("input[type='text']", "test"); // 추가작성 부분!
    const png = await page.screenshot();
    expect(png).toMatchImageSnapshot();

    await browser.close();
  });

  it("tims main hompage", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://tims.tmax.co.kr/login.html');
    //await page.type("input[type='text']", "test"); // 추가작성 부분!
    const snapshot = await page.screenshot();
    expect(snapshot).toMatchImageSnapshot();

    await browser.close();
  });
});