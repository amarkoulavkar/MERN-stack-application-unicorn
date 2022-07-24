let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Student Model
let ItemSchema = require('../Models/Item')

// CREATE Student
router.route('/create-item').post((req, res, next) => {
  ItemSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Students
router.route('/').get((req, res) => {
  ItemSchema.find((error, data) => {
    if (error) {
      // eslint-disable-next-line no-undef
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit-item/:id').get((req, res) => {
  ItemSchema.findById(req.params.id, (error, data) => {
    if (error) {
      // eslint-disable-next-line no-undef
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-item/:id').put((req, res, next) => {
  ItemSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    },
  )
})

// Delete Student
router.route('/delete-item/:id').delete((req, res, next) => {
  ItemSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
