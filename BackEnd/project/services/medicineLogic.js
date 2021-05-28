const Medicine = require("../models/medicine")

const createNewMedicine = async (req,res)=> {
    console.log(req.body)
    const medicine = new Medicine(req.body)
    const result = await medicine.save()
    .catch((err)=> console.log(err))
    res.send(result)
}

const deleteMedicine = async (req,res)=> {
    console.log(req.body)
    const medicine = new Medicine(req.body)
    const result = await medicine.deleteOne()
    .catch((err)=> console.log(err))
    res.send(result)
}

const getMedicine = async (req,res)=> {
    console.log(req.body)
    const result = await Medicine.find()
    .catch((err)=> console.log(err))
    res.send(result)
}



exports.createNewMedicine = createNewMedicine
exports.deleteMedicine = deleteMedicine
exports.getMedicine = getMedicine
