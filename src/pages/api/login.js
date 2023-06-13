import { withIronSessionApiRoute } from 'iron-session/next'
import { ironOptions } from '../../../lib/iron-config'
import connect from '../../../lib/mongodb'
import User from '../../../model/schema'
import { userData } from '../../../lib/utils'

connect()

export default withIronSessionApiRoute(handler, ironOptions)

async function handler(req, res) {
  const { username, password } = req.body

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, error: 'Not all fields have been entered.' })
  }

  const user = await User.findOne({ username: username })

  if (!user) {
    return res
      .status(400)
      .json({ success: false, error: 'No account with this username.' })
  }

  if (user.password !== password) {
    return res
      .status(400)
      .json({ success: false, error: 'Invalid credentials.' })
  }

  req.session.user = userData(user)

  await req.session.save()

  // console.log(req.session)

  return res.status(200).json({ success: true })
}
