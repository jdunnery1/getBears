import { Router } from 'express'
import {getAllBears, uploadBear} from "../controllers/bear.controller.js";

const router = Router()

router.get('/', getAllBears)
router.post('/uploadBear', uploadBear)

export default router