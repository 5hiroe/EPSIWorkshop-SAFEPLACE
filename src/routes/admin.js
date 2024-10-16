import express from 'express'
import * as adminController from '../controllers/admin.js'
import * as jwt from '../middlewares/jwt.js'

const router = express.Router()

router.post('/create', adminController.create)
router.post('/login', adminController.login)
router.post('/logout', jwt.verify, adminController.logout)

export default router
