let page;

// ========== ТЕСТЫ ДЛЯ ГЛАВНОЙ СТРАНИЦЫ (team) ==========
describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  afterEach(() => {
    page.close();
  });

  test("Page should load and have correct title", async () => {
    const title = await page.title();
    expect(title).toContain('GitHub');
  }, 30000);

  test("First link should have correct attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  }, 5000);
});

// ========== ТЕСТЫ ДЛЯ СТРАНИЦЫ FEATURES ==========
describe("Github features page tests", () => {
  let page;

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/features");
  });

  afterEach(async () => {
    await page.close();
  });

  test("Features page should load", async () => {
    const title = await page.title();
    expect(title).toContain('GitHub');
  }, 10000);
});

// ========== ТЕСТЫ ДЛЯ СТРАНИЦЫ PRICING ==========
describe("Github pricing page tests", () => {
  let page;

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/pricing");
  });

  afterEach(async () => {
    await page.close();
  });

  test("Pricing page should load", async () => {
    const title = await page.title();
    expect(title).toContain('Pricing');
  }, 10000);
});

// ========== ТЕСТЫ ДЛЯ СТРАНИЦЫ ENTERPRISE ==========
describe("Github enterprise page tests", () => {
  let page;

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/enterprise");
  });

  afterEach(async () => {
    await page.close();
  });

  test("Enterprise page should load", async () => {
    const title = await page.title();
    expect(title).toContain('Enterprise');
  }, 10000);
});