function seedClients() {
    return [{
        // admin
        nombre: "Ulises Gascón",
        usuario: "ulises",
        contraseña: "pass",
        tipo: "admin",
        presupuesto: "1000",
        gasto: []
    }, {
        nombre: "Carlos Perez",
        usuario: "cPerez",
        contraseña: "pass_2",
        tipo: "usuario",
        presupuesto: "100",
        gasto: []
    }];
}

module.exports = { seedClients }