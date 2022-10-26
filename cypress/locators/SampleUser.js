class SampleUser {
    login(a,b){
        cy.get('[id="Login"]').type(a), 
        cy.get('[id="Password"]').type(b)
        cy.get('[value="Zaloguj"]').click()
    }

}
export default new SampleUser();