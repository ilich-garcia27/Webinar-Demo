class LoginPage {
    visit() {
        cy.visit('/');
    }

    get usernameInput() {
        return cy.get('[data-test="username"]');
    }

    get passwordInput() {
        return cy.get('[data-test="password"]');
    }

    get loginButton() {
        return cy.get('[data-test="login-button"]');
    }

    get errorMessage() {
        return cy.get('[data-test="error"]');
    }

    get productsList() {
        return cy.get('.inventory_list');
    }

    enterCredentials(username, password) {
        this.usernameInput.should('be.visible').clear().type(username);
        this.passwordInput.should('be.visible').clear().type(password);
    }
}

export default new LoginPage();