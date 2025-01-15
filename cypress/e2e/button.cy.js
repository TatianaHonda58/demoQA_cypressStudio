describe('Testando elementos Button', () => {
  it('testar botão', () => {
    cy.visit('https://demoqa.com/');

    /* === Generated with Cypress Studio === */
    cy.get(':nth-child(1) > :nth-child(1) > .avatar').click();
    /* === End Cypress Studio === */

    /* ==== Generated with Cypress Studio - Button ==== */
    cy.get(
      ':nth-child(1) > .element-list > .menu-list > #item-4 > .text'
    ).click();
    cy.get('#doubleClickBtn').click();
    cy.get('#doubleClickBtn').click();
    /* ==== End Cypress Studio ==== */

    // Validação do double click, porém o Studio só identifica dois cliques separados
    // O Cypress Studio só vai utilizar o CSS Selector
    // Observação: O Cypress Studio dá opção de adicionar asserções de texto, id, class, visível e habilitado
  });
});
