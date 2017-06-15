import { StudentPortalFrontendPage } from './app.po';

describe('student-portal-frontend App', function() {
  let page: StudentPortalFrontendPage;

  beforeEach(() => {
    page = new StudentPortalFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
