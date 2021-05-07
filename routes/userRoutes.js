import express from 'express'
const router = express.Router()
import { getUsers } from '../controller/userController.js'

router.route('/').get(getUsers)

export default router
