import mongoose from 'mongoose'

/**
 * Mongo configuration.
 */
export async function configure (app) {
  return mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log('Mongo Initialized')
    })
    .catch((error) => {
      console.log('Mongo Failed: ', error)
    })
}
