import puppeteer from 'puppeteer'

describe('show/hide an event details', () => {

  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');


  });

  afterAll(() => {
    browser.close();
  });

  test('an event element is collapsed by default', async () => {
    const extra = await page.$('.event .extra');
    expect(extra).toBeNull();
    jest.setTimeout(6000);
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');

    const extra = await page.$('.event .extra');
    expect(extra).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');

    const extra = await page.$('.event .extra');
    expect(extra).toBeNull();
  });
})

describe('filter events by city', () => {

  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');


  });

  afterAll(() => {
    browser.close();
  });

  test('show upcoming events based on the users location', async () => {
    const extra = await page.$('.event');
    expect(extra).toBeDefined();
  });

  test('by default suggestions are not shown', async () => {
    const extra = await page.$('.suggestions li');
    expect(extra).toBeNull();
  });

  test('user can slect a city from the suggested list', async () => {
    const extra = await page.$('.suggestions');
    await page.type('.city', 'Chicago')

    expect(extra).toBeDefined();
  });

})



