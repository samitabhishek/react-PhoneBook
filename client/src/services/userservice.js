import config from '../config/global';
import axios from 'axios';

class UserService {
    getUsers(){
        // console.log(object);
        return axios.get(config.apiAddress + '/user')
        .then(function(response){
            return response;
        })
        .catch(function(error){
            return error;
        })
    }
    deleteUser(id) {
        return axios.delete(config.apiAddress + '/user/' + id).then(function (response) {
            return response
        })
            .catch(function (error) {
                return error;
            });
    }
    getUser(id){
        // console.log(object);
        return axios.get(config.apiAddress + '/user/'+id)
        .then(function(response){
            return response;
        })
        .catch(function(error){
            return error;
        })
    }
    searchUser(name) {
        return axios.get(config.apiAddress + '/user/search/' + name).then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
    }
    UpdateUser(form,product, id) {
        
            console.log("inthe add product");
            return axios.post(config.apiAddress + '/file',form)
            .then(function(response){
                console.log(response.data.filePath)
                if(response.data.filePath!=""){
                    product.imagePath=response.data.filePath;
                }                
                return axios.put(config.apiAddress + '/user/' + id, product)
                .then(function (response) {
                  
                    return response
                })
                .catch( function(error){
              return error;
                });
     
            }).catch( function(error){
             return error;
               });
    }
    addUser(form,product) {
        console.log("inthe add product");
        return axios.post(config.apiAddress + '/file',form)
        .then(function(response){
            product.imagePath=response.data.filePath;
            return axios.post(config.apiAddress + '/user', product)
            .then(function (response) {
              
                return response
            })
            .catch( function(error){
          return error;
            });
 
        }).catch( function(error){
         return error;
           });
 
 
         
     }

    // addUser(user){
    //     return axios.post(config.apiAddress + '/user',user)
    //     .then(function(response){
    //         return response;
    //     })
    //     .catch(function(error){
    //         return error;
    //     })
     
    // }
}

const userservice = new UserService();
export default userservice;