import {Bear} from "../models/bear.js";

export const getAllBears = async (req, res) => {
    try {
        const bears = await Bear.find()
        res.json(bears)
    } catch (e) {
        console.log(e)
    }
}

export const uploadBear = async (req, res) => {
    try {
        const newImage = await Bear.create(req.body)
        console.log(newImage)
        newImage.save()
    } catch (e) {
        console.log(e)
    }
}