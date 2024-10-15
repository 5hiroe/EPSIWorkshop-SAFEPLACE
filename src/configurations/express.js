import express from 'express'
import 'express-async-errors'
import errorHandler from '../helpers/error_handler.js'
import reportRoutes from '../routes/report.js'

/**
 * Express configuration.
 */
export async function configure (app) {
  app.use(cors())
  app.use(express.static('public'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use('/report', reportRoutes)
  app.use(errorHandler)
  console.log('Express Initialized.')
}
