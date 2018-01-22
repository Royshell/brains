import { BrainsPage } from './app.po';

describe('brains App', () => {
  let page: BrainsPage;

  beforeEach(() => {
    page = new BrainsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
