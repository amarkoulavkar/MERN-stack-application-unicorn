let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Student Model
let AddEntrySchema = require('../Models/add-entry')

// CREATE Student
router.route('/add-entry').post((req, res, next) => {
  AddEntrySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})
 
module.exports = router
