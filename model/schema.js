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
        unique: true
    }
})

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema)

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    images: [
        {
            id: String,
            url: String
        }
    ],
    explanation: {
        type: String,
        required: true
    },
    productCode: {
        type: String,
        required: true,
        unique: true
    },
    properties: [
        {
            name: String
        }
    ],
    variants: [
        {
            type: Array,
            required: true
        }
    ],
    comments: [
        {
            owner: String,
            comment: String,
            date: Date,
            applied: Boolean
        }
    ]
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)

const referanceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    images: [
        {
            id: String,
            url: String
        }
    ],
    reflink: {
        type: String,
        required: true
    }
})

const Referance = mongoose.models.Referance || mongoose.model('Referance', referanceSchema)

export { User, Category, Product, Referance }
