const express= require('express');
const router= express.Router();
const mongoose = require('mongoose');

//schema for branch collections in the db
const branchSchema = new mongoose.Schema({ 
	subject:String
});

//to get the subjects of a particular branch
router.get('/:branch',function(req,res){

	//async-await fuction
	async function getSubjects(){
		//const branch="CSE";
		const branch=req.params.branch;
		//console.log(branch);

		//try-catch to see if the model is already made.
		let Query;
		try {
			Query = mongoose.model(branch);
		} catch (error) {
			Query = mongoose.model(branch,branchSchema,branch);
		}
		//querying the db
		const info= await Query.find();

		res.send(info);
		//console.log(info);

	}

	getSubjects();
});

module.exports=router;