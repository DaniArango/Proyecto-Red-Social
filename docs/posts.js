module.exports = {
    paths: {
        "/createposts": {
            post: {
                tags: ["posts"],
                security: [{
                    ApiKeyAuth: []
                }],
                description: "Crear una publicacion.",
                operationId: "createPost",
                consumes: "multipart/form-data",
                parameters: [],
                requestBody: {
                    body: {
                        "multipart/form-data": {
                            schema: {
                                $ref: "#/components/schemas/postInput",
                            },
                        },
                    },
                },

                responses: {
                    201: {
                        description: "Post created",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/posts",
                                },
                            },
                        },
                    },
                    201: {
                        description: "Publicación realizada con exito"
                    },
                    400: {
                        description: "No es posible crear la publicación"
                    }
                },
            },
        },
        "/posts/getAll": {
            get: {
                tags: ["posts"],
                description: "Traer publicaciones con autor y comentarios",
                operationId: "getAllPosts",
                parameters: [],
                responses: {
                    200: {
                        description: "Todas las publicaciones",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/posts",
                                },
                            },
                        },
                    },
                    500: {
                        description: "Problema al traer publicaciones"
                    }
                },
            },
        },
        "/posts/update/:_id": {
            put: {
                tags: ["posts"],
                description: "Actualizar publicaciones",
                operationId: "update",
                parameters: [],
                responses: {
                    200: {
                        description: "Publicación actualizada con exito",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/posts",
                                },
                            },
                        },
                    },
                    500: {
                        description: "No se ha podido actualizar la publicación"
                    }
                },
            },
        },
        "/posts/deletePost/:_id": {
            delete: {
                tags: ["posts"],
                description: "Eliminar publicaciones",
                operationId: "deletePost",
                parameters: [],
                responses: {
                    200: {
                        description: "Publicación eliminada",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/posts",
                                },
                            },
                        },
                    },
                    500: {
                        description: "No se ha podido eliminar la publicación"
                    }
                },
            },
        },
        "/posts/getById/{_id}": {
            get: {
                tags: ["posts"],
                description: "Encontrar publicación por su Id",
                operationId: "getById",
                parameters: [{
                    name: "_id",
                    schema: {
                        type: "objectId",
                    },
                    in: "path",
                    description: "Id de publicación",
                }],
                responses: {
                    200: {
                        description: "Publicación encontrada",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/posts",
                                },
                            },
                        },
                    },
                    404: {
                        description: "No ha sido posible ver su publicación"
                    },
                },
            },
        },
        "/posts/getPostByName/{name}": {
            get: {
                tags: ["posts"],
                description: "Encuentra publicacion por su nombre",
                operationId: "getPostByName",
                parameters: [{
                    name: "title",
                    schema: {
                        type: "string",
                    },
                    in: "path",
                    description: "Title query",
                }],
                responses: {
                    200: {
                        description: "Publicacion encontrada",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/posts",
                                },
                            },
                        },
                    },
                    500: {
                        description: "No ha sido posible ver su publicación"
                    }
                },
            },
        },
        "/posts/comments/{_id}": {
            put: {
                tags: ["posts"],
                description: "comentario creado",
                operationId: "comments",
                parameters: [{
                    name: "title",
                    schema: {
                        type: "string",
                    },
                    in: "path",
                    description: "Title query",
                }],
                responses: {
                    200: {
                        description: "comentario creado",
                        body: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/posts",
                                },
                            },
                        },
                    },
                    500: {
                        description: "Hay un problema con tu comentario"
                    }
                },
            },
        },
        "/posts/likes/{_id}": {
            put: {
                tags: ["posts"],
                security: [{
                    ApiKeyAuth: []
                }],
                description: "Dar like a una publicacion, identificando al autor",
                operationId: "Likes",
                consumes: "multipart/form-data",
                parameters: [ 
                    {
                        name: "_id",
                        schema: {
                            type: "objectId",
                        },
                        in: "path",
                        description: "Id en la publicación",
                    }
                ],
                responses: {
                    201: {
                        description: "Like exitoso",
                        body: {
                            "text/plain": {
                                schema: {
                                    type: "string",
                                    example: "Se ha dado like correctamente"
                                },
                            },
                        },
                    },
                   
                    500: {
                        description: "Hay un problema con tu like"
                    }
                },
            },
        },
        "/posts/disLike/{_id}": {
            delete: {
                tags: ["posts"],
                security: [{
                    ApiKeyAuth: []
                }],
                description: "El usuario debe estar autenticado, de lo contrario no elimina like",
                operationId: "dislike",
                parameters: [ 
                    {
                        name: "_id",
                        schema: {
                            type: "objectId",
                        },
                        in: "path",
                        description: "Id en publicación",
                    }
                ],
                responses: {
                    201: {
                        description: "dislike exitoso",
                        body: {
                            "text/plain": {
                                schema: {
                                    type: "string",
                                    example: "Ya no te gusta esta publicacion"
                                },
                            },
                        },
                    },
            
                    500: {
                        description: "Hubo un problema al quitar tu like"
                    }
                },
            },
        }
    }  
};