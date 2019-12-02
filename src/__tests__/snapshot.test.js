describe('Daum', () => {
  beforeAll(async () => {
    await page.goto('https://daum.com');
  });

  it('should be titled "Daum"', async () => {
    await expect(page.title()).resolves.toMatch('Daum');
  });
});