
import recipesModel from "../models/recipies"
// import { GraphQLUpload } from 'graphql-upload'
export const recipies_resolver = {
    // Upload: GraphQLUpload,
    Query: {
        add_recipies: async (parent: any, args: any, context: any) => {
            const newItem = new recipesModel({ ...args?.input })
            console.log(args?.input?.ingredients)
            newItem.ingredients = args?.input?.ingredients?.split(',')
            const response = await newItem.save()
            console.log(response)
            if (response) {
                return response
            }

            else {
                return "Please try Again Something Went Wrong"
            }


        },
        getRecipies: async () => {
            const recipies = await recipesModel?.find()
            console.log(recipies)
            if (recipies) {
                return recipies
            }
            else {
                return "Some technical Error Please Try Again"
            }
        }
    },
    // Mutation: {
    //     uploadImages: async (parent, args) => {
    //         const { file } = args
    //         return file


    //     }
    // }
}