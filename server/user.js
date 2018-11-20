const express = require('express')
const utils = require('utility')
const Router = express.Router()
const models = require('./model')

const User = models.getModel('user')

Router.get('/list',function (req,res) {
	User.find({},function (err,doc) {
		return res.json(doc)
    })
})

Router.post('/register',function(req,res){
    const {user,pwd,type} = req.body
    User.findOne({user:user},function (err,doc) {
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        User.create({user,type,pwd:utils.md5(pwd)},function(e,d){
            if(e){
                return res.json({code:1,msg:'后端出错'})
            }
            return res.json({code:0})
        })
    })
})
Router.get('/info',function(req,res){
	
	res.json("aaa")
})

function md5Pwd(pwd){
    const salt = 'andy'
    return utils.md5(pwd+salt)
}

module.exports = Router