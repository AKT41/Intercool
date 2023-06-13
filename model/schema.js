import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: {
            unique: true,
            collation: { locale: 'en', strength: 2 }
        }
    },
    password: {
        type: String,
        required: true
    }
})
const User = mongoose.models.User || mongoose.model('User', userSchema)

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    products: [
        {
            name: {
                type: String,
                required: true,
                unique: true,
        
            },
            images: [
                {
                    id: String,
                    url: String,
        
                }
            ],
            explanation: {
                type: String,
                required: true,
            },
            productCode: {
                type: String,
                required: true,
                unique: true,
            },
            properties: [
                {
                    name: String,
                }
            ],
            variants: [
                
        }
    ]
})

export default User
