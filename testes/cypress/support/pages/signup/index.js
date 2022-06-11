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
        cy.get('[placeholder="E-mail"]').type(user.email);
        cy.get('[placeholder="Senha"]').type(user.password);



    }
    //[class="sc-AxirZ bJCmFu"]

    //Função para submeter o formulario.
    submit() {
        cy.get('[class="sc-AxgMl bWbWap"]').click()
        //cy.get(elSignup.validaMenssagemCadastro).should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!');


    }
}

export default new signupPage()