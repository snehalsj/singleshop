import { SingleshopPage } from './app.po';

describe('singleshop App', function() {
  let page: SingleshopPage;

  beforeEach(() => {
    page = new SingleshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
