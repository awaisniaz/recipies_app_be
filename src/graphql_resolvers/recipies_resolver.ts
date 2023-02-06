
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
        },
        getRecipiesById: async (parent: any, args: any, context: any) => {
            const id = args.input.id
            console.log(id)
            const recipie = await recipesModel.findOne({ _id: id })
            if (recipie) {
                return recipie
            }

            return {}

        }
    },
    // Mutation: {
    //     uploadImages: async (parent, args) => {
    //         const { file } = args
    //         return file


    //     }
    // }
}