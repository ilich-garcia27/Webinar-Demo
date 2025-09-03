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
}

export default new ProductsPage();