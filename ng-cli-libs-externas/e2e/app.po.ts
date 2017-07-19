import { browser, by, element } from 'protractor';

export class NgCliLibsExternasPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
