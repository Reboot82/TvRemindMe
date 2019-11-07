
const mongoose = require('./connection.js')

const EpisodeSchema = new mongoose.Schema({
 name: String,
 watchedEpisode: false
})

const EpisodeCollection = mongoose.model('Episode', EpisodeSchema)

//getAll
const getAllEpisodes = () => {
  return EpisodeCollection.find()
}
//getOne
const getEpisode = (episodeId) => {
  return EpisodeCollection.findById(episodeId)
}
//create
const addNewEpisode = (newEpisode) => {
  return EpisodeCollection.create(newEpisode)
}
//update
const updateEpisode = (episodeId, updatedEpisode) => {
  return EpisodeCollection.updateOne({_id: episodeId}, updatedEpisode)
}
//delete
const deleteEpisode = (episodeId) => {
  return EpisodeCollection.deleteOne({_id: episodeId})
}


module.exports = {
  getAllEpisodes,
  getEpisode,
  addNewEpisode,
  updateEpisode,
  deleteEpisode
}
