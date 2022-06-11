//necessário importar até o caminho até a pasta do arquivo
import signup from '../support/pages/signup'
import signupFactory from "../factories/signupFactory"


describe('signup', () => {

    it('Fazer cadastro', () => {
        
        signup.go()
        let user = signupFactory.user()
        
        signup.fillForm(user)
        signup.submit()
    });
    
});