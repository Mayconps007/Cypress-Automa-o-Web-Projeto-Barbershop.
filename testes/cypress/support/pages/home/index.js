//È necessário "elHome" --> (Elementos da home )
import{elHome}from './elements'

//Crinando e exportando/instanciando classe Homepage
class Homepage {
    
    //Função de visitar e validar o primeiro acesso a URL.
    go() {
        cy.visit('/');
        cy.get(elHome.assertHome).should('have.text','Faça seu login');
    }

    //Função para preencher o formulario.
    fillLgin(){

    }
    //Função para submeter o formulario.
    submit(){

        

    }
}

export default new Homepage()