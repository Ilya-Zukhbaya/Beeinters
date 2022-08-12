describe('first block of tests', () => {
  it('search results', async () => {
    await browser.url('http://localhost:3000/');
    title = await browser.getTitle();
    expect(title).toEqual('Beeinters');
  });
});
