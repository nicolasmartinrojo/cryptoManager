# CryptoManager

## instrucciones para instalar

```
$ cd server
$ npm i
$ cd ../client
$ npm i
```

## conectar a la base de datos

- Crear una base de datos
- importar el dump.sql que se encuentra dentro de server/
- configurar los datos de usuario, contraseña y nombre de la bdd dentro de server/db.ts(el sitio se desarrolló con el motor mysql pero en caso de probarlo con otro motor debería instalarse usando `npm install sqlite`(o el que se necesite). Knex lo debería soportar pero no fue probado en otros)

## Correr el sitio

#### Para correr el servidor

```
$ cd server
$ npm run dev
```

_el comando build dejó de funcionar luego de instalar jest, para el momento no se pudo arreglar, pero en este caso el comando sería `npm run build && npm run start`_

#### Para correr el cliente

```
$ cd client
$ npm run start
```

## Tests

Para correr los tests(actualmente no contiene tests solo el mock de knex y DAL)

```
$ cd server
$ npm run test
```
