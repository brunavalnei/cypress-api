describe('POST /users', () => {


    it('registrar novo usuário', () => {

        cy.postUser()
            .then(response => {
                expect(response.status).to.eq(201);
                const idUser = response.body.id
                cy.api({
                    url: `/users/${idUser}`,
                    method: 'DELETE',
                    failOnStatusCode: false
                }).then(response => {
                    expect(response.status).to.eq(204);
                })
            })
    })


    it('registrar novo usuário apenas com o campo nome', () => {

        const name = {
            name: 'Bruna Valnei'
        }

        cy.api({
            url: '/users',
            method: 'POST',
            body: name,
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.eq(201);
            const idUser = response.body.id
            cy.api({
                url: `/users/${idUser}`,
                method: 'DELETE',
                failOnStatusCode: false
            }).then(response => {
                expect(response.status).to.eq(204);
            })
        })
    })

    it('registrar novo usuário apenas com o campo job', () => {

        const job = {
            job: 'QA'
        }

        cy.api({
            url: '/users',
            method: 'POST',
            body: job,
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.eq(201);
            const idUser = response.body.id
            cy.api({
                url: `/users/${idUser}`,
                method: 'DELETE',
                failOnStatusCode: false
            }).then(response => {
                expect(response.status).to.eq(204);
            })
        })
    })

})

