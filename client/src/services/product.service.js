import config from '../config/global';
import axios from 'axios';
import Product from '../areas/admin/containers/product';

class ProductService {
    ValidateForm(user){
        return axios.post(config.apiAddress+'/auth/login',user).then(function(response){
            return response
        })
        .catch(function(error){
            return error;
        });
    }
   
    addProduct(form,product) {
        console.log("inthe add product");
        return axios.post(config.apiAddress + '/file',form)
        .then(function(response){
            product.imagePath=response.data.filePath;
            return axios.post(config.apiAddress + '/product', product)
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
     getUsers(){
        // console.log(object);
        return axios.get(config.apiAddress + '/product')
        .then(function(response){
            return response;
        })
        .catch(function(error){
            return error;
        })
    }
 
 }

const userservice = new ProductService();
export default userservice;