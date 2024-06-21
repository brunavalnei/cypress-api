Cypress.Commands.add('postUser', () => {

    const user = {
        name: 'Bruna Valnei',
        job: 'QA'
    }

    cy.api({
        url: '/users',
        method: 'POST',
        body: user,
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})