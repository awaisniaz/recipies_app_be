import { gql } from 'apollo-server-express'

export const recipiesTypeDef = gql`
input add_recipies_data {
    name:String,
    desciption:String,
    ingredients:String,
    type:String,
    categories:String,
    photo:String
}
type add_recipies_data_output {
    name:String,
    desciption:String,
    ingredients:[String],
    type:String,
    categories:String,
    photo:String
}
type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
type Query{
    add_recipies(input:add_recipies_data):add_recipies_data_output,
    getRecipies:[add_recipies_data_output]
}
`