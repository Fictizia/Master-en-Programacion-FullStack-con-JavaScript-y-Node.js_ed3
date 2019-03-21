## Planificación
1) Comentarios de lo que voy a hacer - estructura, cómo voy a hacerlo
2) Estimación 
3) Tareas pequeñas
4) Cómo comprobaría que eso funciona (test)
5) Programar 👩‍💻👩‍💻

### Paso 1 - Creamos los primeros objetos básicos:
- Maquina Expendedora (Objeto)
- Productos (Array)
- Clientes (Array)

```js

 var maquinaExpendedora = {};
 
 var productos = [];
 
 var clientes = [];
``` 
 
### Paso 2 - Creamos los primeros perfiles en el Array de clientes:
Propiedades:
- Nombre
- Usuario
- Contraseña
- Tipo usuario
- Presupuesto

``` 
var clientes = [
     {
     nombre: "Teba Gómez"
     usuario: "Tgomez"
     contraseña: "9876"
     tipo: "empleado"
     presupuesto: "20"
     gasto: [{
       fecha: "",
       producto: "",
       saldoAnterior: N,
       saldoActual: N
       }]
     },{
     nombre: "Peter Ostrogonov"
     usuario: "Postrog"
     contraseña: "1234"
     tipo: "empleado"
     presupuesto: "20"
     gasto: [{
       fecha: "",
       producto: "",
       saldoAnterior: N,
       saldoActual: N
       }]
     }
   ];
 
var productos = [
     {
     nombre: "Patatas fritas ahumadas",
     código: "C01",
     stock: 10,
     disponibilidad: true,
     precio: 3
     },{
     nombre: "Risketos",
     código: "C02",
     stock: 10,
     disponibilidad: true,
     precio: 2
     },{
     nombre: "Batido avena fresa",
     código: "C03",
     stock: 10,
     disponibilidad: true,
     precio: 4
     },{
     nombre: "Sandwich vegetal",
     código: "C04",
     stock: 10,
     disponibilidad: true,
     precio: 6
     },{
     nombre: "Sandwich atún",
     código: "C05",
     stock: 10,
     disponibilidad: true,
     precio: 6
     }
   ];
```

### Paso 3 - Creamos varios métodos para gestionar a los clientes y sus necesidades

Metodos:
- Consultar saldo de un cliente
    - Devolverá el saldo existente o -1 en caso de error
    - Comprobaremos la contraseña y el usuario
- Consultar gastos de un cliente
    - Devolverá un array o false en caso de error
    - Comprobaremos la contraseña y el usuario
- Agregar un cliente
- Eliminar un cliente

Caracteristicas:
- Evitaremos que se registren usuarios que ya existan
- Evitaremos eliminar usuarios que no existan
- Evitaremos dar de alta usuarios que no esten debidamente cumplimentados
- Protegeremos las funciones de gestión de usuarios con la contraseña ficticiaMola

```js

var maquinaExpendedora = {
    admin: {
      secreto: "ficticiaMola"
    },
    herramientas: {
      esCliente: function (usuario) {
        var existe = false;
        for (var i in clientes) {
          if (clientes[i].usuario === usuario) {
            existe = true;
            break;
          }
        }
        return "El usuario introducido existe? ", existe;
      }
    },
    gestionClientes: {
      agregarCliente: function (clave, cliente) {
        if (clave === maquinaExpendedora.admin.secreto) {
          console.log("Admin logeado!");
          if (maquinaExpendedora.herramientas.esCliente = false) {
            console.log(Usuario no existente.Introduce todos los datos); {
              if (cliente.nombre && .cliente && obj.cliente &&
                cliente.tipo && cliente.presu = true) {
                clientes.push(cliente);
                console.log(Cliente creado correctamente!)
                return true;
              } else {
                prompt("Introduce todos los datos!");
                return false;
              };
            } else {
              prompt("Usuario existente");
              return false;
            };

          } else {
            prompt("Contraseña incorrecta. Prueba de nuevo!");
          }
        }
      },

      eliminarCliente: function (clave, cliente) {
        if (clave === maquinaExpendedora.admin.secreto) {
          console.log("Admin logeado!");
          if (maquinaExpendedora.herramientas.esCliente = true) {
            for (var i in clientes) {
              if (clientes[i].usuario === usuario) {
                clientes.splice(i, 1);
                break;
              }
            }
            console.info("Usuario eliminado con éxito");
          } else {
            console.warn("El usuario no existe!");
          }
        } else {
          prompt("Contraseña incorrecta. Prueba de nuevo!");
        }
      },

      consultaSaldo: function (usuario, contraseña) {
        var saldo = clientes.presupuesto;
        var claveUs = prompt("Pon tu clave de usuario");
        var contraseñaOk = prompt("Pon tu contraseña");
        if (claveUs === clientes.usuario && contraseñaOk === clientes.contraseña) {
          console.log(Cliente logueado);
          if (saldo <= 0) {
            console.log("Tu saldo es negativo. Recarga para consumir!");
          } else {
            console.log("Tu saldo es ", saldo);
          };
        } else {
          console.log("Usuario o contraseña incorrecta. Prueba de nuevo");
        }
      },
      consultaGastos: function (usuario, contraseña) {
        var gastoAcumulado = false;
        var claveUs = prompt("Pon tu clave de usuario");
        var contraseñaOk = prompt("Pon tu contraseña");
        for (var i = 0; i < clientes.length; i++) {
          if (cliente[i].usuario === claveUs && cliente[i].contraseña === contraseñaOk) {
            gastoAcumulado = clientes[i].gasto;
            break;
          }
        }
        return gastoAcumulado;
      }
    }
    
var clientes = [
    {
    nombre: "Teba Gómez"
    usuario: "Tgomez"
    contraseña: "9876"
    tipo: "empleado"
    presupuesto: "20"
    gasto: []
    },{
    nombre: "Peter Ostrogonov"
    usuario: "Postrog"
    contraseña: "1234"
    tipo: "empleado"
    presupuesto: "20"
    gasto: []
    }
];

// Testing esCliente
maquinaExpendedora.herramientas.esCliente("Tgomez"); // True
maquinaExpendedora.herramientas.esCliente("alguien guapi"); // False

// Testing agregar
maquinaExpendedora.gestionClientes.agregarCliente("Vaya tela", "Peter"); // Contraseña incorrecta. Prueba de nuevo!
maquinaExpendedora.gestionClientes.agregarCliente(); // Contraseña incorrecta. Prueba de nuevo!
maquinaExpendedora.gestionClientes.agregarCliente("ficticiaMola", "Tgomez"); // El usuario ya existe
maquinaExpendedora.gestionClientes.agregarCliente("ficticiaMola", {
    usuario: "ulises2",
    presupuesto: 1000,
    tipo: "admin",
    pass: "pass2",
    nombre: "Ulises2"
}); // Cliente creado correctamente!


// Testing saldo
maquinaExpendedora.gestionClientes.consultaSaldo() // -1
maquinaExpendedora.gestionClientes.consultaSaldo("Tgomez", "9876") // 20

// Testing gasto
maquinaExpendedora.gestionClientes.consultaGasto() // -1
maquinaExpendedora.gestionClientes.consultaSaldo("Tgomez", "9876") // []
    
```

#### Paso 4 - Creamos varios métodos para gestionar a los productos y sus necesidades
- Creamos 5 productos que estarán disponibles a la venta
- Métodos:
    - Consumir un producto (cliente)
        - Comprobaremos la contraseña y el usuario
        - Devolverá el producto o -1 en caso de no existir o estar agotado
        - Actualizaremos el stock
        - Actualizaremos el saldo del cliente
    - Agregar un producto a la máquina (administración)
    - Eliminar un prodcutos de la máquina (administración)

- Caracteristicas:
    - Evitaremos agregar productos que ya existan
    - Evitaremos eliminar productos que no existan
    - Evitaremos agregar productos que no esten debidamente cumplimentados
    - Protegeremos las funciones de agregar y eliminar productos con la contraseña ficticiaMola

```js

var maquinaExpendedora = {
		admin: {
			secreto: "ficticiaMola"
		},
		herramientas: {
			esCliente: function (usuario) {
				var existe = false;
				for (var i in clientes) {
					if (clientes[i].usuario === usuario) {
						existe = true;
						break;
					}
				}
				return "El usuario introducido existe? ", existe;
			},
			esProducto: function (producto) {
				var existePrdto = false;
				for (var i in productos) {
					if (productos[i].nombre === producto {
							existePrdto = true;
							break;
						}
					};
					return existePrdto;
				}
			},
			gestionProductos: {
				agregarProducto: function (clave, producto) {
					if (clave === maquinaExpendedora.admin.secreto) {
						console.log("Admin logeado!");
						if (maquinaExpendedora.herramientas.esProducto = false) {
							console.log("Producto no existente. Introduce todos los datos"); {
								if (productos.nombre && productos.codigo && productos.stock && productos.disponibilidad &&
									productos.stock = true) {
									productos.push(producto);
									console.log("Producto creado correctamente!")
									return true;
								} else {
									prompt("Introduce todos los datos!");
									return false;
								};
							} else {
								prompt("Producto existente");
								return false;
							};
						} else {
							prompt("Contraseña incorrecta. Prueba de nuevo!");
						};
					}
				},
				eliminarProducto: function (clave, producto) {
					if (clave === maquinaExpendedora.admin.secreto) {
						console.log("Admin logeado!");
						if (maquinaExpendedora.herramientas.esProducto = true) {
							for (var i in productos) {
								if (productos[i].nombre === producto) {
									productos.splice(i, 1);
									break;
								}
							}
							console.info("Producto eliminado con éxito");
						} else {
							console.warn("Producto no existente!");
						}
					} else {
						prompt("Contraseña incorrecta. Prueba de nuevo!");
					}
				},
			},
			actualizarStock: function (producto) {
				if (productos.stock === 0) {
					productos.disponibilidad = false;
					break;
				}
			}
		},
		gestionClientes: {
			agregarCliente: function (clave, cliente) {
				if (clave === maquinaExpendedora.admin.secreto) {
					console.log("Admin logeado!");
					if (maquinaExpendedora.herramientas.esCliente = false) {
						console.log("Usuario no existente. Introduce todos los datos"); {
							if (cliente.nombre && .cliente && obj.cliente &&
								cliente.tipo && cliente.presu = true) {
								clientes.push(cliente);
								console.log("Cliente creado correctamente!")
								return true;
							} else {
								prompt("Introduce todos los datos!");
								return false;
							};
						} else {
							prompt("Usuario existente");
							return false;
						};

					} else {
						prompt("Contraseña incorrecta. Prueba de nuevo!");
					}
				}
			},

			eliminarCliente: function (clave, cliente) {
				if (clave === maquinaExpendedora.admin.secreto) {
					console.log("Admin logeado!");
					if (maquinaExpendedora.herramientas.esCliente = true) {
						for (var i in clientes) {
							if (clientes[i].usuario === usuario) {
								clientes.splice(i, 1);
								break;
							}
						}
						console.info("Usuario eliminado con éxito");
					} else {
						console.warn("El usuario no existe!");
					}
				} else {
					prompt("Contraseña incorrecta. Prueba de nuevo!");
				}
			},

			consultaSaldo: function (usuario, contraseña) {
				var saldo = clientes.presupuesto;
				var claveUs = prompt("Pon tu clave de usuario");
				var contraseñaOk = prompt("Pon tu contraseña");
				if (claveUs === clientes.usuario && contraseñaOk === clientes.contraseña) {
					console.log(Cliente logueado);
					if (saldo <= 0) {
						console.log("Tu saldo es negativo. Recarga para consumir!");
					} else {
						console.log("Tu saldo es ", saldo);
					};
				} else {
					console.log("Usuario o contraseña incorrecta. Prueba de nuevo");
				}
			},

			consultaGastos: function (usuario, contraseña) {
				var gastoAcumulado = false;
				var claveUs = prompt("Pon tu clave de usuario");
				var contraseñaOk = prompt("Pon tu contraseña");
				for (var i = 0; i < clientes.length; i++) {
					if (cliente[i].usuario === claveUs && cliente[i].contraseña === contraseñaOk) {
						gastoAcumulado = clientes[i].gasto;
						break;
					}
				}
				return gastoAcumulado;
			},

			consumirProducto: function (usuario, contraseña, producto) {
				var producto = productos.nombre;
				var claveUs = prompt("Pon tu clave de usuario");
				var contraseñaOk = prompt("Pon tu contraseña");
				for (var i = 0; i < clientes.length; i++) {
					if (cliente[i].usuario === claveUs && cliente[i].contraseña === contraseñaOk) {
						console.log("Contraseña correcta");
						var consumo = prompt("Qué producto quieres?");
						if (consumo === productos.codigo && productos.disponibilidad = true) {
							producto.stock--;
							clientes.presupuesto -= productos.precio;
							break;
						}
					} else {
						console.warn("Contraseña incorrecta. Prueba de nuevo!")
					}
				}
				return producto;
			}
		}


		var productos = [{
			nombre: "Patatas fritas ahumadas",
			código: "C01",
			stock: 10,
			disponibilidad: true,
			precio: 3
		}, {
			nombre: "Risketos",
			código: "C02",
			stock: 10,
			disponibilidad: true,
			precio: 2
		}, {
			nombre: "Batido avena fresa",
			código: "C03",
			stock: 10,
			disponibilidad: true,
			precio: 4
		}, {
			nombre: "Sandwich vegetal",
			código: "C04",
			stock: 10,
			disponibilidad: true,
			precio: 6
		}, {
			nombre: "Sandwich atún",
			código: "C05",
			stock: 10,
			disponibilidad: true,
			precio: 6
		}];

		// Tests gestion productos

```

#### Paso 5 - (Nivel Medio) Ahora podemos agregar los métodos para agregar, retirar y resetear saldo de los usuarios.
Importante: los saldos jamas pueden ser negativos.

```js

// Paso 5 - agregar, retirar y resetear el saldo de los usuarios

var maquinaExpendedora = {
	admin: {
		secreto: "ficticiaMola"
	},
	herramientas: {
		esCliente: function (usuario) {
			var existe = false;
			for (var i in clientes) {
				if (clientes[i].usuario === usuario) {
					existe = true;
					break;
				}
			}
			return "El usuario introducido existe? ", existe;
		},
		esProducto: function (producto) {
			var existePrdto = false;
			for (var i in productos) {
				if (productos[i].nombre === producto {
						existePrdto = true;
						break;
					}
				};
				return existePrdto;
			}
		},
		gestionProductos: {
			agregarProducto: function (clave, producto) {
				if (clave === maquinaExpendedora.admin.secreto) {
					console.log("Admin logeado!");
					if (maquinaExpendedora.herramientas.esProducto = false) {
						console.log("Producto no existente. Introduce todos los datos"); {
							if (productos.nombre && productos.codigo && productos.stock && productos.disponibilidad &&
								productos.stock = true) {
								productos.push(producto);
								console.log("Producto creado correctamente!")
								return true;
							} else {
								prompt("Introduce todos los datos!");
								return false;
							};
						} else {
							prompt("Producto existente");
							return false;
						};
					} else {
						prompt("Contraseña incorrecta. Prueba de nuevo!");
					};
				}
			},
			eliminarProducto: function (clave, producto) {
				if (clave === maquinaExpendedora.admin.secreto) {
					console.log("Admin logeado!");
					if (maquinaExpendedora.herramientas.esProducto = true) {
						for (var i in productos) {
							if (productos[i].nombre === producto) {
								productos.splice(i, 1);
								break;
							}
						}
						console.info("Producto eliminado con éxito");
					} else {
						console.warn("Producto no existente!");
					}
				} else {
					prompt("Contraseña incorrecta. Prueba de nuevo!");
				}
			},
		},
		actualizarStock: function (producto) {
			if (productos.stock === 0) {
				productos.disponibilidad = false;
				break;
			}
		}
	},
	gestionClientes: {
		agregarCliente: function (clave, cliente) {
			if (clave === maquinaExpendedora.admin.secreto) {
				console.log("Admin logeado!");
				if (maquinaExpendedora.herramientas.esCliente = false) {
					console.log("Usuario no existente. Introduce todos los datos"); {
						if (cliente.nombre && .cliente && obj.cliente &&
							cliente.tipo && cliente.presu = true) {
							clientes.push(cliente);
							console.log("Cliente creado correctamente!")
							return true;
						} else {
							prompt("Introduce todos los datos!");
							return false;
						};
					} else {
						prompt("Usuario existente");
						return false;
					};

				} else {
					prompt("Contraseña incorrecta. Prueba de nuevo!");
				}
			}
		},

		eliminarCliente: function (clave, cliente) {
			if (clave === maquinaExpendedora.admin.secreto) {
				console.log("Admin logeado!");
				if (maquinaExpendedora.herramientas.esCliente = true) {
					for (var i in clientes) {
						if (clientes[i].usuario === usuario) {
							clientes.splice(i, 1);
							break;
						}
					}
					console.info("Usuario eliminado con éxito");
				} else {
					console.warn("El usuario no existe!");
				}
			} else {
				prompt("Contraseña incorrecta. Prueba de nuevo!");
			}
		},

		consultaSaldo: function (usuario, contraseña) {
			var saldo = clientes.presupuesto;
			var claveUs = prompt("Pon tu clave de usuario");
			var contraseñaOk = prompt("Pon tu contraseña");
			if (claveUs === clientes.usuario && contraseñaOk === clientes.contraseña) {
				console.log(Cliente logueado);
				if (saldo <= 0) {
					console.log("Tu saldo es negativo. Recarga para consumir!");
				} else {
					console.log("Tu saldo es ", saldo);
				};
			} else {
				console.log("Usuario o contraseña incorrecta. Prueba de nuevo");
			}
		},

		consultaGastos: function (usuario, contraseña) {
			var gastoAcumulado = false;
			var claveUs = prompt("Pon tu clave de usuario");
			var contraseñaOk = prompt("Pon tu contraseña");
			for (var i = 0; i < clientes.length; i++) {
				if (cliente[i].usuario === claveUs && cliente[i].contraseña === contraseñaOk) {
					gastoAcumulado = clientes[i].gasto;
					break;
				}
			}
			return gastoAcumulado;
		},

		consumirProducto: function (usuario, contraseña, producto) {
			var producto = productos.nombre;
			var claveUs = prompt("Pon tu clave de usuario");
			var contraseñaOk = prompt("Pon tu contraseña");
			for (var i = 0; i < clientes.length; i++) {
				if (cliente[i].usuario === claveUs && cliente[i].contraseña === contraseñaOk) {
					console.log("Contraseña correcta");
					var consumo = prompt("Qué producto quieres?");
					if (consumo === productos.codigo && productos.disponibilidad = true) {
						producto.stock--;
						clientes.presupuesto -= productos.precio;
						break;
					}
				} else {
					console.warn("Contraseña incorrecta. Prueba de nuevo!")
				}
			}
			return producto;
		}
	}
	gestionSaldos: {

		agregarSaldo: function (clave, usuario, cantidad) {

			cantidad = cantidad || 0;
			cantidad = parseInt(cantidad);

			if (clave === maquinaExpendedora.admin.secreto) {
				console.log("Admin logeado!");
				if (maquinaExpendedora.herramientas.esCliente = true) {
					var clienteID;
					for (var i in clientes) {
						if (clientes[i].usuario === usuario) {
							clienteID = i;
							clientes[i].presupuesto += cantidad;
							break;
						}
					}
					console.info("Usuario actualizado con éxito");
					console.info("Saldo actual del cliente " + clientes[clienteID].nombre +
						"es de " + clientes[clienteID].presupuesto);


				} else {
					console.warn("El usuario no existe!");
				}
			} else {
				prompt("Contraseña incorrecta. Prueba de nuevo!");
			};
		},

		retirarSaldo: function (clave, usuario, cantidad) {
			cantidad = cantidad || 0;
			cantidad = parseInt(cantidad);

			if (clave === maquinaExpendedora.admin.secreto) {
				console.log("Admin logeado!");
				if (maquinaExpendedora.herramientas.esCliente = true) {
					var clienteID;
					for (var i in clientes) {
						if (clientes[i].usuario === usuario) {
							clienteID = i;
							break;
						}
					}
					if (cantidad <= clientes[clienteID].presupuesto) {
						clientes[clienteID].presupuesto -= cantidad;
						console.info("Usuario actualizado con éxito");
						console.info("Saldo actual del cliente " + clientes[clienteID].nombre +
							"es de " + clientes[clienteID].presupuesto);
						return true;
					} else {
						console.warn("ERROR, saldo insuficiente!");
						console.info("Diferencia: ", clientes[clienteID].presupuesto - cantidad);
						return false;
					}

				} else {
					console.warn("El usuario no existe!");
				}
			} else {
				prompt("Contraseña incorrecta. Prueba de nuevo!");
			};
		},

		resetSaldo: function (clave, usuario) {

			if (clave === maquinaExpendedora.admin.secreto) {
				console.log("Admin logeado!");
				if (maquinaExpendedora.herramientas.esCliente = true) {
					var clienteID;
					for (var i in clientes) {
						if (clientes[i].usuario === usuario) {
							clienteID = i;
							clientes[i].presupuesto = 0;
							break;
						}
					}
					console.info("Usuario reseteado con éxito");
					console.info("Saldo actual del cliente " + clientes[clienteID].nombre +
						"es de " + clientes[clienteID].presupuesto);

				} else {
					console.warn("El usuario no existe!");
				}
			} else {
				prompt("Contraseña incorrecta. Prueba de nuevo!");
			};
		}
	}
};


var clientes = [{
	nombre: "Teba Gómez"
	usuario: "Tgomez"
	contraseña: "9876"
	tipo: "empleado"
	presupuesto: "20"
	gasto: [{
		fecha: "",
		producto: "",
		saldoAnterior: N,
		saldoActual: N
	}]
}, {
	nombre: "Peter Ostrogonov"
	usuario: "Postrog"
	contraseña: "1234"
	tipo: "empleado"
	presupuesto: "20"
	gasto: [{
		fecha: "",
		producto: "",
		saldoAnterior: N,
		saldoActual: N
	}]
}];



```

#### Paso 6 - (Nivel Avanzado) Ahora podemos agregar el método para saber la disponibilidad de stock
Importante:
	- Es necesaria clave (adminsitrador)
	- Debemos saber las existencias
	- Debemos saber que productos estan disponibles y cuales no.
	- Debemos incluir el código y el nombre
	- Cuando se imprima el informe es necesario incluir la fecha.


```js
// Paso 6 - conocer la disponibilidad de stock

var maquinaExpendedora = {
	admin: {
		secreto: "ficticiaMola"
	},
	herramientas: {
		esCliente: function (usuario) {
			var existe = false;
			for (var i in clientes) {
				if (clientes[i].usuario === usuario) {
					existe = true;
					break;
				}
			}
			return "El usuario introducido existe? ", existe;
		},
		esProducto: function (producto) {
			var existePrdto = false;
			for (var i in productos) {
				if (productos[i].nombre === producto {
						existePrdto = true;
						break;
					}
				};
				return existePrdto;
			}
		},
		gestionProductos: {
			controlStock: function (clave) {
				if (clave === maquinaExpendedora.admin.secreto) {
					var mensaje = "***********************\n";
					mensaje += "En total tenemos " + productos.length + "productos\n"
					if (productos.length > 0) {
						for (var i in productos) {
							return mensaje `
                            ---------------------------
                            Nombre: ${producto.nombre[i]};\n
                            Código: ${producto.código[i]};\n
                            Stock: ${producto.stock[i]};\n
                            Disponibilidad: ${producto.disponibilidad[i]};\n`
						};
					} else {
						console.info("No hay productos disponibles. Por favor, recarga");
					};
				} else {
					prompt("Contraseña incorrecta. Prueba de nuevo!");
				};
			},

			agregarProducto: function (clave, producto) {
				if (clave === maquinaExpendedora.admin.secreto) {
					console.log("Admin logeado!");
					if (maquinaExpendedora.herramientas.esProducto = false) {
						console.log("Producto no existente. Introduce todos los datos"); {
							if (productos.nombre && productos.codigo && productos.stock && productos.disponibilidad &&
								productos.stock = true) {
								productos.push(producto);
								console.log("Producto creado correctamente!")
								return true;
							} else {
								prompt("Introduce todos los datos!");
								return false;
							};
						} else {
							prompt("Producto existente");
							return false;
						};
					} else {
						prompt("Contraseña incorrecta. Prueba de nuevo!");
					};
				}
			},
			eliminarProducto: function (clave, producto) {
				if (clave === maquinaExpendedora.admin.secreto) {
					console.log("Admin logeado!");
					if (maquinaExpendedora.herramientas.esProducto = true) {
						for (var i in productos) {
							if (productos[i].nombre === producto) {
								productos.splice(i, 1);
								break;
							}
						}
						console.info("Producto eliminado con éxito");
					} else {
						console.warn("Producto no existente!");
					}
				} else {
					prompt("Contraseña incorrecta. Prueba de nuevo!");
				}
			},
		},
		actualizarStock: function (producto) {
			if (productos.stock === 0) {
				productos.disponibilidad = false;
				break;
			}
		}
	},
	gestionClientes: {
		agregarCliente: function (clave, cliente) {
			if (clave === maquinaExpendedora.admin.secreto) {
				console.log("Admin logeado!");
				if (maquinaExpendedora.herramientas.esCliente = false) {
					console.log("Usuario no existente. Introduce todos los datos"); {
						if (cliente.nombre && .cliente && obj.cliente &&
							cliente.tipo && cliente.presu = true) {
							clientes.push(cliente);
							console.log("Cliente creado correctamente!")
							return true;
						} else {
							prompt("Introduce todos los datos!");
							return false;
						};
					} else {
						prompt("Usuario existente");
						return false;
					};

				} else {
					prompt("Contraseña incorrecta. Prueba de nuevo!");
				}
			}
		},

		eliminarCliente: function (clave, cliente) {
			if (clave === maquinaExpendedora.admin.secreto) {
				console.log("Admin logeado!");
				if (maquinaExpendedora.herramientas.esCliente = true) {
					for (var i in clientes) {
						if (clientes[i].usuario === usuario) {
							clientes.splice(i, 1);
							break;
						}
					}
					console.info("Usuario eliminado con éxito");
				} else {
					console.warn("El usuario no existe!");
				}
			} else {
				prompt("Contraseña incorrecta. Prueba de nuevo!");
			}
		},

		consultaSaldo: function (usuario, contraseña) {
			var saldo = clientes.presupuesto;
			var claveUs = prompt("Pon tu clave de usuario");
			var contraseñaOk = prompt("Pon tu contraseña");
			if (claveUs === clientes.usuario && contraseñaOk === clientes.contraseña) {
				console.log(Cliente logueado);
				if (saldo <= 0) {
					console.log("Tu saldo es negativo. Recarga para consumir!");
				} else {
					console.log("Tu saldo es ", saldo);
				};
			} else {
				console.log("Usuario o contraseña incorrecta. Prueba de nuevo");
			}
		},

		consultaGastos: function (usuario, contraseña) {
			var gastoAcumulado = false;
			var claveUs = prompt("Pon tu clave de usuario");
			var contraseñaOk = prompt("Pon tu contraseña");
			for (var i = 0; i < clientes.length; i++) {
				if (cliente[i].usuario === claveUs && cliente[i].contraseña === contraseñaOk) {
					gastoAcumulado = clientes[i].gasto;
					break;
				}
			}
			return gastoAcumulado;
		},

		consumirProducto: function (usuario, contraseña, producto) {
			var producto = productos.nombre;
			var claveUs = prompt("Pon tu clave de usuario");
			var contraseñaOk = prompt("Pon tu contraseña");
			for (var i = 0; i < clientes.length; i++) {
				if (cliente[i].usuario === claveUs && cliente[i].contraseña === contraseñaOk) {
					console.log("Contraseña correcta");
					var consumo = prompt("Qué producto quieres?");
					if (consumo === productos.codigo && productos.disponibilidad = true) {
						producto.stock--;
						clientes.presupuesto -= productos.precio;
						break;
					}
				} else {
					console.warn("Contraseña incorrecta. Prueba de nuevo!")
				}
			}
			return producto;
		}
	}
	gestionSaldos: {

		agregarSaldo: function (clave, usuario, cantidad) {

			cantidad = cantidad || 0;
			cantidad = parseInt(cantidad);

			if (clave === maquinaExpendedora.admin.secreto) {
				console.log("Admin logeado!");
				if (maquinaExpendedora.herramientas.esCliente = true) {
					var clienteID;
					for (var i in clientes) {
						if (clientes[i].usuario === usuario) {
							clienteID = i;
							clientes[i].presupuesto += cantidad;
							break;
						}
					}
					console.info("Usuario actualizado con éxito");
					console.info("Saldo actual del cliente " + clientes[clienteID].nombre +
						"es de " + clientes[clienteID].presupuesto);


				} else {
					console.warn("El usuario no existe!");
				}
			} else {
				prompt("Contraseña incorrecta. Prueba de nuevo!");
			};
		},

		retirarSaldo: function (clave, usuario, cantidad) {
			cantidad = cantidad || 0;
			cantidad = parseInt(cantidad);

			if (clave === maquinaExpendedora.admin.secreto) {
				console.log("Admin logeado!");
				if (maquinaExpendedora.herramientas.esCliente = true) {
					var clienteID;
					for (var i in clientes) {
						if (clientes[i].usuario === usuario) {
							clienteID = i;
							break;
						}
					}
					if (cantidad <= clientes[clienteID].presupuesto) {
						clientes[clienteID].presupuesto -= cantidad;
						console.info("Usuario actualizado con éxito");
						console.info("Saldo actual del cliente " + clientes[clienteID].nombre +
							"es de " + clientes[clienteID].presupuesto);
						return true;
					} else {
						console.warn("ERROR, saldo insuficiente!");
						console.info("Diferencia: ", clientes[clienteID].presupuesto - cantidad);
						return false;
					}

				} else {
					console.warn("El usuario no existe!");
				}
			} else {
				prompt("Contraseña incorrecta. Prueba de nuevo!");
			};
		},

		resetSaldo: function (clave, usuario) {

			if (clave === maquinaExpendedora.admin.secreto) {
				console.log("Admin logeado!");
				if (maquinaExpendedora.herramientas.esCliente = true) {
					var clienteID;
					for (var i in clientes) {
						if (clientes[i].usuario === usuario) {
							clienteID = i;
							clientes[i].presupuesto = 0;
							break;
						}
					}
					console.info("Usuario reseteado con éxito");
					console.info("Saldo actual del cliente " + clientes[clienteID].nombre +
						"es de " + clientes[clienteID].presupuesto);

				} else {
					console.warn("El usuario no existe!");
				}
			} else {
				prompt("Contraseña incorrecta. Prueba de nuevo!");
			};
		}
	}
};

```
