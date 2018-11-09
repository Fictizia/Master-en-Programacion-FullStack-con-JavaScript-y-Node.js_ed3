## Planificación
1) Comentarios de lo que voy a hacer - estructura, cómo voy a hacerlo
2) Estimación 
3) Tareas pequeñas
4) Cómo comprobaría que eso funciona (test)
5) Programar 👩‍💻👩‍💻

### 1) Comentarios, estructura
```js
// Paso 1: crear los primeros objetos básicos
 
 var maquinaExpendedora = {
   admin: { contraseña: 'fictiziamola' },
   producto:[
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
   ],
   clientes: [
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
     },{
     nombre: "Laura Dern"
     usuario: "Ldern"
     contraseña: "5678"
     tipo: "empleado"
     presupuesto: "20"
     gasto: [{
       fecha: "",
       producto: "",
       saldoAnterior: N,
       saldoActual: N
       }]
     }
   ],
  };
```

```js

// Paso 2: hacer los procesos

/* 1. Procesos máquina gestión producto: [
  1.1. "consumir producto",
  1.2. "eliminar producto máquina",
  1.3. "disponibilidad stock producto - informe"]
*/

/* 2. Procesos máquina gestión clientes: [
  2.1. "consultar saldo",
  2.2. "consultar gastos - informe",
  2.3 "consumir producto"]
*/

/* 3. Procesos admin: [
  3.1. "agregar cliente",
  3.2. "eliminar cliente",
  3.3. "agregar producto máquina",
  3.4. "eliminar producto máquina",
  3.5. "agregar/retirar/resetear saldo usuarios",
  3.6. "disponibilidad stock producto - informe"]
*/
```

```js 

// Paso 3: escribir sin código los procesos

/*
2.1. "consultar saldo":
    - Devolverá el saldo existente o -1 en caso de error
    - Comprobaremos la contraseña y el usuario

@parametros: contraseña, usuario
@output: saldoActual
-> Acción Consultar saldo
Si contraseña y usuario son correctas
  Si saldoActual es >= 0,
  imprimo saldoActual;
  Else,
  imprimo "Tu saldo es negativo. Consulta a RRHH."
Else imprimo "tu usuario  o contraseña no coinciden."

****************************************************************

2.2. "consultar gastos - informe",
    - Devolverá un array o false en caso de error
    - Comprobaremos la contraseña y el usuario

@parametros: contraseña, usuario
@output: informe gastos
Si contraseña y usuario son correctas,
-> Acción: Consultar gastos
imprimo array gasto.clientes
Else imprimo "tu usuario  o contraseña no coinciden" o "error".

****************************************************************

3.1. "agregar cliente",
    - Evitaremos que se registren usuarios que ya existan
    - Evitaremos dar de alta usuarios que no esten debidamente cumplimentados
    - Protegeremos las funciones de gestión de usuarios con la contraseña ficticiaMola

@contraseña admin, parámetros objeto cliente
@output nuevo objeto Cliente.clientes
Si contraseña admin es correcta ("fictiziamola"),
  -> Acción: agregar clientes
  -> Introduce usuario.cliente
    Si usuario.cliente no existe en objeto clientes,
      -> Introduce todas las características nuevo objeto cliente
        Si todos los campos están completos,
          -> Añade (splice) nuevo objeto cliente en array clientes,
        Else imprimo warning "faltan campos por completar"
    Else imprimo "Usuario existente".
Else imprimo warning "Contraseña incorrecta"

****************************************************************

3.2. "eliminar cliente",
    - Evitaremos eliminar usuarios que no existan
    - Protegeremos las funciones de gestión de usuarios con la contraseña ficticiaMola

@contraseña admin, parámetros objeto cliente
@output eliminar objeto Cliente.clientes
Si contraseña admin es correcta ("fictiziamola"),
  -> Acción: eliminar clientes
  -> Introduce usuario.cliente
  Si usuario.cliente existe en objeto clientes,
    -> Eliminamos usuario
  Else imprimo warning "Usuario no existente. Acción no completada."
Else imprimo warning "Contraseña incorrecta"

****************************************************************

2.3 + 1.1. "consumir producto" - gestión clientes y máquina
    - Comprobaremos la contraseña y el usuario
    - Devolverá el producto o -1 en caso de no existir o estar agotado
    - Actualizaremos el stock
    - Actualizaremos el saldo del cliente

@parametros: usuario y contraseña
@output: producto.stock actualizado, saldoActual + cliente.presupuesto actualizado
Si contraseña y usuario son correctas,
  imprimo "Elige producto"
    Si producto.stock >= 1
      Si producto.precio >= clientes.saldoActual
      -> Devuelvo producto (físicamente)
      -> Acción restar clientes.saldo
      -> Acción restar producto.stock
      Else imprimo "No tienes suficiente saldo para este producto."
    Else "Producto agotado."
Else imprimo "tu usuario  o contraseña no coinciden" o "error"

****************************************************************

3.3. "agregar producto máquina" + 3.4. "eliminar producto máquina"
    - Evitaremos agregar productos que ya existan
    - Evitaremos eliminar productos que no existan
    - Evitaremos agregar productos que no esten debidamente cumplimentados
    - Protegeremos las funciones de agregar y eliminar productos con la contraseña ficticiaMola

@contraseña admin, parámetros objeto producto
@output nuevo producto en objeto producto
Si contraseña admin es correcta ("fictiziamola"),
 -> Acción agregar producto
 Si producto NO existe en objeto producto
 -> imprimo "Incluye todos los parámetros"
  Si todos los parámetros existen y cumplen con lo requerido (typeof),
    -> Acción push nuevoProducto
  Else imprimo "Introduce todos los parámetros"
 Else "Producto ya existente"
Else imprimo warning "Contraseña incorrecta"

*******

@contraseña admin, parámetro objeto producto (a eliminar)
@output producto eliminado de objeto producto
Si contraseña admin es correcta ("fictiziamola"),
 -> Acción eliminar producto
  Si producto existe en objeto producto
  -> Acción splice de objeto producto
  Else imprimo "Producto no existente"
Else imprimo warning "Contraseña incorrecta"

****************************************************************

3.5. "agregar/retirar/resetear saldo usuarios"
    - Los saldos jamas pueden ser negativos.

@contraseña admin, parámetro usuario.clientes
@output saldoActual/presupuesto
Si contraseña admin es correcta ("fictiziamola"),
 -> imprimo "Introduce nombre usuario"
  Si usuario existe,
    -> Acción agregar/retirar/resetear clientes.presupuesto
     -> agregar ++i
     -> retirar --i
     -> resetear =0???
  Else imprimo "Usuario no existente"
Else imprimo warning "Contraseña incorrecta"

****************************************************************

1.3. + 3.6. "disponibilidad stock producto - informe"
    - Es necesaria clave (administrador)
    - Debemos saber las existencias
    - Debemos saber qué productos están disponibles y cuales no.
    - Debemos incluir el código y el nombre
    - Cuando se imprima el informe, es necesario incluir la fecha.
----
Ejemplo de Informe
----
************************
Fecha:
En total tenemos: 6 productos
----------------------------
Nombre: Risketos
Código: C1
Stock: 100
Disponibilidad: true
----------------------------

@contraseña admin, parámetro usuario.clientes
@output saldoActual/presupuesto
Si contraseña admin es correcta ("fictiziamola"),
 -> Acción imprimir informe
  .....???
  .....???
  .....???
Else imprimo warning "Contraseña incorrecta"

*/
