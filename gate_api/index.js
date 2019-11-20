//dependencies
const joi=require('joi');
const express=require('express');
const _=require('underscore');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

//from routes folder
const home=require('./routes/home');
const practice=require('./routes/practice');
const subjects=require('./routes/subjects');
const topics=require('./routes/topics');

const app=express();

app.set('view engine','pug');
app.set('views','./views');

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// in routes folder
app.use('/',home);
app.use('/practice',practice);
app.use('/subjects',subjects);
app.use('/topics',topics);

//connecting to the db
mongoose.connect('mongodb+srv://root:root@gateashramcluster-ddwdn.mongodb.net/GateQuestionBank?retryWrites=true&w=majority')
	.then(()=>console.log('connected to MongoDB...'))
	.catch(err => console.error('could not connect to MongoDB...',err));

//schema for subject collections in the db
const subjectSchema = new mongoose.Schema({ 
	Question: String,
	Option_A: String,
	Option_B: String,
	Option_C: String,
	Option_D: String,
	Gate_Year: String,
	Answer: String,
	Topic: String,
	Marks: String,
	Img: String
});


//schema for branch collections in the db
const branchSchema = new mongoose.Schema({ 
	subject:String
});

// git initialized


const port=process.env.PORT||3000;
app.listen(port,function(){
	console.log("listening at port "+port+"...");  
});
