import { NgCliLibsExternasPage } from './app.po';

describe('ng-cli-libs-externas App', () => {
  let page: NgCliLibsExternasPage;

  beforeEach(() => {
    page = new NgCliLibsExternasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
