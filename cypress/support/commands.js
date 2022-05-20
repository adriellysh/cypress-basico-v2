Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Adriélly')
    cy.get('#lastName').type('Souza')
    cy.get('#email').type('adrielly@exemplo.com.br')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})