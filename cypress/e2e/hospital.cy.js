describe('병원찾기 테스트', () => {
  const ctx = {};

  beforeEach(() => {
    cy.fixture('user-location.json').then(coords => {
      ctx.location = coords;
    });
    cy.log(ctx);
    cy.visit(`${Cypress.env('baseUrl')}/hospital`, {
      onBeforeLoad({ navigator }) {
        const latitude = 37.55998;
        const longitude = 126.9858296;
        cy.stub(navigator.geolocation, 'getCurrentPosition').callsArgWith(0, {
          coords: { latitude, longitude },
        });
      },
    });
  });

  it('리스트를 가져온다.', () => {
    cy.$('hospital-list-item').should('have.length.least', 0);
  });
});
