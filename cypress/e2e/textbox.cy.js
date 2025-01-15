describe('Testando elementos Textbox', () => {
  it('testar textbox', () => {
    cy.visit('https://demoqa.com/');

    // clicar na modal que gostaria de acessar
    // Mapeamento de elementos em hierarquia

    /* === Generated with Cypress Studio === */
    cy.get(':nth-child(1) > :nth-child(1) > .avatar').click();
    /* === End Cypress Studio === */

    // No navegador, clique no Fn + 12 (inspecionar).
    // Depois vai em Styles cole essa linha (":nth-child(1) > :nth-child(1) > .avatar") no Filter e dá um Enter
    // Dessa maneira, o Chrome acha o local aonde o Cypress Studio mapeou.

    /* === Generated with Cypress Studio - Text box === */
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
    cy.get('#userName').clear('T');
    cy.get('#userName').type('Tatiana Honda');
    cy.get('#userEmail').clear('te');
    cy.get('#userEmail').type('teste@teste.com');
    cy.get('#submit').click();
    /* === End Cypress Studio === */
  });
});
