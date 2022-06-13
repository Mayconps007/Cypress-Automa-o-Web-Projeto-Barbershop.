
//criando massa de dados dinamica
let faker = require('faker')

export default {

    user: function () {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName()

        //Instanciando e retornando a variavel
        let data = {
            name: `${firstName} ${lastName}`,
            email: faker.internet.email(firstName),
            password: '1238548'
        }
        return data

    }

}