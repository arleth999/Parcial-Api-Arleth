
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Personajes de Genshin Impact',
            version: '1.0.0',
            description: 'Una API para gestionar información de personajes de Genshin Impact, conectada a SQL Server.',
        },

    },
    apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerDocs;
