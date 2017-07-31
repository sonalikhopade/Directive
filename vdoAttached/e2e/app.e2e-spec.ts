import { VdoAttachedPage } from './app.po';

describe('vdo-attached App', () => {
  let page: VdoAttachedPage;

  beforeEach(() => {
    page = new VdoAttachedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
