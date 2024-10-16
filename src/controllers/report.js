import ReportService from '../services/report.js'
import ReportValidator from '../validators/report.js'
const ReportServiceInstance = new ReportService()
const ReportValidatorInstance = new ReportValidator()

export async function create(req, res) {
  const { body } = req
  ReportValidatorInstance.validate(body, ReportValidatorInstance.create)
  const { fields } = body
  const report = await ReportServiceInstance.create({ fields })
  return res.status(200).json({ report, message: 'Votre signalement a bien été pris en compte !' })
}

export async function getAll(req, res) {
    const reports = await ReportServiceInstance.getAll()
    return res.status(200).json({ reports })
}

export async function get(req, res) {
    const { params } = req
    ReportValidatorInstance.validate(params, ReportValidatorInstance.getOne)
    const { id } = params
    const report = await ReportServiceInstance.getOne({ id })
    return res.status(200).json({ report })
}