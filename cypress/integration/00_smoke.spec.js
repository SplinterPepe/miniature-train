context('Smoke (Build verification).', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit('/');
  });

  afterEach(() => {
    cy.clearCookies();
  });

  it('Opens page for testing through header in main page.', () => {
    cy.visit('/');
  });
});
