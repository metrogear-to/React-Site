import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    colorway: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    gender: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    isFeatured: { type: Boolean, required: true },
    isBestSeller: { type: Boolean, required: true },
    isSold: { type: Boolean, required: true },
    dateSold: { type: Date },
    quality: { type: String },
    onSale: { type: Boolean }
},
{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product