
const express = require('express')

const showApi = require('../models/show.js')


const showRouter = express.Router()


//getAll
showRouter.get('/', (req, res) => {
  showApi.getAllShows()
    .then((shows) => {
      res.json(shows)
    })
})

//getOne
showRouter.get('/:showId', (req, res) => {
  showApi.getShow(req.params.showId)
    .then((singleShow) => {
      res.json(singleShow)
    })
})

//create
showRouter.post('/', (req, res) => {
  showApi.addNewShow(req.body)
    .then((newShow) => {
      res.json(newShow)
    })
})

//update
showRouter.put('/:showId', (req, res) => {
  showApi.updateShow(req.params.showId, req.body)
    .then((updatedShow) => {
      res.json(updatedShow)
    })
})

//delete
showRouter.delete('/:showId', (req, res) => {
  showApi.deleteShow(req.params.showId)
    .then((deletedShow) => {
      res.json(deletedShow)
    })
})

module.exports = {
  showRouter
}
