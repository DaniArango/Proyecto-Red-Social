module.exports = {
    components: {
        securitySchemes: {
            ApiKeyAuth: {
                type: "apiKey",
                name: "Authorization",
                in: "header"
            }
        },
        schemas: {
            users: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'objectId',
                        description: "Identificacion de usuario por Id",
                        example: "63722c0c96ee496559a2e0c2"
                    },
                    name: {
                        type: 'string',
                        description: "User name",
                        example: "DaniAr"
                    },
                    email: {
                        type: "string",
                        description: "correo de usuario",
                        example: "user@gmail.com"
                    },
                    password: {
                        type: "string",
                        description: "Contraseña de usuario",
                        example: "123456"
                    },
                    user_img: {
                        type: "string",
                        description: "Imagen",
                        example: "uploads/users_images/image.png"
                    },
                    tokens: {
                        type: "array",
                        description: "Tokens de la sesión",
                        example: []
                    },
                    postIds: {
                        type: "array",
                        description: "Array con los ids de las publicaciones",
                        example: []
                    }
                }
            },
            posts: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'objectId',
                        description: "Publicación id",
                        example: "6371600cec13ad9d2ebac300"
                    },
                    title: {
                        type: 'string',
                        description: "Titulo de la publicación",
                        example: "Title 1"
                    },
                    body: {
                        type: "string",
                        description: "Contenido de la publicación",
                        example: "This is the body of a post"
                    },
                    userId: {
                        type: "objectId",
                        description: "Id de usuario",
                        example: "63722c0c96ee496559a2e0c2"
                    },
                    post_img: {
                        type: "string",
                        description: "Path to post image",
                        example: "uploads/posts_images/image.png"
                    },
                    likes: {
                        type: "array",
                        description: "ids de usuarios y sus likes",
                        example: []
                    },
                    comments: {
                        type: "array",
                        description: "ids de usuarios y sus comentarios",
                        example: []
                    }
                }
            },
            userInput: {
                type: "object",
                properties: {
                    username: {
                        name: "name",
                        schema: {
                            type: "string",
                        },
                        in: "formData",
                        description: "nombre",
                    },
                    email: {
                        name: "email",
                        schema: {
                            type: "string",
                        },
                        in: "formData",
                        description: "correo de usuario",
                    },
                    password: {
                        name: "password",
                        schema: {
                            type: "string",
                        },
                        in: "formData",
                        description: "contraseña de usuario",
                    },
                    user_img: {
                        name: "user_img",
                        type: "file",
                        in: "formData",
                        description: "Imagen de usuario",
                    }
                }
            },
            postInput: {
                type: "object",
                properties: {
                    title: {
                        name: "title",
                        schema: {
                            type: "string",
                        },
                        in: "formData",
                        description: "titulo de la publicación",
                    },
                    body: {
                        name: "body",
                        schema: {
                            type: "string",
                        },
                        in: "formData",
                        description: "comentario en publicacion",
                    },
                    post_img: {
                        name: "post_img",
                        type: "file",
                        in: "formData",
                        description: "imagen de la publicacion",
                    }
                }
            },
            commentInput: {
                type: "object",
                properties: {
                    body: {
                        name: "body",
                        schema: {
                            type: "string",
                        },
                        in: "formData",
                        description: "contenido en comentario",
                    },
                    comment_img: {
                        name: "comment_img",
                        type: "file",
                        in: "formData",
                        description: "imagen del comentario",
                    }
                }
            }
        }
    }
}