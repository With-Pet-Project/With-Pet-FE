// const userString = window.localStorage.getItem('user')
/// <reference types="Cypress"/>

const apiAccounts = `${Cypress.env(
  'apiUrl',
)}/pet/consumption?year=2023&month=03`;
const apiPet = `${Cypress.env('apiUrl')}/pet`;

const updateAccount = {};
const addAccount = petId => {
  return {
    feed: 1000,
    toy: 2000,
    hospital: 3000,
    beauty: 4000,
    etc: 5000,
    day: 15,
    month: 3,
    year: 2023,
    week: 1,
  };
};

describe('가계부 API', () => {
  const ctx = {};

  beforeEach(() => {
    cy.task('db:seed');

    // jwt token 가져오기
    cy.database('filter', 'users').then(users => {
      ctx.users = users;
      cy.visit(`${Cypress.env('baseUrl')}/login`);

      cy.login(ctx.users[0].id, ctx.users[0].password).then(jwt => {
        ctx.jwt = jwt;

        cy.request({
          method: 'GET',
          url: apiPet,
          headers: {
            Authorization: `Bearer ${ctx.jwt}`,
          },
        }).then(response => {
          expect(response.status).to.eq(200);
          ctx.pets = response.body.data;
        });
      });
    });

    // 펫 목록 가져오기 (추가할때 필요)
  });

  context('GET /pet/consumption?year=${year}&month=${month}', function () {
    it('유저의 가게부 데이터를 가져온다.', function () {
      cy.request({
        method: 'GET',
        url: apiAccounts,
        headers: {
          Authorization: `Bearer ${ctx.jwt}`,
        },
      }).then(response => {
        expect(response.status).to.eq(200);
      });
    });
  });

  context('POST /pet/${petId}/consumption', function () {
    it('가계부를 추가한다.', function () {
      const petId = ctx.pets[0].id;

      cy.request({
        method: 'POST',
        url: `/pet/${petId}/consumption`,
        body: addAccount(petId),
        headers: {
          Authorization: `Bearer ${ctx.jwt}`,
        },
      }).then(response => {
        expect(response.status).to.eq(200);
        // expect(response.body.account.id).to.be.a('string');
        // expect(response.body.account.userId).to.eq(userId);
      });
    });
  });
});
