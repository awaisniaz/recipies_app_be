import mongoose from 'mongoose';

const db_connection = async () => {
    return await mongoose.connect("mongodb://127.0.0.1:27017/recipies")
}
db_connection().then(() => {
    console.log("Congurates !!!!!!!!!!!")
}).catch((err) => {
    console.log(err)
})