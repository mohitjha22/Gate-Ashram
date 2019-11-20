const express= require('express');
const router= express.Router();
const mongoose = require('mongoose');

//schema for branch collections in the db
const branchSchema = new mongoose.Schema({ 
	subject:String
});

//to get the subjects of a particular branch
router.get('/',function(req,res){

	//async-await fuction
	async function getSubjects(){
		const branch="CSE";
		const branch1=req.params.branch;

		//querying the db
		const Query = mongoose.model(branch,branchSchema,branch);
		const info= await Query.find();

		res.send(info);
		//console.log(info);

	}

	getSubjects();
});

module.exports=router;