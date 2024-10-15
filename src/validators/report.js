import Validator from './validator.js'
import Joi from 'joi'

export default class ReportValidator extends Validator {
    create = Joi.object({
        fields: Joi.object({
            content: Joi.string().required(),
            comment: Joi.string(),
            uri: Joi.string().required()
        }).required()
    })

    getOne = Joi.object({
        id: Joi.string().required()
    })
}