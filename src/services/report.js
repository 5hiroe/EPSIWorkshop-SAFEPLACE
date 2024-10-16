import ReportModel from '../models/report.js'
import { NotFound } from '../globals/errors.js'

export default class ReportService {
  constructor () {
    if (ReportService.instance instanceof ReportService) {
      return ReportService.instance
    }
    Object.freeze(this)
    ReportService.instance = this
  }

  async create ({ fields }) {
    // TODO : Add Premium User Login feature
    fields.status = 'pending'
    const reportModel = await new ReportModel({ fields })
    await reportModel.save()
    return reportModel
  }

    async getAll () {
        const reports = await ReportModel.find()
        return reports
    }

    async getOne ({ id }) {
        const report = await ReportModel.findById(id)
        if (!report) {
            throw new NotFound('Signalement inexistant.')
        }
        return report
    }

    async forward ({ id, adminId }) {
        const report = await ReportModel.findById(id)
        if (!report) {
            throw new NotFound('Signalement inexistant.')
        }
        report.status = 'tbf'
        report.forwardedBy = adminId
        report.tbfDate = Date.now()
        await report.save()
        return report
    }

    async approve ({ id, adminId }) {
        const report = await ReportModel.findById(id)
        if (!report) {
            throw new NotFound('Signalement inexistant.')
        }
        report.status = 'approved'
        report.approvedBy = adminId
        report.approvedDate = Date.now()
        await report.save()
        return report
    }
}
