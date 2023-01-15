it ('returns 200 when we hit / Register ',()=>{
    cy.request('POST', 'http://localhost:3000/api/user/register')
        .then((response) => {
            expect(response.status).to.eq(200);


    })
})