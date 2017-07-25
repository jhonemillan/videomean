import { AppViewPage } from './app.po';

describe('app-view App', () => {
  let page: AppViewPage;

  beforeEach(() => {
    page = new AppViewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
