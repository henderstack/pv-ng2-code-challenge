import { PvNg2CodeChallengePage } from './app.po';

describe('pv-ng2-code-challenge App', function() {
  let page: PvNg2CodeChallengePage;

  beforeEach(() => {
    page = new PvNg2CodeChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
