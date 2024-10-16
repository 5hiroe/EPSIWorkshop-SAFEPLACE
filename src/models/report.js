import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    content: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment: { type: String },
    status: { type: String, default: 'pending' },
    url: { type: String },
    tbfDate: { type: Date },
    approvingDate: { type: Date },
    forwardedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
  },
  { timestamps: true }
)

export default mongoose.model('Report', schema)
