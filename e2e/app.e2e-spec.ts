import { XdidianUiPage } from './app.po';

describe('xdidian-ui App', function() {
  let page: XdidianUiPage;

  beforeEach(() => {
    page = new XdidianUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
