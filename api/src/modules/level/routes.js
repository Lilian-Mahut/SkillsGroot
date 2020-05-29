import express from "express"

import LevelController from "./controller"
import authorize from "../../helpers/authorize"

const router = express.Router()

router.put('/update/', LevelController.updateLevel)
router.get('/', LevelController.getAll)

export default router
