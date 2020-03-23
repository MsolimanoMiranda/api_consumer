import tokenService from '../services/token';

export default {

	verifyUser : async(req,res,next)=>{

		if(!req.headers.token){
			return res.status(404).send({message:'No Token'});
		}

		const response = await tokenService.decode(req.headers.token);
		if( response.rol == 'Administrador' || response.rol =='Generic' ){
			next();
		}else{
			return res.status(403).send({
				message:'No Autorizado'
			});
		}

	},

	verifyAdministrador : async(req,res,next)=>{

		if(!req.headers.token){
			return res.status(404).send({message:'No Token'});
		}
		const response= await tokenService.decode(req.headers.token);
		if(response.rol == 'Administrador'){
			next();
		}else{
			return res.status(403).send({
				message:'No Autorizado'
			});
		}
		
	},

	verifyUserGeneric: async(req,res,next)=>{

		if(!req.headers.token){
			return res.status(404).send({message:'No Token'});
		}
		const response= await tokenService.decode(req.headers.token);
		if(response.rol == 'Generic' ){
			next();
		}else{
			return res.status(403).send({
				message:'No Autorizado'
			});
		}
		
	},




}