import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    content: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment: { type: String },
    status: { type: String, default: 'pending' },
    url: { type: String }
  },
  { timestamps: true }
)

export default mongoose.model('Report', schema)
