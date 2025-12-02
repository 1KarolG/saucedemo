import { Configuration } from "../support/configuration";
import { SaucedemoPage } from "../support/page-object/saucedemo-page.po";

describe('Verify saucedemo page using UI tools', () => {
    const shoppingCartItems = '1';

    before(() => {
        cy.viewport(Configuration.browserWidth, Configuration.browserHeight);
    })

    beforeEach(() => {
        cy.visit(Configuration.baseURL);
        cy.get(SaucedemoPage.usernameInput).type(Configuration.username);
        cy.get(SaucedemoPage.passwordInput).type(Configuration.password);
        cy.get(SaucedemoPage.loginButton).click();
    })

    afterEach(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
    })

    it('Verify inventory items', () => {
        cy.get(SaucedemoPage.inventoryItem).should('have.length', Configuration.inventorySize);
    })

    it('Verify adding items to card', () => {
        cy.contains('button', 'Add to cart').first().click();
        cy.get(SaucedemoPage.shoppingCartBadge).should('have.text', shoppingCartItems);
    })
})