import { TestServicePage } from './app.po';

describe('test-service App', () => {
  let page: TestServicePage;

  beforeEach(() => {
    page = new TestServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
