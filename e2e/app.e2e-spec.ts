import { FamilyBudgetPage } from './app.po';

describe('family-budget App', () => {
  let page: FamilyBudgetPage;

  beforeEach(() => {
    page = new FamilyBudgetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
