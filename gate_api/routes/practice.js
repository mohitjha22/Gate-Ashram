const mongoose = require('mongoose');
const express= require('express');
const router= express.Router();

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

//to get the practice questions of a particular topic of a subject of a branch
router.get('/:subject/:topic',function(req,res){

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
router.get('/:subject',function(req,res){

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
router.get('/:branch/:year',function(req,res){

	const branch = req.params.branch;
	const year = req.params.year;
	//const year1="GATE-"+year;

	//async-await function
	async function getPracticeQuestionsYearwise(){
		
		//try-catch to see if the model is already made.
		let Query;
		try {
			Query = mongoose.model(branch);
		} catch (error) {
			Query = mongoose.model(branch,branchSchema,branch);
		}

		//querying the db to get all subjects of the given branch
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

			const questions=await Sub.find({'Gate_Year':year}).sort({Gate_Year:1});
			
			for(let j=0;j<questions.length;j++){
				info.push(questions[j]);
			}
		}

		//console.log(info);
		res.send(info);
	}

	getPracticeQuestionsYearwise();
});

module.exports=router;
