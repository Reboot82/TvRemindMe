
const express = require('express')

const serviceApi = require('../models/service.js')


const serviceRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

//getAll
serviceRouter.get('/', (req, res) => {
  serviceApi.getAllServices()
    .then((services) => {
      res.json(services)
    })
    .catch(error => {
      console.log(error)
      res.json(error)
    })
})

//getOne
serviceRouter.get('/:serviceId', (req, res) => {
  serviceApi.getService(req.params.serviceId)
    .then((singleService) => {
      res.json(singleService)
    })
    .catch(error => {
      console.log(error)
      res.json(error)
    })
})

//create
serviceRouter.post('/', (req, res) => {
  serviceApi.addNewService(req.body)
    .then((newService) => {
      res.json(newService)
    })
    .catch(error => {
      console.log(error)
      res.json(error)
    })
})

//update
serviceRouter.put('/:serviceId', (req, res) => {
  serviceApi.updateService(req.params.serviceId, req.body)
    .then((updatedService) => {
      res.json(updatedService)
    })
    .catch(error => {
      console.log(error)
      res.json(error)
    })
})

//delete
serviceRouter.delete('/:serviceId', (req, res) => {
  serviceApi.deleteService(req.params.serviceId)
    .then((deletedService) => {
      res.json(deletedService)
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
  serviceRouter
}
