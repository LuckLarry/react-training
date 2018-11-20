const express = require('express')
const Router = express.Router()
const models = require('./model')

const User = models.getModel('user')

Router.get('/list',function (req,res) {
	User.find({},function (err,doc) {
		return res.json(doc)
    })
})
Router.get('/info',function(req,res){
	
	res.json("aaa")
})


module.exports = Router