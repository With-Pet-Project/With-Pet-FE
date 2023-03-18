// /// <reference types="Cypress"/>

// const url = `${Cypress.env('apiUrl')}/pet`;

// const updateAccount = {};
// const addAccount = petId => {
//   return {
//     feed: 1000,
//     toy: 2000,
//     hospital: 3000,
//     beauty: 4000,
//     etc: 5000,
//     day: 15,
//     month: 3,
//     year: 2023,
//     week: 1,
//   };
// };

// describe('가계부 API', () => {
//   const ctx = {};

//   beforeEach(() => {
//     cy.task('db:seed');

//     // jwt token 가져오기
//     cy.database('filter', 'users').then(users => {
//       ctx.users = users;
//       cy.visit(`${Cypress.env('baseUrl')}/login`);

//       cy.login(ctx.users[0].id, ctx.users[0].password).then(jwt => {
//         ctx.jwt = jwt;

//         cy.request({
//           method: 'GET',
//           url,
//           headers: {
//             Authorization: `Bearer ${ctx.jwt}`,
//           },
//         }).then(response => {
//           expect(response.status).to.eq(200);
//           ctx.pets = response.body.data;
//         });
//       });
//     });
//   });

//   context('GET /pet/consumption?year=${year}&month=${month}', function () {
//     it('유저의 가게부 데이터를 가져온다.', function () {
//       cy.request({
//         method: 'GET',
//         url: `${url}/consumption?year=2023&month=03`,
//         headers: {
//           Authorization: `Bearer ${ctx.jwt}`,
//         },
//       }).then(response => {
//         expect(response.status).to.eq(200);
//         ctx.accounts = response.body.data;
//       });
//     });
//   });

//   context('POST /pet/${petId}/consumption', function () {
//     it('가계부를 추가한다.', function () {
//       const petId = ctx.pets[1].id;

//       cy.request({
//         method: 'POST',
//         url: `${url}/${petId}/consumption`,
//         body: addAccount(petId),
//         headers: {
//           Authorization: `Bearer ${ctx.jwt}`,
//         },
//       }).then(response => {
//         expect(response.status).to.eq(200);
//       });
//     });
//   });

//   context('PUT /pet/${petId}/consumption/${accountId}', function () {
//     it('가계부 데이터를 수정한다.', function () {
//       const petId = ctx.pets[1].id;
//       const accountId = ctx.accounts[0].id;
//       cy.log(ctx);
//       cy.request({
//         method: 'PUT',
//         url: `${url}/${petId}/consumption/${accountId}`,
//         body: addAccount(petId),
//         headers: {
//           Authorization: `Bearer ${ctx.jwt}`,
//         },
//       }).then(response => {
//         expect(response.status).to.eq(200);
//       });
//     });
//   });

//   context('DELETE /pet/${petId}/consumption/${accountid}', function () {
//     it('가계부 데이터를 삭제한다.', function () {
//       const petId = ctx.pets[1].id;
//       const accountId = ctx.accounts[0].id;
//       cy.request({
//         method: 'DELETE',
//         url: `${url}/${petId}/consumption/${accountId}`,
//         body: addAccount(petId),
//         headers: {
//           Authorization: `Bearer ${ctx.jwt}`,
//         },
//       }).then(response => {
//         expect(response.status).to.eq(200);
//       });
//     });
//   });
// });
