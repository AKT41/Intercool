import connect from './mongodb'
import { User } from '../model/schema'

connect()

export function userData(user) {
    return {
        username: user.username,
        password: user.password
    }
}

export function checkAuth(req, res) {
    if (req.session.user) {
        let { username, password } = req.session.user
        let dbUser = User.findOne({ username: username })
        if (dbUser.password === password) {
            return true
        }
        return false
    }
    return false
}
