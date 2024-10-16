import Validator from './validator.js'
import Joi from 'joi'

export default class AdminValidator extends Validator {
    create = Joi.object({
        fields: Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(128).required()
        })
    })

    login = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(128).required()
    })
}