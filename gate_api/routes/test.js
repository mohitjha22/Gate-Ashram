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

//

module.exports=router;