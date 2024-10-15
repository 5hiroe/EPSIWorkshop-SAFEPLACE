import * as express from './express.js'
import * as mongo from './mongo.js'

export async function configure (app) {
  await express.configure(app)
  await mongo.configure(app)
  await schedules.configure()
}

export default configure
