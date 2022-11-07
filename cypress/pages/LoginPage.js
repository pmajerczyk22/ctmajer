class LoginPage{

    emptyLoginFieldMessageCheck(){
        cy.xpath(`//*[text()='Pole Login jest wymagane.']`).should('contain.text', 'Pole Login jest wymagane.')
        cy.xpath(`//*[text()='Pole Hasło jest wymagane.']`).should('contain.text', 'Pole Hasło jest wymagane.')
    } 
    
    incorrectLoginFieldMessageCheck(){
        cy.xpath(`//*[text()='Nazwa użytkownika lub hasło jest niepoprawne']`).should('contain.text', 'Nazwa użytkownika lub hasło jest niepoprawne')    
    }

    loginButton(){
        return cy.get('[value="Zaloguj"]')
    }
    
    submitLogin(username, password){
        cy.get('[id="Login"]').type(username), 
        cy.get('[id="Password"]').type(password)
        cy.get('[value="Zaloguj"]').click()
    }

}

export default new LoginPage();