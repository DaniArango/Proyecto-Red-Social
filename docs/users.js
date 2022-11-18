module.exports = {
    paths: {
        "/createUser": {
            post: {
                tags: ["users"],
                security: [{
                    ApiKeyAuth: []
                }],
                description: "Crear un usuario.",
                operationId: "createUser",
                consumes: "multipart/form-data",
                parameters: [],
                requestBody: {
                    body: {
                        "multipart/form-data": {
                            schema: {
                                $ref: "#/components/schemas/userInput",
                            },
                        },
                    },
                },

                responses: {
                    201: {
                        description: "Usuario creado de manera exitosa",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/users",
                                },
                            },
                        },
                    },
                    
                    400: {
                        description: "No es posible crear usuario"
                    }
                },
            },
        },
        "/users/getAll": {
            get: {
                tags: ["users"],
                description: "Trae todos los usuarios",
                operationId: "getAllusers",
                parameters: [],
                responses: {
                    200: {
                        description: "Todos los usuarios",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/posts",
                                },
                            },
                        },
                    },
                    500: {
                        description: "Problema al traer los usuarios"
                    }
                },
            },
        },
        "/users/login": {
            post: {
                tags: ["users"],
                description: "Usuario conectado",
                operationId: "login",
                parameters: [],
                requestBody: {
                    body: {
                        "application/json": {
                            schema: {
                                properties: {
                                    email: {
                                        type: "string",
                                        example: "email@gmail.com"
                                    },
                                    password: {
                                        type: "string",
                                        example: "123456"
                                    }
                                },
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Coneccion exitosa",
                        body: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        message: {
                                            type: "string",
                                            example: "Bienvenid@"
                                        },
                                        token: {
                                            type: "string",
                                            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc0ZGEzZGRmNDk1NjI3MDVjOTI5N2UiLCJpYXQiOjE2Njg2ODk0MTR9.oEeI5iEKgKs-n7xS2H2ytOzu48sWd0afQSQVKXvTK3Y"
                                        },

                                    },
                                },
                            },
                        },
                    },
                    400: {
                        description: "Correo o contraseña incorrectos"
                    },
                    500: {
                        description: "Problema al conectarse",
                    },
                },
            }
        },
        "/users/logout": {
            delete: {
                tags: ["users"],
                security: [{
                    ApiKeyAuth: []
                }],
                description: "Usuario desconectado",
                operationId: "logOut",
                parameters: [],
                responses: {
                    201: {
                        description: "Desconectado con éxito",
                        body: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        message: {
                                            type: "string",
                                            example: "Desconectado con éxito"
                                        }
                                    },
                                },
                            },
                        },
                    },
                    
                    500: {
                        description: "Hubo un problema al intentar desconectar al usuario",
                    },
                },
            }
        },
        "/users/getUsersByName/{name}": {
            get: {
                tags: ["users"],
                description: "Encontrar usuario por nombre",
                operationId: "getUsersByname",
                parameters: [{
                    name: "name",
                    schema: {
                        type: "string",
                    },
                    in: "path",
                    description: "name query",
                }],
                responses: {
                    200: {
                        description: "Usuario encontrado",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/users",
                                },
                            },
                        },
                    },
                    500: {
                        description: "No es posible traer al usuario"
                    }
                },
            },
        },
        "/getUserById/{_id}": {
            get: {
                tags: ["users"],
                description: "Encontrar usuario por Id",
                operationId: "getUsedById",
                parameters: [{
                    name: "_id",
                    schema: {
                        type: "objectId",
                    },
                    in: "path",
                    description: "Id de usuario",
                }],
                responses: {
                    200: {
                        description: "Usuario encontrado",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/users",
                                },
                            },
                        },
                    },
                    500: {
                        description: "Este usuario no se encuentra/ no existe"
                    }
                },
            },
        },
        "/users/userUpdate/:{_id}": {
            put: {
                tags: ["users"],
                description: "Actualizar usuario",
                operationId: "userUpdate",
                parameters: [],
                responses: {
                    200: {
                        description: "Actualizado con exito",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/posts",
                                },
                            },
                        },
                    },
                    500: {
                        description: "Error al actualizar usuario"
                    }
                },
            },
        },
        "/users/info":  {
            get: {
                tags: ["users"],
                description: "Ontener informacion de publicaciones y comentarios",
                operationId: "info",
                parameters: [],
                responses: {
                    200: {
                        description: "Informacion encontrada",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/posts",
                                },
                            },
                        },
                    },
                    500: {
                        description: "Error al buscar informacion"
                    }
                },
            },
        }
    }
}