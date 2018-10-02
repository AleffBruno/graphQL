const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql',graphqlHTTP({
    // poderia usar somente 'schema' pois a chave é = o valor
    schema: schema,
    graphiql: true
}));

app.listen(3000,()=>{
    console.log('l on 3k');
})