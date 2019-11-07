
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
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

episodeRouter.get('/byShowId/:showId', (req, res) => {
    episodeApi.getEpisodebyShowId(req.params.showId)
        .then((singleEpisode) => {
            res.json(singleEpisode)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//getOne
episodeRouter.get('/:episodeId', (req, res) => {
    episodeApi.getEpisode(req.params.episodeId)
        .then((singleEpisode) => {
            res.json(singleEpisode)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//create
episodeRouter.post('/', (req, res) => {
    episodeApi.addNewEpisode(req.body)
        .then((newEpisode) => {
            res.json(newEpisode)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//update
episodeRouter.put('/:episodeId', (req, res) => {
    episodeApi.updateEpisode(req.params.episodeId, req.body)
        .then((updatedEpisode) => {
            res.json(updatedEpisode)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//delete
episodeRouter.delete('/:episodeId', (req, res) => {
    episodeApi.deleteEpisode(req.params.episodeId)
        .then((deletedEpisode) => {
            res.json(deletedEpisode)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
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
