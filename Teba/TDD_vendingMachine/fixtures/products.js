function seedProducts(){
    return [{
        nombre: "Risketos",
        codigo: "C1",
        stock: 100,
        disponibilidad: true,
        precio: 1
    }, {
        nombre: "KitKat",
        codigo: "C2",
        stock: 4,
        disponibilidad: true,
        precio: 2
    }, {
        nombre: "Chicles Orbit",
        codigo: "C3",
        stock: 6,
        disponibilidad: true,
        precio: 3
    }, {
        nombre: "Pipas Solero",
        codigo: "C4",
        stock: 1,
        disponibilidad: true,
        precio: 4
    }, {
        nombre: "Demonios de Fresa",
        codigo: "C5",
        stock: 10,
        disponibilidad: true,
        precio: 5
    }];
}

module.exports = { seedProducts }
