switch(process.env.NODE_ENV){
	case 'development': {
		process.env.VUE_APP_BASE_URL = 'http://localhost:3000/'
		break;	
	}
	case 'production':{
		process.env.VUE_APP_BASE_URL = 'http://localhost:3000/'
		break;
	}
}
module.exports = {
	
}