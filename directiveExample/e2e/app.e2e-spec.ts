import { DirectiveExamplePage } from './app.po';

describe('directive-example App', () => {
  let page: DirectiveExamplePage;

  beforeEach(() => {
    page = new DirectiveExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
