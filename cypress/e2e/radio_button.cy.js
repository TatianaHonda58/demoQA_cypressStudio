describe('Testando elementos Radio Button', () => {
  it('testar radio button', () => {
    cy.visit('https://demoqa.com/');

    /* === Generated with Cypress Studio === */
    cy.get(':nth-child(1) > :nth-child(1) > .avatar').click();
    /* === End Cypress Studio === */

    /* === Generated with Cypress Studio - Radio button === */
    cy.get(
      ':nth-child(1) > .element-list > .menu-list > #item-2 > .text'
    ).click();
    cy.get(':nth-child(2) > .custom-control-label').click();
    cy.get('#yesRadio').check();
    cy.get(':nth-child(3) > .custom-control-label').click();
    // cy.get('#impressiveRadio').check();
    /* === End Cypress Studio === */
  });
});
