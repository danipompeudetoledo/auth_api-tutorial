it ('returns 200 when we hit / Register ',()=>{
    let body = {
        name:'TestName',
        email: 'foo@bar.com',
        password:'Test0987'

    }
    cy.request('POST', 'http://localhost:3000/api/user/register', body)
        .then((response) => {
            expect(response.status).to.eq(200);


    })
})

it ('returns 400 when we hit / Register  with no body ',()=>{

    cy.request({

        method:'POST',
        url: 'http://localhost:3000/api/user/register',
        failOnStatusCode:false
    }).then((response) => {
            expect(response.status).to.eq(400);


    })
})