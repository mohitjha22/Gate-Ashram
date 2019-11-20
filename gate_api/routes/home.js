const express= require('express');
const router= express.Router();

router.get('/',function(req,res){
	var title="GateAshram";
	res.send(title);
});

module.exports=router;