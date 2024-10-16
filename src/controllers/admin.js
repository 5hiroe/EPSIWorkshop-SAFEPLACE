import AdminService from '../services/admin.js'
import AdminValidator from '../validators/admin.js'
const AdminServiceInstance = new AdminService()
const AdminValidatorInstance = new AdminValidator()

export async function create(req, res) {
    const { body } = req
    AdminValidatorInstance.validate(body, AdminValidatorInstance.create)
    const { fields } = body
    const jwt = await AdminServiceInstance.create({ fields })
    return res.status(200).json({ jwt, message: 'L\'administrateur a bien été créé !' })
}

export async function login(req, res) {
    const { body } = req
    AdminValidatorInstance.validate(body, AdminValidatorInstance.login)
    const { email, password } = body
    const jwt = await AdminServiceInstance.login({ email, password })
    return res.status(200).json({ jwt, message: 'Vous êtes connecté !' })
}

export async function logout(req, res) {
    const { jwt } = req.jwt
    AdminServiceInstance.logout({ jwt })
    return res.status(200).json({ message: 'Vous êtes déconnecté !' })
}