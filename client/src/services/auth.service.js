import config from '../config/global';
import axios from 'axios';


class AuthService {
    ValidateForm(user){
        return axios.post(config.apiAddress+'/auth/login',user).then(function(response){
            return response
        })
        .catch(function(error){
            return error;
        });
    }
    LoginUser(user){
        // console.log(object);
        console.log("In The log in Auth");
        return axios.post(config.apiAddress + '/login',user)
        .then(function(response){
            return response;
        })
        .catch(function(error){
            return error;
        });
    }

    SignUpUser(user){
        console.log("In the signup function");
        return axios.post(config.apiAddress + '/auth/signup',user)
        .then(function(response){
            console.log("in the inner function of signup");
            return response;
        })
        .catch(function(error){
            return error;
        })
     
    }

   
     
    
}

const userservice = new AuthService();
export default userservice;