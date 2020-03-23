import models from '../models';
import request from 'request';
// var request = require('request');


export default {


listTest:async(req,res,next)=>{
	try{
	//	let valor=req.query.valor;
        request('URL', function(err, body){
         
            res.status(200).json(body);
        });


	}catch(e){
		res.status(500).send({ message:'Ocurrio un error'});
		next(e);
	}	

}



}


