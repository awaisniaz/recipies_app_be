import { Request, Response } from 'express'
import recipesModel from '../models/recipies'
export const recipes_controller = {
    add_recipies: (req: Request, res: Response) => {
        res.send({
            "message": "Recipies Created Successfully",
            data: req?.body
        })


    },
    uploadPhotos: async (req: any, res: Response) => {

        if (!req.file) {
            console.log("No file received");
            return res.send({
                success: false
            });

        } else {
            console.log(req?.file)
            const recipies = await recipesModel.findOne({
                _id: "63da1b17dbe6be75a9a40740"
            })
            recipies.photos = [...recipies.photos, "http://localhost:3000/" + req?.file?.path]
            console.log(recipies)
            await recipies.save()
            console.log('file received');
            return res.send({
                success: true
            })
        }
    }
}