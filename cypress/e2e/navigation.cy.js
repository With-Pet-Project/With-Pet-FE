describe('페이지 네비게이션', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('BASE_URL')}`);
    cy.fixture('user-location.json').as('userLocation');

    cy.get('@userLocation').then(fakePosition => {
      cy.stub(window.navigator.geolocation, 'getCurrentPosition')
        .as('getUserPosition')
        .callsFake(cb => {
          cb(fakePosition);
        });
    });
  });

  it('페이지간의 이동이 가능하다.', () => {
    cy.get('.side-navbar-menu').contains('다이어리').click();
    cy.location('pathname').should('eq', '/diary');
    cy.get('.side-navbar-menu').contains('가계부').click();
    cy.location('pathname').should('eq', '/account');
    cy.get('.side-navbar-menu').contains('커뮤니티').click();
    cy.location('pathname').should('eq', '/community');
    cy.get('.side-navbar-menu').contains('병원 찾기').click();
    cy.location('pathname').should('eq', '/hospital');
    cy.get('.side-navbar-menu').contains('로그인').click();
    cy.location('pathname').should('eq', '/login');
    cy.log('hello cypress!');
  });
});
