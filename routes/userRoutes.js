import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import User from '../model/userModel.js'

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await User.find({})

    res.json(users)
  })
)

export default router
