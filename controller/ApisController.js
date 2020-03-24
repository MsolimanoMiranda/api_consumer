import models from '../models';
import request from 'request';
// var request = require('request');


export default {


api_one:async(req,res,next)=>{
	try{
	//	let valor=req.query.valor;
        request('https://api.humanapi.co/v1/human/sleeps?access_token=demo', function(err, body){
         
            res.status(200).json(body);
        });
	}catch(e){
		res.status(500).send({ message:'Ocurrio un error'});
		next(e);
	}	

},
api_two:async(req,res,next)=>{
	try{
	//	let valor=req.query.valor;
        request('https://api.humanapi.co/v1/human/sleeps?access_token=demo', function(err, body){
         
            res.status(200).json(body);
        });
	}catch(e){
		res.status(500).send({ message:'Ocurrio un error'});
		next(e);
	}	

},
api_three:async(req,res,next)=>{
	try{
	//	let valor=req.query.valor;
        request('https://api.humanapi.co/v1/human/sleeps?access_token=demo', function(err, body){
         
            res.status(200).json(body);
        });
	}catch(e){
		res.status(500).send({ message:'Ocurrio un error'});
		next(e);
	}	

},
api_four:async(req,res,next)=>{
	try{
	//	let valor=req.query.valor;
        request('https://api.humanapi.co/v1/human/sleeps?access_token=demo', function(err, body){
         
            res.status(200).json(body);
        });
	}catch(e){
		res.status(500).send({ message:'Ocurrio un error'});
		next(e);
	}	

},
api_five:async(req,res,next)=>{
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


