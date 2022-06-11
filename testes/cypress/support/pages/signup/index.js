//È necessário "elHome" --> (Elementos da home )
import { elSignup } from './elements'


//Crinando e exportando/instanciando classe Homepage
class signupPage {

    //Função de visitar e validar o primeiro acesso a URL.
    go() {
        cy.visit('/signup');
        cy.get('#root h1');
        cy.get(elSignup.assertSignupPage).should('have.text', 'Faça seu cadastro');
    }


    //Função para preencher o formulario.
    fillForm(user) {
        cy.get('input[placeholder="Nome"]').type(user.name);
        cy.get('input[placeholder="Nome"]').type(user.email);
        cy.get('input[placeholder="Nome"]').type(user.password);
    }


    //Função para submeter o formulario.
    submit() {
        cy.get('submit').click()


    }
}

export default new signupPage()