import models from '../models';
import request from 'request';
// var request = require('request');


export default {


listTest:async(req,res,next)=>{
	try{
	//	let valor=req.query.valor;
        request('https://api.humanapi.co/v1/human/sleeps?access_token=demo', function(err, body){
         
            res.status(200).json(body);
        });


	}catch(e){
		res.status(500).send({ message:'Ocurrio un error'});
		next(e);
	}	

}



}


