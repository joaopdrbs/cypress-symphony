describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/'),
    cy.get(`[id="user-name"]`).type(`standard_user`)
    cy.get(`[id="password"]`).type(`secret_sauce`)
    cy.get('[name="login-button"').click()
    //cy.wait('') 
    cy.get('[class="active_option"]').contains('Name (A to Z)')
    cy.get('[class="product_sort_container"]').select(`za`)
    cy.get('[class="inventory_item_name"]').contains(`Test.allTheThings() T-Shirt (Red)`)

  })
})