import { encrypt, decrypt } from '../helpers/encryption.js'
import { Forbidden, NotFound } from '../globals/errors.js'
import AdminModel from '../models/admin.js'
import JWTService from './jwt.js'
const JWTServiceInstance = new JWTService()

export default class AdminService {
    constructor () {
        if (AdminService.instance instanceof AdminService) {
        return AdminService.instance
        }
        Object.freeze(this)
        AdminService.instance = this
    }

    async create ({ fields }) {
        fields.password = encrypt(fields.password)
        const isAdmin = await AdminModel.findOne({ email: fields.email })
        if (isAdmin) {
            throw new Forbidden('Cet eMail est déjà utilisé.')
        }
        const admin = await new AdminModel({ ...fields })
        await admin.save()
        const jwt = JWTServiceInstance.generate({ id: admin._id })
        return jwt
    }

    async login ({ email, password }) {
        const admin = await AdminModel.findOne({ email })
        if (!admin) {
            throw new NotFound('eMail ou Mot de passe incorrect.')
        }
        if (decrypt(admin.password) !== password) {
            throw new Forbidden('eMail ou Mot de passe incorrect.')
        }
        const jwt = JWTServiceInstance.generate({ id: admin._id })
        return jwt
    }

    logout ({ jwt }) {
        JWTServiceInstance.remove(jwt)
      }
}
