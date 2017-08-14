'use strict'

const jsonParser = require('body-parser').json()
const profileRouter = (module.exports = new require('express').Router())

const ExpenseCategory = require('../model/profile.js')

profileRouter.post('/api/profiles', jsonParser, (req, res, next) => {
  console.log(req.body)
  console.log('hit POST /api/profiles')
  new ExpenseCategory(req.body)
    .save()
    .then(profile => res.json(profile))
    .catch(next)
})

profileRouter.get('/api/profiles/:id', (req, res, next) => {
  console.log('hit GET /api/profiles/:id')
  ExpenseCategory.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(next)
})

profileRouter.put('/api/profiles/:id', jsonParser, (req, res, next) => {
  console.log('hit PUT /api/profiles/:id', req.params)
  ExpenseCategory.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(profile => {
      res.json(profile)
    })
    .catch(next)
})
