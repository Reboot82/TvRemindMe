
const mongoose = require('./connection.js')

const EpisodeSchema = new mongoose.Schema({
    name: String,
    watchedEpisode: Boolean,
    showId: mongoose.Types.ObjectId
})

const EpisodeCollection = mongoose.model('Episode', EpisodeSchema)

//getAll
const getAllEpisodes = () => {
    return EpisodeCollection.find()
}

const getEpisodebyShowId = (showId) => {
    return EpisodeCollection.find({ showId })
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
    return EpisodeCollection.updateOne({ _id: episodeId }, updatedEpisode)
}
//delete
const deleteEpisode = (episodeId) => {
    return EpisodeCollection.deleteOne({ _id: episodeId })
}


module.exports = {
    getAllEpisodes,
    getEpisode,
    addNewEpisode,
    updateEpisode,
    deleteEpisode,
    getEpisodebyShowId
}
