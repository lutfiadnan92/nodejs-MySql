const express = require('express')
const user = require('../controller/controller')

module.exports = (app, express)=>{
const router = express()

//user/tambah
router.route('/user/').post(user.Create)
//user/
router.route('/user').get(user.getAll)

//user/:nama
router.route('/user/:nama').get(user.findByName)

//user/update
router.route('/user/').put(user.Update)

//user/delete
router.route('/user/:id').delete(user.Delete)

return router
}