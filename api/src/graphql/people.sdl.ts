export const schema = gql`
  type Person {
    id: Int!
    fullName: String!
    firstName: String!
    preferredName: String!
    lastName: String!
    email: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    people: [Person!]! @requireAuth
    person(id: Int!): Person @requireAuth
  }

  input CreatePersonInput {
    fullName: String!
    firstName: String!
    preferredName: String!
    lastName: String!
    email: String!
  }

  input UpdatePersonInput {
    fullName: String
    firstName: String
    preferredName: String
    lastName: String
    email: String
  }

  type Mutation {
    createPerson(input: CreatePersonInput!): Person! @requireAuth
    updatePerson(id: Int!, input: UpdatePersonInput!): Person! @requireAuth
    deletePerson(id: Int!): Person! @requireAuth
  }
`
