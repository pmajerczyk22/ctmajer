class selectPage {
    loginButton(){
        return cy.get('[value="Zaloguj"]')
    }

    emptyLoginFieldMessageCheck(){
    cy.xpath(`//*[text()='Pole Login jest wymagane.']`).should('contain.text', 'Pole Login jest wymagane.')
    cy.xpath(`//*[text()='Pole Hasło jest wymagane.']`).should('contain.text', 'Pole Hasło jest wymagane.')
    }

    incorrectLoginFieldMessageCheck(){
    cy.xpath(`//*[text()='Nazwa użytkownika lub hasło jest niepoprawne']`).should('contain.text', 'Nazwa użytkownika lub hasło jest niepoprawne')    
    }


}

export default new selectPage();