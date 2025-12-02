export class ApiRequestHelper {
    getRequest(url: string, token: string): Cypress.Chainable<Cypress.Response<any>> {
        return cy.request({
            method: 'GET',
            url: url,
            auth: { 'bearer': token }
        });
    }

    postRequest(url: string, payload: string, token: string): Cypress.Chainable<Cypress.Response<any>> {
        return cy.request({
            method: 'POST',
            url: url,
            body: payload,
            auth: { 'bearer': token }
        });
    }
}