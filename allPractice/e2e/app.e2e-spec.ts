import { AllPracticePage } from './app.po';

describe('all-practice App', () => {
  let page: AllPracticePage;

  beforeEach(() => {
    page = new AllPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
