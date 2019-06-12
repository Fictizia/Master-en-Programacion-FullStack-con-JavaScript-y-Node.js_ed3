### Api-Rest MovieFire
Api-Rest construida con la base de datos Firebase. Permite gestionar datos que provienen de la api de omdb para la gestión de la búsqueda/visualización de una película, la creación de la misma, la edición de su título, la visualización de los detalles de la película y el borrado en la base de datos.

#### Dependencias
- Express
- Firebase
- Cors (librería)
- Helmet
- BodyParser
- Validator

### Datos
- Api de omdb (http://www.omdbapi.com)
- Firebase Realtime DB

### Rutas y métodos
- [GET] /api/movies
- [GET] /api/movies/:id
- [POST] /api/movies
- [PUT] /api/movies
- [DELETE] /api/movies

#### NPM Scripts
- "lint": "standard",
- "lint:fix": "standard --fix",
- "serve:dev": "nodemon server.js",
- "start": "node server.js"

### Inicialización
Para iniciarlizar la api, abrir en localhost:3000 y correr el script 'npm run serve:dev'.
Configura tu fichero config.js con tus apikeys :-)

#### Próximas tareas
- Corregir la gestión de los prompts
- Gestión de errores
- Normalización de los datos