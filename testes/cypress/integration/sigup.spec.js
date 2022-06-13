//necessário importar até o caminho até a pasta do arquivo
import signup from '../support/pages/signup'
import signupFactory from "../factories/signupFactory"
import  homePage from "../support/pages/home"

describe('signup', () => {

    it('Fazer cadastro', () => {
        
        signup.go()

        let user = signupFactory.user()
        
        signup.fillForm(user)

        signup.submit()
        
        signup.toastAlert('Agora você pode fazer seu login no Samurai Barbershop!')

        
    });

/*
    it('Fazer login', () => {
        
        homePage.go()
        homePage.fillLgin()
    });
    */
});