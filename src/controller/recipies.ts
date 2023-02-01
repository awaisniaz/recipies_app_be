import { Request, Response } from 'express'
import recipesModel from '../models/recipies'
export const recipes_controller = {
    add_recipies: (req: Request, res: Response) => {
        res.send({
            "message": "Recipies Created Successfully",
            data: req?.body
        })


    }
}