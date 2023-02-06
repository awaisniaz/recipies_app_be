import express from 'express';
import { recipes_controller } from '../controller/recipies';
import upload from '../middlewares/multer-settings';
const router = express.Router()

router.post('/add_recipies', recipes_controller?.add_recipies)
router.post('/add_recipies_image', upload.single('file'), recipes_controller?.uploadPhotos)
export default router;