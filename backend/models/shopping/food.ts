"use strict";

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    item_id:{type: Number, isRequired: true},
    name: { type: String, isRequired: true },
    description: { type: String, default: "" },
    image_path: String,
    rating: { type: Number, default: 0 },
});

export const product = mongoose.model("Product", productSchema);
