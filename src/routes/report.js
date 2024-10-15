import express from 'express'
import * as reportController from '../controllers/report.js'

const router = express.Router()

router.post('/', reportController.create)
router.get('/', reportController.getAll)
router.get('/:id', reportController.get)

export default router
