import express from 'express';
import { recipes_controller } from '../controller/recipies';
const router = express.Router()

router.post('/add_recipies', recipes_controller?.add_recipies)
export default router;