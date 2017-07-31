import { SharyuProjectPage } from './app.po';

describe('sharyu-project App', () => {
  let page: SharyuProjectPage;

  beforeEach(() => {
    page = new SharyuProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
