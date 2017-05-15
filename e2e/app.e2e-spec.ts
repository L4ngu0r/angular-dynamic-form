import { AngularDynamicFormPage } from './app.po';

describe('angular-dynamic-form App', () => {
  let page: AngularDynamicFormPage;

  beforeEach(() => {
    page = new AngularDynamicFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
