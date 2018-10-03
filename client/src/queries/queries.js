import { gql } from 'apollo-boost';

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const addBookMutation = gql`
    mutation {
        addBook(name: "",genre: "",author: "") {
            name
            id
        }
    }
`

export { getAuthorsQuery, getBooksQuery, addBookMutation };