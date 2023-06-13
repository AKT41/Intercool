import { withIronSessionApiRoute } from 'iron-session/next'
import { ironOptions } from '../../../lib/iron-config'
import connect from '../../../lib/mongodb'
import { User, Category } from '../../../model/schema'
import { checkAuth, userData } from '../../../lib/utils'

connect()

export default withIronSessionApiRoute(handler, ironOptions)

async function handler(req, res) {
    if (!checkAuth(req, res)) {
        return res.status(401).json({ success: false, error: 'Unauthorized.' })
    }
    const { name } = req.body

    if (!name) {
        return res.status(400).json({ success: false, error: 'Not all fields have been entered.' })
    }

    const category = await Category.findOne({ name: name })

    if (category) {
        return res.status(400).json({ success: false, error: 'Category already exists.' })
    }


    const newCategory = new Category({
        name: name
    })

    await newCategory.save()
    

}
