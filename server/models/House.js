import { Schema } from "mongoose";


export const HouseSchema = new Schema(
    {
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        levels: { type: Number, default: 1 },
        price: {type: Number, required: true},
        description: {type: String, default: "It's a house"}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)