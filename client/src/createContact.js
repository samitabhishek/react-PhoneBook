import React, { Component } from 'react'
import UserServices from './services/userservice';

export default class CreateContact extends Component {
    formFields = {
        name:'',
        contact:'',
        address: '',
        country: '',
        imagePath: '',
        
    }
    constructor(props) {
        super(props);
        this.state = {
            formFields: this.formFields,
            file: null,
            errors: {
                name: '',
                contact: '',
                address: '',
                country: '',
            }
        }
    }
    handleReset = () => {
        this.refs.name.value = ""; 
        this.refs.address.value = "";
        this.refs.contact.value = "";
        this.refs.country.value = "";
     }
    handleChange = (event) => {
        const formFields = this.state.formFields;
        formFields[event.target.name] = event.target.value;
        this.setState({
            formFields:formFields
        });
        this.validateUser(event.target.name);
    }
    setfile =(e) =>{
        this.setState({
            file:e.target.files[0]
        });
    }
    validateUser(control) {
        const errors = this.state.errors;
        const regex = /^[6-9]\d{9}$/;
        if (this.state.formFields[control] === '') {
            errors[control] = `Please enter ${control}`
        } else if (control === 'contact' && this.state.formFields[control] !== "") {
            if (!this.state.formFields[control].match(regex)) {
                errors[control] = `Please enter the valid mobile number`;
            }
            else {
                errors[control] = ``;
            }
        } else {
            errors[control] = ``;
        }
        this.setState({
            errors
        });
        console.log(this.state.errors);
    }
    handleSubmit = e =>{
        let flag = true; 
        
        const formFields = this.state.formFields;

        for (const key in formFields) {
            this.validateUser(key);
        }

        let errors = this.state.errors;
        for (const key in errors) {
            if ((errors[key] !== '')&&(key!="imagePath" )) {
                flag = false;
                break;
            }
        }
        let form =new FormData();
        form.append("file",this.state.file);
        console.log(this.state.formFields);
        e.preventDefault();
        if(true)
        {
            // console.log("in the if condition")
            
            UserServices.addUser(form,this.state.formFields).then(res =>{
                
                // if(res.data.success === true){
                //     window.href('/display');
                //     // console.log("returnded in handle submit");
                //     this.props.history.push('/display');
                    
                // }
                if(res.status === 200){
                    // window.href('/display');
                    this.props.history.push('/');
                }
            });
        } else {

        }
    }
    render() {
        return (
           <div>
               <div className="container my-2 py-3">
                   <h5 className="text-center">Create a New Contact</h5>
                   <br/>

                    <form>
                        <div className="row">
                        <div className="col">
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" value={this.state.formFields.name} onChange={this.handleChange} />
                        <span className="text-danger">{this.state.errors['name']}</span>
                        </div>
                        

                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Contact</label>
                        <input type="text" name="contact" className="form-control" id="exampleInputPassword1" placeholder="Enter Phone Number" value={this.state.formFields.contact} onChange={this.handleChange} />
                        <span className="text-danger">{this.state.errors['contact']}</span>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Address</label>
                        <input type="text" name="address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address" value={this.state.formFields.address} onChange={this.handleChange}/>                        
                        <span className="text-danger">{this.state.errors['address']}</span>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Country</label>
                       
                          <select class="form-control" name="country" id="" value={this.state.formFields.country} onChange={this.handleChange} >
                          <option value="">--Select--</option>
                          <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Australia">Australia</option>
                            <option value="China">China</option>
                            <option value="Russia">Russia</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Thailand">Thailand</option>
                          </select>
                                     
                        
                        </div>
                        <span className="text-danger">{this.state.errors['country']}</span>
                        </div>
                        <div className="col">
                             <div className="form-group">
                                 
                                 <label htmlFor>Image</label>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile01" name="imagePath" aria-describedby="inputGroupFileAddon01" value={this.state.formFields.file} onChange={this.setfile} />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                </div>
                     
                            </div>

                        </div>
                        
                        
                        </div>
                        <div className="text-center">
                        <button type="button" className="btn btn-primary " onClick={this.handleSubmit}>Submit</button>

                        </div>
                    </form>
                </div> 
            </div>

        )
    }
}
