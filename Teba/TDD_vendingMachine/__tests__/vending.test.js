const { maquinaExpendedora } = require('../vending')
const { seedClients } = require('../fixtures/clients')
const { seedProducts } = require('../fixtures/products')

let productos, clientes = [];
let vendingMachine = {};


beforeEach(() => {
    productos = seedProducts();
    clientes = seedClients();
    vendingMachine = maquinaExpendedora(clientes, productos);
})

describe('methods for managing clients and their needs', () => {
    // Add client
    test('must create new client', () => {
        expect(clientes.length).toBe(2)
        vendingMachine.addClient({
            nombre: "Teba Gomez",
            usuario: "teba",
            contraseña: "pass2",
            tipo: "usuario",
            presupuesto: "100",
            gasto: []})
        expect(clientes.length).toBe(3)
      })
    // Remove client
    test.todo('must remove specific client'), () => {
        expect(clientes.length).toBe(3)
        vendingMachine.removeClient({
            usuario: "teba"
        })
        expect(clientes[usuario]).toBe("teba")
        expect(clientes.length).toBe(2)
    }
    
})




/*
### Paso 3 - Creamos varios métodos para gestionar a los clientes y sus necesidades
Metodos:
- Agregar un cliente √
- Eliminar un cliente √
- Consultar saldo de un cliente
    - Comprobaremos la contraseña y el usuario
    - Devolverá el saldo existente o -1 en caso de error
- Consultar gastos de un cliente
    - Comprobaremos la contraseña y el usuario
    - Devolverá un array o false en caso de error


Caracteristicas:
- Evitaremos que se registren usuarios que ya existan
- Evitaremos eliminar usuarios que no existan
- Evitaremos dar de alta usuarios que no esten debidamente cumplimentados
- Protegeremos las funciones de gestión de usuarios con la contraseña ficticiaMola
*/


