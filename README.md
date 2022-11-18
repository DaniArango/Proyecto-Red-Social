# Introduccion #
En este proyecto de backend se han combinado los conocimientos adquiridos en las
tecnologías node + express, además de MongoDB/mongoose.

Este proyecto consiste en la creación de una red social.


# Descripción #
Este proyecto conciste en la creacion de una API REST que es capaz de lo siguiente:

➮ Registro de usuarios usando Bcrypt.
➮ Login de usuarios + token + middleware.
➮ Capaz de crear un CRUD.
➮ Dar/quitar Like a post.
➮ Backend disponible en producción.


# 🔨🔧 Tecnologias aplicadas #

➮ Nodemon
➮ MongoDB
➮ Mongoose
➮ Express
➮ Bcrypt
➮ JWT
➮ Dotenv
➮ Postman
➮ VsCode
➮ Git / GitHub


# Endpoints #
## Posts ##
➮ Endpoint para crear un post
➮ Endpoint para actualizar un post 
➮ Endpoint para eliminar un post
➮ Endpoint para traer todos los posts junto a los usuarios que hicieron ese post y junto a los comentarios del post
➮ Endpoint para buscar post por nombre
➮ Endpoint para buscar post por id
➮ Validación a la hora de crear un post para que se rellene todos los campos  y si no se hace nos devuelve un       mensaje
➮ Paginación de 10 en 10

### Likes: ### 

➮ Endpoint para dar un like a un post
➮ Endpoint para quitar like a un post

### Comments ### 
➮ Endpoint para crear un comentario en un determinado post

### Usuarios ### 
➮ Endpoint para registrar un usuario utilizando bcrypt
➮ Endpoint para login(utilizando bcrypt +JWT)
➮ Endpoint que nos trae la información del usuario conectado
➮ Endpoint para el logout
➮ Validación a la hora de crear un usuario para que se rellene todos los campos  y si no se hace nos devuelve un  mensaje devuelva un mensaje


# Funcionalidad #

En esta API, podras crear un usuario y eliminarlo, crear publicaciones, comentarios y dar like o dislike a tu gusto,
se podra tambien buscar cada usuario ya sea por su Id o por su nombre, al igual que las publicaciones, y por ultimo, podras tambien logearte, ser administrador y desloguearte.



![foto](../Proyecto%20Red%20Social/assest/All%20posts.gif)


![foto](../Proyecto%20Red%20Social/assest/All%20users.gif)


![foto](../Proyecto%20Red%20Social/assest/login.gif)