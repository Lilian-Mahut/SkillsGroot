import express from "express"
import SkillController from "./controller"
//import authorisation from "../../helpers/authorisation"

const router = express.Router()

router.get('/', SkillController.skills)
router.get('/:id', SkillController.skill)

export default router
