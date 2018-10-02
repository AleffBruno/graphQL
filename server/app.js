const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin rquest
app.use(cors());

//aqui eu poderia usar um async/await pra nao precizar 'adivinhar qd a conexao estara OK'
mongoose.connect('mongodb://hue102030:hue102030@ds259711.mlab.com:59711/ndstr');
mongoose.connection.once('open',() => {
    console.log('connected to DB');
})

app.use('/graphql',graphqlHTTP({
    // poderia usar somente 'schema' pois a chave é = o valor
    schema: schema,
    graphiql: true
}));

app.listen(4000,()=>{
    console.log('l on 4k');
})