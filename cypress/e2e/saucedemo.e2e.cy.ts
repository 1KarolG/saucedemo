import { Configuration } from "../support/configuration";
import { SaucedemoPage } from "../support/page-object/saucedemo-page.po";

describe('Verify saucedemo page using UI tools', () => {
    const shoppingCartItems = '1';

    before(() => {
        cy.viewport(Configuration.browserWidth, Configuration.browserHeight);
    })

    beforeEach(() => {
        cy.visit(Configuration.baseURL);
        SaucedemoPage.loginUser(Configuration.username, Configuration.password);
    })

    afterEach(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
    })

    it('Verify inventory items', () => {
        cy.get(SaucedemoPage.inventoryItem).should('have.length', Configuration.inventorySize);
    })

    it('Verify adding items to card', () => {
        SaucedemoPage.addFirstItemToCart();
        cy.get(SaucedemoPage.shoppingCartBadge).should('have.text', shoppingCartItems);
    })
})