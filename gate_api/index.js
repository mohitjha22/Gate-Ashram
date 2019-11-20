const joi=require('joi');
const express=require('express');
const _=require('underscore');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

//from routes folder
const home=require('./routes/home');
//const subjects=require('./routes/subjects');

const app=express();

app.set('view engine','pug');
app.set('views','./views');

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// in routes folder
// app.use('/:branch/subjects',function (req, res,next) {
//   console.log(req.params.branch);
//   next();
// },subjects);
app.use('/',home);

//connecting to the db
mongoose.connect('mongodb+srv://root:root@gateashramcluster-ddwdn.mongodb.net/GateQuestionBank?retryWrites=true&w=majority')
	.then(()=>console.log('connected to MongoDB...'))
	.catch(err => console.error('could not connect to MongoDB...',err));

////schema for subject collections in the db
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

//to get the subjects of a particular branch
app.get('/:branch/subjects',function(req,res){

	//async-await fuction
	async function getSubjects(){
		//const branch="CSE";
		const branch=req.params.branch;
		console.log(branch);
		//querying the db
		const Query = mongoose.model(branch,branchSchema,branch);
		const info= await Query.find();

		res.send(info);
		//console.log(info);

	}

	getSubjects();
});

//to get the topics of a subject of a particular branch
app.get('/:subject/topics',function(req,res){

	//async-await fuction
	async function getTopics(){

		const branch=req.params.branch;
		const subject=req.params.subject;

		//querying the db
		const Query = mongoose.model(subject,subjectSchema,subject);
		const info= await Query.distinct("Topic");

		//converting the array into json array.
		const json=[];
		for(let i=0;i<info.length;i++){
			var text = '{ "topic": "'+info[i]+'"}';
			json.push(JSON.parse(text));
		}

		res.send(json);
		//console.log(info);

	}

	getTopics();
});
// git initialized
//to get the practice questions of a particular topic of a subject of a branch
app.get('/:branch/subjects/:subject/:topic/practice',function(req,res){

	const branch = req.params.branch;
	const subject = req.params.subject;
	const topic = req.params.topic;

	//async-await function
	async function getPracticeQuestionsTopicwise(){

		//try-catch to see if the model is already made.
		let Sub;
		try {
			Sub = mongoose.model(subject);
		} catch (error) {
			Sub = mongoose.model(subject,subjectSchema,subject);
		}
		//to query db.
		const info= await Sub.find({'Topic':topic}).sort({Gate_Year:1});
		

		//console.log(info);
		res.send(info);
	}

	getPracticeQuestionsTopicwise();
});

//to get all the practice questions of all topics of a subject of a branch
app.get('/:subject/practice',function(req,res){

	const branch = req.params.branch;
	const subject = req.params.subject;

	//async-await function
	async function getPracticeQuestionsSubjectwise(){

		//try-catch to see if the model is already made.
		let Sub;
		try {
			Sub = mongoose.model(subject);
		} catch (error) {
			Sub = mongoose.model(subject,subjectSchema,subject);
		}

		const info=await Sub.find().sort({Gate_Year:1});

		//console.log(info);
		res.send(info);
	}

	getPracticeQuestionsSubjectwise();
});

//to get all the practice questions of a year of a branch
app.get('/:branch/:year/practice',function(req,res){

	const branch = req.params.branch;
	const year = req.params.year;

	//async-await function
	async function getPracticeQuestionsYearwise(){

		//querying the db to get all subjects of the given branch
		const Query = mongoose.model(branch,branchSchema,branch);
		const subjects= await Query.find();

		const info=[];

		//collecting all questions of the given year from all subjects
		for(let i=0;i<subjects.length;i++){
			const subject=subjects[i].subject;

			//try-catch to see if the model is already made.
			let Sub;
			try {
				Sub = mongoose.model(subject);
			} catch (error) {
				Sub = mongoose.model(subject,subjectSchema,subject);
			}

			const questions=await Sub.find().sort({Gate_Year:1});
			
			for(let j=0;j<questions.length;j++){
				info.push(questions[j]);
			}
		}

		//console.log(info);
		res.send(info);
	}

	getPracticeQuestionsYearwise();
});


const port=process.env.PORT||3000;
app.listen(port,function(){
	console.log("listening at port "+port+"...");  
});
