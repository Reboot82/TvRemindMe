
const mongoose = require('./connection.js')

const ServiceSchema = new mongoose.Schema({
  name: String,
})

const ServiceCollection = mongoose.model('Service', ServiceSchema)

//getAll
const getAllServices = () => {
  return ServiceCollection.find()
}
//getOne
const getService = (serviceId) => {
  return ServiceCollection.findById(serviceId)
}
//create
const addNewService = (newService) => {
  return ServiceCollection.create(newService)
}
//update
const updateService = (serviceId, updatedService) => {
  return ServiceCollection.updateOne({ _id: serviceId }, updatedService)
}
//delete
const deleteService = (serviceId) => {
  return ServiceCollection.deleteOne({ _id: serviceId })
}


module.exports = {
  getAllServices,
  getService,
  addNewService,
  updateService,
  deleteService
}
