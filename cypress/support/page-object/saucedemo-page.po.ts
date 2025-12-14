export class SaucedemoPage {
    static readonly usernameInput = '#user-name';
    static readonly passwordInput = '#password';
    static readonly loginButton = '#login-button';
    static readonly inventoryItem = '.inventory_item';
    static readonly shoppingCartBadge = '.shopping_cart_badge';

    static loginUser(username: string, password: string): void {
        cy.get(SaucedemoPage.usernameInput).type(username);
        cy.get(SaucedemoPage.passwordInput).type(password);
        cy.get(SaucedemoPage.loginButton).click();
    }

    static addFirstItemToCart() {
        cy.contains('button', 'Add to cart').first().click();
    }
}