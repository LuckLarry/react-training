const express = require('express')

const userRouter = require('./user')

const app = express()
app.use('/user',userRouter)
app.listen(9093,function(){
	console.log('server start at port 9093')
})


// const DB_URL = 'mongodb://localhost:27017/imooc'

// mongoose.connect(DB_URL)
// mongoose.connection.on('connected',function(){
// 	console.log('mongo connnect success')
// })

// const User = mongoose.model('user',new mongoose.Schema({
// 	user:{type:String,require:true},
// 	age:{type:Number,require:true}
// }))

// //新增数据
// User.create({
// 	user:'小明',
// 	age:12
// },function(err,doc){
// 	if(!err){
// 		console.log(doc)
// 	}else{
// 		console.log(err)
// 	}
// })
// //新增数据
// User.remove({age:18},function(err,doc){
// 	console.log(doc)
// })
// //更新数据
// User.update({user:'小明'},{'$set':{age:26}},function(err,doc){
// 	console.log(doc)
// })

// app.get("/",function(req,res){
// 	res.send("aaaaa")
// })

// app.get('/data',function(req,res){
// 	User.findOne({user:'小明'},function(err,doc){
// 		res.json(doc)
// 	})
// })




