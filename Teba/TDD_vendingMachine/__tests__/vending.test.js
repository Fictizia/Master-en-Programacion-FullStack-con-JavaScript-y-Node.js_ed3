const { maquinaExpendedora } = require('../vending')
const { seedClients } = require('../fixtures/clients')
const { seedProducts } = require('../fixtures/products')
const config = require('../fixtures/config')

let productos, clientes = [];
let vendingMachine = {};


beforeEach(() => {
    productos = seedProducts();
    clientes = seedClients();
    vendingMachine = maquinaExpendedora(config, clientes, productos);
})

describe('methods for managing clients and their needs', () => {
    // Get all clients
    test('must bring all the clients', () => {
        expect(vendingMachine.getAllClients()).toBe(clientes)
    })
    // Test isClient
    test('must confirm existing clients', () => {
        expect(vendingMachine.isClient("Inventado")).toBeFalsy()
        expect(vendingMachine.isClient(clientes[0].usuario)).toBeTruthy()
    })
    // Add client
    test('must create new client', () => {
        expect(vendingMachine.getAllClients().length).toBe(2)
        vendingMachine.addClient({
            nombre: "Teba Gomez",
            usuario: "teba",
            contraseña: "pass2",
            tipo: "usuario",
            presupuesto: "100",
            gasto: []})
        expect(vendingMachine.getAllClients().length).toBe(3)
        expect(vendingMachine.getAllClients()).toMatchSnapshot()
      })
    // Avoid adding existing clients
    test('must avoid adding existing clients',() =>{
        expect(vendingMachine.getAllClients().length).toBe(2)
        vendingMachine.addClient(clientes[0])
        expect(vendingMachine.getAllClients().length).toBe(2)
        expect(vendingMachine.getAllClients()).toMatchSnapshot()
    })
    // Avoid adding clients with incomplete info
    test('must avoid adding clients with incomplete info', () => {
        expect(() => vendingMachine.addClient({})).toThrow("Missing Client Info!")
        expect(vendingMachine.getAllClients().length).toBe(2)
        expect(vendingMachine.getAllClients()).toMatchSnapshot()
    })
    // Remove client
    test('must remove specific client', () => {
        expect(vendingMachine.getAllClients().length).toBe(2)
        expect(vendingMachine.removeClient("ulises")).toBeTruthy()
        expect(vendingMachine.getAllClients().length).toBe(1)
        expect(vendingMachine.getAllClients()).toMatchSnapshot()
    })
    // Avoid remove non-existing clients
    test('must avoid removing non-existnig clients', () => {
        expect(vendingMachine.getAllClients().length).toBe(2)
        expect(vendingMachine.removeClient("Inventado")).toBeFalsy()
        expect(vendingMachine.getAllClients().length).toBe(2)
        expect(vendingMachine.getAllClients()).toMatchSnapshot()
    })
    
})


/*
### Paso 3 - Creamos varios métodos para gestionar a los clientes y sus necesidades
Metodos:
- Agregar un cliente √
- Evitaremos que se registren usuarios que ya existan √
- Evitaremos dar de alta usuarios que no esten debidamente cumplimentados √
- Eliminar un cliente √
- Evitaremos eliminar usuarios que no existan √√√√√√√√

- Consultar saldo de un cliente
    - Comprobaremos la contraseña y el usuario
    - Devolverá el saldo existente o -1 en caso de error
- Consultar gastos de un cliente
    - Comprobaremos la contraseña y el usuario
    - Devolverá un array o false en caso de error

Caracteristicas:
- Protegeremos las funciones de gestión de usuarios con la contraseña ficticiaMola
*/