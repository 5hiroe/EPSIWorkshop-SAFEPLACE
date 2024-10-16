import express from 'express'
import * as reportController from '../controllers/report.js'
import * as jwt from '../middlewares/jwt.js'

const router = express.Router()

router.post('/', reportController.create)
router.get('/', reportController.getAll)
router.get('/:id', reportController.get)
router.put('/forward/:id', jwt.verify, reportController.forward)

export default router
