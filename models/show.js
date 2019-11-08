
const mongoose = require('./connection.js')

const ShowSchema = new mongoose.Schema({
  name: String,
  location: String,
  serviceId: mongoose.Types.ObjectId
})

const ShowCollection = mongoose.model('Show', ShowSchema)

//getAll
const getAllShows = () => {
  return ShowCollection.find()
}
//getOne
const getShow = (showId) => {
  return ShowCollection.findById(showId)
}
//create
const addNewShow = (newShow) => {
  return ShowCollection.create(newShow)
}
//update
const updateShow = (showId, updatedShow) => {
  return ShowCollection.updateOne({ _id: showId }, updatedShow)
}
//delete
const deleteShow = (showId) => {
  return ShowCollection.deleteOne({ _id: showId })
}


module.exports = {
  getAllShows,
  getShow,
  addNewShow,
  updateShow,
  deleteShow
}
