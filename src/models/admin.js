import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    email: { type: String, },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String }
  },
  { timestamps: true }
)

export default mongoose.model('Admin', schema)
