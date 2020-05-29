import express from "express"

import UserController from "./controller"
import authorize from "../../helpers/authorize"

const router = express.Router()

// Private routes, only accessible by admin rights
router.get('/', UserController.getAll)
router.get('/:id', UserController.getById)

// Public routes
router.post('/authenticate', UserController.authenticate)
router.post('/register', UserController.register)

export default router
