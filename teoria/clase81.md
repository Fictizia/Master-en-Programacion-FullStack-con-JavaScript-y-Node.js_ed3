![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 81


### SQL 

![img](../assets/clase81/60ca8a9f-799b-4f96-a643-00b091d79081.jpeg)

> SQL (por sus siglas en inglés Structured Query Language) es un lenguaje declarativo de acceso a bases de datos relacionales que permite especificar diversos tipos de operaciones en ellas. Una de sus características es el manejo del álgebra y el cálculo relacional que permiten efectuar consultas con el fin de recuperar, de forma sencilla, información de bases de datos, así como hacer cambios en ellas. [Wikipedia](https://es.wikipedia.org/wiki/SQL)

**Lenguaje de definición de datos (DDL)**
- creación (CREATE)
- modificación (ALTER)
- borrado (DROP) 

**componentes principales**
- base de datos (DATABASE)
- tablas (TABLE)
- vistas (VIEW)
- índices (INDEX)
- procedimientos almacenados (PROCEDURE)
- disparadores (TRIGGER).

**Lenguaje de manipulación de datos (DML)**
- consultar (SELECT)
- insertar (INSERT)
- modificar (UPDATE)
- borrar (DELETE)

**Lenguaje de control de datos (DCL)**
- Confirmar la operacion (COMMIT)
- Retroceder la operacion (ROLLBACK)
- Dar permisos (GRANT)
- Quitar permisos (REVOKE)


### SQL: Tipos de datos

**Fechas**
- DATE *format YYYY-MM-DD*
- DATETIME *format: YYYY-MM-DD HH:MI:SS*
- TIMESTAMP *format: YYYY-MM-DD HH:MI:SS*
- YEAR *format YYYY or YY*

**Numéricos**
- TINYINT *permite números desde -128 hasta 127*
  - UNSIGNED *los valores posibles empiezan en 0 hasta 255*
- SMALLINT *permite números desde -32768 hasta 32767*
  - UNSIGNED *los valores posibles empiezan en 0 hasta 65535*
- MEDIUMINT *permite números desde -8388608 hasta 8388607*
  - UNSIGNED *los valores posibles empiezan en 0 hasta 16777215*
- INT *permite números desde -2147483648 hasta 2147483647*
  - UNSIGNED *los valores posibles empiezan en 0 hasta 4294967295*
- BIGINT *permite números desde -9223372036854775808 hasta 9223372036854775807*
  - UNSIGNED *los valores posibles empiezan en 0 hasta 1844674407370955161*
- FLOAT *Pequeños flotantes*
  - *FLOAT(6,2) tendrá 4 dígitos enteros y 2 decimales, por ejemplo, 5467.67*
- DOUBLE *permite almacenar grandes números decimales*
  - *DOUBLE(5,1) tendrá 4 dígitos enteros y 1 dígito decimal, por ejemplo, 5467.1*
- DECIMAL *permite almacenar grandes números decimales de punto fijo, por tanto, los cálculos con este tipo DECIMAL son exactos*
  - El número máximo de dígitos es de 65
  - DECIMAL(20,6) quiere decir que tendrá 14 dígitos enteros y 4 dígitos decimales

**Texto**
- CHAR *sirve para almacenar una cadena de datos de longitud fija*
  - Longitud máxima 255
  - CHAR(50), será un campo de longitud fija de 50 posiciones
- VARCHAR *Sirve para almacenar una cadena de datos (caracteres, números y caracteres especiales) de longitud variable*
  - La longitud máxima es de 255 caracteres 
  - Hace un buen uso del espacio en disco, porque no reserva el espacio de la longitud máxima definida, si no que solo ocupa espacio el tamaño real de los datos almacenados en ese campo.
  - Es el tipo de dato más utilizado para campos pequeños
- TINYTEXT *Solo texto*
  - Máximo 255 carácteres 
- TEXT *para almacenar una cadena de caracteres de longitud máxima de 65,535 caracteres*
- BLOB *para almacenar datos de tipo BLOB (Binary Large Object)*
  - longitud máxima de 65,535 bytes de datos
- MEDIUMTEXT *Sirve para almacenar una cadena con una longitud máxima de 16.777.215 caracteres*
- MEDIUMBLOB *Sirve para almacenar datos tipo BLOB con longitud máxima 16.777.215 bytes*
- LONGTEXT *Sirve para almacenar una cadena de longitud máxima de 4.294.967.295 caracteres*
- LONGBLOB *Sirve para almacenar un BLOB de longitud máxima de de 4.294.967.295 byte*
- ENUM *Sirve para introducir una lista de posibles valores*
  - La longitud máxima es de 65.535 posibles valores
  - Si se intenta introducir un valor en este campo, que no esté incluido en la lista, no se insertará nada y tendrá un valor vacío ('')
  - Por ejemplo si definimos una columna como ENUM('uno', 'dos'), entonces en esta columna solo puede almacenar los valores 'uno' o 'dos'.
- SET *es similar a ENUM pero la longitud máxima de valores posibles es de 64, y los valores posibles se pueden combinar.*
- Por ejemplo, si definimos una columna como SET ('uno', 'dos) entonces esa columna podrá tomar los siguientes valores 'uno' o 'dos' o 'uno,dos', 'dos,uno'.

## SQL Básico

### SQL: Creación y gestión

**Crear una base de datos**
```sql
  CREATE DATATABASE mibasedeatos;
```

**Crear una tabla**
```sql
  CREATE TABLE Persons
  (
  PersonID int,
  LastName varchar(255),
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255)
  );
```
- [Ejemplo](http://www.w3schools.com/sql/trysql.asp?filename=trysql_create_table)

### SQL: Consultas Básicas

**SELECT - Realizar consultas**
- Traer todos los datos de una tabla
```sql
  SELECT * FROM nombretabla;
```
- Traer solo alguna columnas  de una tabla
```sql
  SELECT columna1, columna2 FROM nombretabla;
```

### SQL: Filtrado de datos

**WHERE - Condicciones de filtrado**
```sql
  SELECT * FROM personas 
  WHERE nombre = 'ANTONIO'
```

**AND OR - Condicciones lógicas**
- Sencillas
```sql
  SELECT * FROM personas 
  WHERE nombre = 'ANTONIO' 
  AND apellido1 = 'GARCIA'
```
- Combinadas
```sql
  SELECT * FROM personas 
  WHERE nombre = 'ANTONIO' 
  AND (apellido1 = 'GARCIA' OR apellido1 = 'LOPEZ')
```

**ORDER BY** - Ordenación
- Ascendente
```sql
  SELECT nombre, apellido1 
  FROM personas 
  ORDER BY apellido1 ASC;
```
- Descendiente
```sql
SELECT nombre, apellido1 
FROM personas 
ORDER BY apellido1 DESC;
```


### SQL: Añadiendo datos en la tabla
**Manteniendo el orden de las columnas**
```sql
INSERT INTO nombre_tabla 
VALUES (valor1, valor2, valor3);
```

**Alterando el orden de las columnas**
```sql
INSERT INTO nombre_tabla (columna1, columna2, columna3,.) 
VALUES (valor1, valor2, valor3);
```

### SQL: Actualizamos datos en la tabla

**Todas las filas**
```sql
UPDATE nombre_tabla 
SET columna1 = valor1, columna2 = valor2;
```

**Una fila especifica**
```sql
UPDATE personas 
SET apellido2 = 'RODRIGUEZ' 
WHERE nombre = 'ANTONIO' 
AND apellido1 = 'GARCIA' 
AND apellido2 = 'BENITO';
```


### SQL: Vaciamos datos en la tabla

**Todas los datos de una tabla**
```sql
  DELETE * FROM nombre_tabla;
```

**Una fila especifica**
```sql
  DELETE FROM personas 
  WHERE nombre = 'LUIS' 
  AND apellido1 = 'LOPEZ' 
  AND apellido2 = 'PEREZ';
```

**Con `truncate`**
```sql
  TRUNCATE TABLE nombretabla
```

### SQL: Eliminamos datos

**Índice**
```sql
  ALTER TABLE nombretabla 
  DROP INDEX nombreindice;
```

**Tabla**
```sql
  DROP TABLE nombretabla;
```

**Base de datos**
```sql
  DROP DATABASE nombrebasededatos;
```


## SQL Avanzado

### SQL Avanzado: Consultas Avanzadas

**LIMIT - Limitar la cantidad de resutlados de una consulta**
- Traer 2 filas de la tabla
```sql
  SELECT * FROM personas LIMIT 2;
```

**LIKE Y NOT LIKE - Limitar la cantidad de resutlados a un patrón (Wildcard)**
-  Aquellos apellidos que contengan "Z"
```sql
  SELECT * FROM personas 
  WHERE nombre LIKE '%Z%'; // que contenga una zeta
```
-  Aquellos apellidos que no contengan "le"
```sql
  SELECT * FROM personas 
  WHERE nombre NOT LIKE '%le%'; // que contenga una zeta
```
-  Aquellos apellidos que terminen en "l"
```sql
  SELECT * FROM personas 
  WHERE nombre LIKE '%l'; // que contenga una zeta
```
-  Aquellas personas cuyo apellido1 empiece por P o G
```sql
  SELECT * FROM personas 
  WHERE apellido1 LIKE '[PG]%';
```
-  Aquellas personas cuyo apellido1 tenga PE(x)EZ como PEREZ
```sql
  SELECT * FROM personas 
  WHERE apellido1 LIKE 'PE_EZ';
```

**IN - Seleccionar múltiples valores dentro de WHERE**
```sql
  SELECT * FROM personas 
  WHERE apellido1 
  IN ('PEREZ','RUIZ');
```


**BETWEEN y NOT BETWEEN - Seleccionar valores entre un rango de datos dentro de WHERE**
-  Seleccionar personas cuyo apellido1 esté entre 'FERNANDEZ y 'HUERTAS'
```sql
  SELECT * 
  FROM personas 
  WHERE apellido1 
  BETWEEN 'FERNANDEZ' AND 'HUERTAS';
```
-  Seleccionar personas cuyo apellido1 NO esté entre 'FERNANDEZ y 'HUERTAS'
```sql
  SELECT * 
  FROM personas 
  WHERE apellido1 
  NOT BETWEEN 'FERNANDEZ' AND 'HUERTAS';
```


**AS - Acortador de nombres**
```sql
  SELECT p.apellido1, p.apellido2 
  FROM personas 
  AS p 
  WHERE p.nombre = 'ANTONIO';
```

### SQL Avanzado: JOINS

![SQL_JOINS](../assets/clase81/6ba9d693-b4e8-4fe5-ae7a-7a16e8d92f2c.png)

Tipos:
- Interno
- Externo
- Cruzado

Usaremos [Northwind database](https://northwinddatabase.codeplex.com/)


**INNER JOIN**
- Juntamos ambas tablas y sustituimos el codigo del departamento por su nombre
- Join por defecto
- Query
```sql
  SELECT Customers.CustomerName, Orders.OrderID
  FROM Customers
  INNER JOIN Orders
  ON Customers.CustomerID=Orders.CustomerID
  ORDER BY Customers.CustomerName;
```
- [Ejemplo](http://www.w3schools.com/sql/trysql.asp?filename=trysql_select_join_inner)
- Resultado esperado
```
  ------------------------------------------------
  | CustomerName                       | OrderID |
   ----------------------------------------------
  | Ana Trujillo Emparedados y helados | 10308   |
  | Antonio Moreno Taquería            | 10365   |
  ------------------------------------------------
```

**LEFT JOIN**
- Devuelve todas las filas de la tabla de la izquierda, incluso si no coinciden con la tabla de la derecha
- Query
```sql
  SELECT Customers.CustomerName, Orders.OrderID
  FROM Customers
  LEFT JOIN Orders
  ON Customers.CustomerID=Orders.CustomerID
  ORDER BY Customers.CustomerName;
```
- [Ejemplo](http://www.w3schools.com/sql/trysql.asp?filename=trysql_select_join_left)
- Resultado esperado
```
  ------------------------------------------------
  | CustomerName                       | OrderID |
   ----------------------------------------------
  | Alfreds Futterkiste                | null    |
  | Ana Trujillo Emparedados y helados | 10308   |
  ------------------------------------------------
```


**RIGHT JOIN**
- Devuelve todas las filas de la tabla de la derecha, incluso si no coinciden con la tabla de la izquierda
- Query
```sql
  SELECT Orders.OrderID, Employees.FirstName
  FROM Orders
  RIGHT JOIN Employees
  ON Orders.EmployeeID=Employees.EmployeeID
  ORDER BY Orders.OrderID;
```
- [Ejemplo](http://www.w3schools.com/sql/trysql.asp?filename=trysql_select_join_right&ss=-1)
- Resultado esperado
```
  ------------------------
  | OrderID  | FirstName |
   -----------------------
  |          | Adam      |
  | 10248    | Steve     |
  ------------------------
```

**FULL OUTER JOIN**
- Devuelve todas las filas de la tabla de la derecha y de la izquierda  incluso si no coinciden
- Query
```sql
  SELECT Customers.CustomerName, Orders.OrderID
  FROM Customers
  FULL OUTER JOIN Orders
  ON Customers.CustomerID=Orders.CustomerID
  ORDER BY Customers.CustomerName;
```
- [Ejemplo](http://www.w3schools.com/sql/trysql.asp?filename=trysql_select_join_right&ss=-1)
- Resultado esperado
```
  ------------------------------------------------
  | CustomerName                       | OrderID |
   ----------------------------------------------
  | Alfreds Futterkiste                |         |
  | Ana Trujillo Emparedados y helados | 10308   |
  |                                    | 10382   |
  ------------------------------------------------
```

### SQL Avanzado: Juntar tablas sin JOINS
**Con Joins**
```sql
SELECT R.departamento, SUM(P.precio) FROM registradoras R 
JOIN ventas V ON R.id = V.registradora_id 
JOIN productos P ON P.id = V.producto_id
GROUP BY R.departamento;
```

**Sin Joins**
```sql
/* SIN JOIN  */
SELECT R.departamento, SUM(P.precio) 
FROM registradoras R, ventas V, productos P
WHERE R.id = V.registradora_id AND P.id = V.producto_id
GROUP BY R.departamento; 
```


### SQL Avanzado: Acumulación de resultados
**UNION - Acumula los resultados de dos sentencias SELECT**
-  Seleccionar personas cuyo apellido1 esté entre 'FERNANDEZ y 'HUERTAS'
```sql
  SELECT City FROM Customers
  UNION
  SELECT City FROM Suppliers
  ORDER BY City;
```
- [Ejemplo](http://www.w3schools.com/sql/trysql.asp?filename=trysql_select_union)


### SQL Avanzado: Copiando información de unas tablas a otras
**INTO**
- Copiando toda una tabla en otra
```sql
  SELECT * 
  INTO personasBackup 
  FROM personas;
```
- Copiando toda una tabla en otra base de datos
```sql
  SELECT * 
  INTO nuevatabla [IN nuevabasedatos] 
  FROM tablaactual;
```
- Copiando resultados filtrados de una tabla en otra
```sql
  SELECT * 
  INTO personasBackup 
  FROM personas 
  WHERE nombre = 'ANTONIO';
```
- Copiando el resutlado de un JOIN en otra tabla
```sql
  SELECT personas.nombre, personas.apellido1, departamentos.departamento 
  INTO personasInformatica 
  FROM personas INNER JOIN departamentos 
  ON personas.dep = 'INFORMATICA';
```
- [ejemplo](http://www.w3schools.com/sql/trysql.asp?filename=trysql_insert_into_select_where)


### SQL Avanzado: Restricciones
-  Limitan el tipo de dato que puede recibir una columna
**NOT NULL**
-  No acepta el valor NULL, siempre tiene que tener datos
```sql
  CREATE TABLE personas 
  { 
  nombre varchar(255) NOT NULL, 
  apellido1 varchar(255) NOT NULL, 
  apellido2 varchar(255) 
  };
```

**UNIQUE**
- Evita que se use el mismo dato en entre las filas de una columna. Ideal para identificadores
```sql
  CREATE TABLE personas
  { 
  identificador int NOT NULL, 
  nombre varchar(255) NOT NULL,
  apellido1 varchar(255) NOT NULL,
  apellido2 varchar(255),
  UNIQUE (identificador)
  };
```
- Crear una id en una tabla ya creada previamente
```sql
  ALTER TABLE Persons
  ADD UNIQUE (P_Id);
```
- Eliminar la Restricción
```sql
  ALTER TABLE Persons
  DROP INDEX uc_PersonID
```



**PRIMARY KEY**
- Clave primaria en una columna
```sql
  CREATE TABLE personas 
  { 
    identificador int NOT NULL, 
    nombre varchar(255) NOT NULL, 
    apellido1 varchar(255) NOT NULL, 
    PRIMARY KEY (identificador) 
  };
```
- Clave primaria usando multiples columnas
```sql
  CREATE TABLE personas 
  { 
    identificador int NOT NULL, 
    nombre varchar(255) NOT NULL, 
    apellido1 varchar(255) NOT NULL, 
    CONSTRAINT pers PRIMARY KEY (identificador, nombre) 
  };
```

**FOREIGN KEY**
- Relaciona la clave primaria de otra tabla
```sql
  CREATE TABLE departamentos 
  { 
  dep int NOT NULL PRIMARY KEY, 
  departamento varchar(255), 
  };
  
  CREATE TABLE personas 
  { 
  per int NOT NULL PRIMARY KEY, 
  nombre varchar(255), 
  apellido1 varchar(255), 
  dep int FOREIGN KEY REFERENCES departamentos (dep) 
  };
```

**CHECK**
- Verifica que los valores cumplen ciertas condicciones antes de ser incluidos
```sql
  CREATE TABLE Persons
  (
  P_Id int NOT NULL,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255),
  CHECK (P_Id>0)
  );
```

**DEFAULT**
- Valor por defecto
```sql
  CREATE TABLE Persons
  (
  P_Id int NOT NULL,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255) DEFAULT 'Sandnes'
  );
```
- Valor por defecto usando funciones
```sql
  CREATE TABLE Orders
  (
  O_Id int NOT NULL,
  OrderNo int NOT NULL,
  P_Id int,
  OrderDate date DEFAULT GETDATE()
  );
```


### SQL Avanzado: Índices

**Acelerando las búsquedas (pueden repetirse los valores de la columna)**
```sql
CREATE INDEX nombreindice 
ON nombretabla (nombrecolumna);
```

**Acelerando las búsquedas (NO pueden repetirse los valores de la columna)**
```sql
CREATE UNIQUE INDEX nombreindice 
ON nombretabla (nombrecolumna);
```

**Índices en múltiples columnas**
```sql
CREATE INDEX indice2personas 
ON personas(apellido1, apellido2);
```


### SQL Avanzado: Autoincremento

**Crear tabla con autoincremento**
```sql
CREATE TABLE personas 
{ 
  persona int NOT NULL AUTO_INCREMENT, 
  nombre varchar(255), 
  apellido1 varchar(255), 
  apellido2 varchar(255) 
};
```

**Autoincremento partiendo de un número diferente a 0**
```sql
ALTER TABLE personas AUTO_INCREMENT=100;
```


### SQL Avanzado: Usando Vistas, una tabla virtual
**Crear una vista**
```sql
CREATE VIEW [personas que se llaman ANTONIO] AS 
SELECT nombre, apellido1, apellido2,edad 
FROM personas 
WHERE nombre = 'ANTONIO';
```

**Consultar la vista**
```sql
SELECT * FROM [personas que se llama ANTONIO]
```

**Remplazar la vista**
```sql
REPLACE VIEW [personas que se llama ANTONIO] AS 
SELECT nombre, apellido1, apellido2, edad 
FROM personas 
WHERE edad > 20;
```

**Eliminar la vista**
```sql
DROP VIEW nombrevista;
```

### SQL Avanzado: Fechas

**Funciones**
- [NOW()](http://www.w3schools.com/sql/func_now.asp)	*Devuelve la fecha actual y la hora*
- [CURDATE()](http://www.w3schools.com/sql/func_curdate.asp)	*Devuelve la fecha actual*
- [CURTIME()](http://www.w3schools.com/sql/func_curtime.asp)	*devuelve la hora actual*
- [DATE()](http://www.w3schools.com/sql/func_date.asp)	*Extrae la fecha de un dato tipo fecha*
- [EXTRACT()](http://www.w3schools.com/sql/func_extract.asp)	*Extrae una parte concreta (año, dia, hora, etc..) de un dato tipo fecha*
- [DATE_ADD()](http://www.w3schools.com/sql/func_date_add.asp)	*Añade un tiempo determinado a una fecha en el formato deseado*
- [DATE_SUB()](http://www.w3schools.com/sql/func_date_sub.asp)	*Resta un tiempo determinado a una fecha en el formato deseado*
- [DATEDIFF()](http://www.w3schools.com/sql/func_datediff_mysql.asp)	*Devuelve el periodo entre dos fechas*
- [DATE_FORMAT()](http://www.w3schools.com/sql/func_date_format.asp)	*Devuelve formatos personalizados en las fechas*

**Ejemplo**
```sql
CREATE TABLE pedidos 
( 
  idpedido int NOT NULL, 
  nombreproducto varchar(50) NOT NULL, 
  fechapedido datetime NOT NULL 
  PRIMARY KEY (idpedido) 
);
```


### SQL Avanzado: NULL

**Filtrando por `NULL`**
```sql
SELECT * FROM personas WHERE apellido2 IS NULL
```

**Evitando `NULL`**
```sql
SELECT * FROM personas WHERE apellido2 IS NOT NULL
```

**Sustituyendo `NULL`**
```sql
SELECT producto, 
preciounidad * (unidadesstock + IFNULL(unidadespedido, 0) 
FROM productos;
```

### SQL Avanzado: Funciones de escalado
- `UCASE()` Convierte a mayúsculas
- `LCASE()` Convierte a minúsculas
- `MID()` Extrae los carácteres
- `LEN()` Devuelve la logitud de un texto
- `ROUND()` Redondea al número de decimales especificados
- `NOW()` Retorna la hora y fecha actual del sistema
- `FORMAT()` Define como se ofrmatearán los campos

### SQL Avanzado: Funciones de agregado
- `AVG()` Retorna el promedio
- `COUNT()` Retorna el número de filas
- `FIRST()` Retorna el primer/os valor/es
- `LAST()` Retorna el último/s valor/es
- `MAX()` Retorna el valor mayor
- `MIN()` Retorna el valor menos
- `SUM()` Suma

### SQL Avanzado: Agrupadores
**Agrupa contenidos**
```sql
SELECT Shippers.ShipperName,COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders
LEFT JOIN Shippers
ON Orders.ShipperID=Shippers.ShipperID
GROUP BY ShipperName;
```





### SQL: Seguridad

**Clasico ejemplo**
```javascript
//Código vulnerable
const consulta = `SELECT * FROM usuarios WHERE nombre = '${nombreUsuario}';`;

// Comporptamiento esperado...
nombreUsuario = "Yo Mismo"

// Hack...
nombreUsuario = "'; DROP TABLE usuarios; SELECT * FROM datos WHERE nombre LIKE '%"
```


**Recursos**
- [Wikipedia | Inyección SQL](https://es.wikipedia.org/wiki/Inyecci%C3%B3n_SQL)
- [OWASP | Inyección SQL](https://www.owasp.org/index.php/Inyecci%C3%B3n_SQL)
- [Github MySQL | Escaping query values](https://github.com/mysqljs/mysql#escaping-query-values)
- [Common Node.js Attack Vector: SQL Injection](https://medium.com/intrinsic/common-node-js-attack-vectors-sql-injection-b8b65ca78b68)
- [Secure Node Apps Against OWASP Top 10 - Injection](http://scottksmith.com/blog/2015/06/08/secure-node-apps-against-owasp-top-10-injection/)
- [How to Prevent SQL injection in Node Js](http://www.technicalkeeda.com/nodejs-tutorials/how-to-prevent-sql-injection-in-nodejs)


### MySQL

![logo img](../assets/clase81/3c85821b-a774-4eb8-b377-1d42a82acaa1.png)


**Documentación**
- [Web Oficial](https://www.mysql.com/)
- [Why MySQL?](https://www.mysql.com/why-mysql/)
- [Case Studies](https://www.mysql.com/why-mysql/case-studies/)
- [MySQL Performance Tuning and Optimization Resources](https://www.mysql.com/why-mysql/performance/index.html)
- [Benchmarks](https://www.mysql.com/why-mysql/performance/index.html)
- [White Papers](https://www.mysql.com/why-mysql/white-papers/)
- [Documentación](https://dev.mysql.com/doc/)
- [MySQL 8.0 Reference Manual](https://dev.mysql.com/doc/refman/8.0/en/)
- [Github | Awesome MySQL](https://shlomi-noach.github.io/awesome-mysql/)

**Uso en Nodejs**
- [mysqljs/mysql](https://github.com/mysqljs/mysql)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://www.npmjs.com/package/sequelize)

```javascript
import mysql from 'mysql';
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
```


**Recursos**
- [w3School | Node.js MySQL](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
- [Using MySQL with Node.js and the mysql JavaScript Client](https://www.sitepoint.com/using-node-mysql-javascript-client/)
- [Build a simple app using Node JS and MySQL](https://dev.to/achowba/build-a-simple-app-using-node-js-and-mysql-19me)
- [MySQL Node.js](http://www.mysqltutorial.org/mysql-nodejs/)
- [Node.js and MySQL tutorial](https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/)
- [Create a MySQL Database Middleware with Node.js 8 and Async/Await](https://medium.com/@matthagemann/create-a-mysql-database-middleware-with-node-js-8-and-async-await-6984a09d49f4)
- [Top 3 MySQL drivers for NodeJS application](https://www.eversql.com/top-3-mysql-drivers-for-nodejs-application/)
- [Express DOC | Integración de la base de datos](http://expressjs.com/es/guide/database-integration.html#mysql)
- [Make a NodeJS API with mySQL](http://stayregular.net/blog/make-a-nodejs-api-with-mysql)
- [Node.js + MySQL Example: Handling 100's of GigaBytes of Data](https://blog.risingstack.com/node-js-mysql-example-handling-hundred-gigabytes-of-data/)


### MariaDB

![IMG](../assets/clase81/0d23662e-70e2-493b-a8d0-94b0c8095cf1.png)

**Documentación**
- [Web Oficial](https://mariadb.org/)
- [Download](https://mariadb.org/download/)
- [Learn](https://mariadb.org/learn/)
- [Useful MariaDB Queries](https://mariadb.com/kb/en/library/useful-mariadb-queries/)
- [A 10-minute MariaDB primer](https://mariadb.com/kb/en/mariadb/a-mariadb-primer/)
- [List of basic SQL statements](https://mariadb.com/kb/en/mariadb/basic-sql-statements/)
- [Introduction to JOINS](https://mariadb.com/kb/en/mariadb/introduction-to-joins/)
- [Guides and whitepapers](https://mariadb.com/resources/guides-whitepapers)
- [@mariadb en Twitter](https://twitter.com/mariadb)


**Uso en Nodejs**

```javascript
const mariadb = require('mariadb');
const pool = mariadb.createPool({host: 'mydb.com', user:'myUser', connectionLimit: 5});

async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT 1 as val");
	console.log(rows); //[ {val: 1}, meta: ... ]
	const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}
```

**Recursos**
- [A Simple Web Server in Node.js with a MariaDB Backend](https://thiscouldbebetter.wordpress.com/2015/08/21/a-simple-web-server-in-node-js-with-a-mariadb-backend/)

### PostgreSQL

![IMG](../assets/clase81/180418a5-1090-4e2d-bab3-cd421a1a6ba1.jpeg)

**Documentación**
- [Web Oficial](https://www.postgresql.org/)
- [About](https://www.postgresql.org/about/)
- [Download](https://www.postgresql.org/download/)
- [Community](https://www.postgresql.org/community/)
- [Developers](https://www.postgresql.org/developer/)
- [Support](https://www.postgresql.org/support/)

**Uso en Nodejs**
- [node-postgres(PG)](https://node-postgres.com/)

```javascript
const { Client } = require('pg')
const client = new Client()

await client.connect()

const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()
```

**Recursos**
- [PostgreSQL and NodeJS](https://mherman.org/blog/postgresql-and-nodejs/)
- [¿Cómo usar bases de datos Postgres con Node.js?](https://ed.team/blog/como-usar-bases-de-datos-postgres-con-nodejs)
- [Cómo crear un API JSON en PostgreSQL con NodeJS](https://platzi.com/blog/postgresql-nodejs/)
- [Getting Started with Node, Express and Postgres Using Sequelize](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)
- [PostgreSQL NodeJS Tutorial](https://linuxhint.com/postgresql-nodejs-tutorial/)
- [Back-end Basics with Node.js, PostgreSQL, Sequelize, and FeathersJS](https://blog.cloudboost.io/back-end-basics-with-node-js-postgresql-sequelize-and-feathersjs-7ed89b3cd353)
- [Stackoverflow | How to make connection to Postgres via Node.js](https://stackoverflow.com/questions/9205496/how-to-make-connection-to-postgres-via-node-js)
- [How to build a Node.js API using Postgres, Lambda and API Gateway](https://medium.com/dailyjs/how-to-build-a-node-js-api-using-postgres-lambda-and-api-gateway-3211a4570cea)
- [Node.js GraphQL & PostgreSQL Quickstart](https://medium.com/@james_mensch/node-js-graphql-postgresql-quickstart-91ffa4374663)
- [Deploying a Node.js + PostgreSQL app to Heroku](https://medium.com/@aem_iro/deploying-a-node-js-postgressql-app-to-heroku-hosting-platform-cc611287ae76)
- [Node Hero - Node.js Database Tutorial](https://blog.risingstack.com/node-js-database-tutorial/)