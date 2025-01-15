describe('Testando elementos Checkbox', () => {
  it('testar checkbox', () => {
    cy.visit('https://demoqa.com/');

    /* === Generated with Cypress Studio === */
    cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').click();
    /* === End Cypress Studio === */

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#tree-node > ol > li > span > label > span.rct-checkbox').click();
    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#tree-node > ol > li > span > button').click();
    /* ==== End Cypress Studio ==== */
  });
});
