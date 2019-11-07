
const express = require('express')

const episodeApi = require('../models/episode.js')


const episodeRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

//getAll
episodeRouter.get('/', (req, res) => {
  episodeApi.getAllEpisodes()
    .then((episodes) => {
      res.json(episodes)
    })
})

//getOne
episodeRouter.get('/:episodeId', (req, res) => {
  episodeApi.getEpisode(req.params.episodeId)
    .then((singleEpisode) => {
      res.json(singleEpisode)
    })
})

//create
episodeRouter.post('/', (req, res) => {
  episodeApi.addNewEpisode(req.body)
    .then((newEpisode) => {
      res.json(newEpisode)
    })
})

//update
episodeRouter.put('/:episodeId', (req, res) => {
  episodeApi.updateEpisode(req.params.episodeId, req.body)
    .then((updatedEpisode) => {
      res.json(updatedEpisode)
    })
})

//delete
episodeRouter.delete('/:episodeId', (req, res) => {
  episodeApi.deleteEpisode(req.params.episodeId)
    .then((deletedEpisode) => {
      res.json(deletedEpisode)
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  episodeRouter
}
