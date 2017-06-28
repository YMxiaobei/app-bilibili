import { AppBilibiliPage } from './app.po';

describe('app-bilibili App', function() {
  let page: AppBilibiliPage;

  beforeEach(() => {
    page = new AppBilibiliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
