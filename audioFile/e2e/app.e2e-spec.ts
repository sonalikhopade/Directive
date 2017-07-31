import { AudioFilePage } from './app.po';

describe('audio-file App', () => {
  let page: AudioFilePage;

  beforeEach(() => {
    page = new AudioFilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
