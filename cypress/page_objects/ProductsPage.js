class ProductsPage {
  visit() {
    cy.visit('/inventory.html');
  }

  get productsList() {
    return cy.get('.inventory_list');
  }

  get hamburgerMenu() {
    return cy.get('#react-burger-menu-btn');
  }

  get logoutButton() {
    return cy.get('#logout_sidebar_link');
  }

  get addToCartSauceLabsBackpack() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }
}

export default new ProductsPage();