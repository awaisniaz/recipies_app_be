import mongoose from "mongoose";
const recipies = new mongoose.Schema({
    name: String,
    description: String,
    ingredients: [String],
    type: String,
    categories: String,
    photos: [String]

},
    {
        timestamps: true
    }
)

const recipesModel = mongoose.model('Recipies', recipies)
export default recipesModel