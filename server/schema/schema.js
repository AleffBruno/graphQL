const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

var books = [
    {name:'Name of wind',genre:'Fantasy',id:'1'},
    {name:'Life of fire',genre:'Action',id:'2'},
    {name:'World the earth',genre:'Romance',id:'3'}
]

var authors = [
    {name:'Jose',age:23,id:'1'},
    {name:'Xinco',age:34,id:'2'},
    {name:'Wallas',age:45,id:'3'}
]


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
         id: {type: GraphQLID},
         name: {type: GraphQLString},
         genre: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent,args){
                //code to get date from db / other source
                return _.find(books,{ id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})