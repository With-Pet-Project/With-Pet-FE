// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('$', selector => {
  return cy.get(`[data-cy=${selector}]`);
});

Cypress.Commands.add(
  'database',
  (operation, entity, query, logTask = false) => {
    const params = {
      entity,
      query,
    };

    const log = Cypress.log({
      name: 'database',
      displayName: 'DATABASE',
      message: [`🔎 ${operation}ing within ${entity} data`],
      autoEnd: false,
      consoleProps() {
        return params;
      },
    });

    return cy
      .task(`${operation}:database`, params, { log: logTask })
      .then(data => {
        log.snapshot();
        log.end();
        return data;
      });
  },
);

Cypress.Commands.add('login', (username, password) => {
  const log = Cypress.log({
    name: 'login',
    displayName: 'LOGIN',
    message: [`🔐 Authenticating | ${username}`],
    autoEnd: false,
  });

  cy.intercept('POST', '/user/login').as('loginUser');
  log.snapshot('before');

  cy.$('login-id-input').type(username);
  cy.$('login-pwd-input').type(password);
  cy.$('login-submit').click();

  cy.wait('@loginUser').then(loginUser => {
    log.set({
      consoleProps() {
        return {
          username,
          password,
          data:
            loginUser.response.statusCode !== 401 &&
            loginUser.response.body.data,
        };
      },
    });

    log.end();
    return window.localStorage.getItem('jwt_token');
  });
});
