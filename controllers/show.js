
const express = require('express')

const showApi = require('../models/show.js')


const showRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

//getAll
showRouter.get('/', (req, res) => {
  showApi.getAllShows()
    .then((shows) => {
      res.json(shows)
    })
    .catch(error => {
      console.log(error)
      res.json(error)
    })
})

//getOne
showRouter.get('/:showId', (req, res) => {
  showApi.getShow(req.params.showId)
    .then((singleShow) => {
      res.json(singleShow)
    })
    .catch(error => {
      console.log(error)
      res.json(error)
    })
})

//create
showRouter.post('/', (req, res) => {
  showApi.addNewShow(req.body)
    .then((newShow) => {
      res.json(newShow)
    })
    .catch(error => {
      console.log(error)
      res.json(error)
    })
})

//update
showRouter.put('/:showId', (req, res) => {
  showApi.updateShow(req.params.showId, req.body)
    .then((updatedShow) => {
      res.json(updatedShow)
    })
    .catch(error => {
      console.log(error)
      res.json(error)
    })
})

//delete
showRouter.delete('/:showId', (req, res) => {
  showApi.deleteShow(req.params.showId)
    .then((deletedShow) => {
      res.json(deletedShow)
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
  showRouter
}
