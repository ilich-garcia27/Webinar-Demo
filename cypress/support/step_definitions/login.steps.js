import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../page_objects/LoginPage';
import ProductsPage from '../../page_objects/ProductsPage';

Given('I open the login page', () => {
  LoginPage.visit();
});

When('I enter username {string} and password {string}', (username, password) => {
  LoginPage.enterCredentials(username, password);
});

When('I click the login button', () => {
  LoginPage.loginButton.should('be.visible').click();
});

Then('I should see the products page', () => {
  cy.url().should('include', '/inventory.html');
  ProductsPage.productsList.should('exist');
  ProductsPage.hamburgerMenu.should('be.visible').click();
  ProductsPage.logoutButton.should('be.visible').click();
});

Then('I should see an error message indicating {string}', (errorMessage) => {
  LoginPage.errorMessage.should('contain.text', errorMessage);
});