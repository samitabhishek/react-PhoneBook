import React, { Component } from 'react'
import userservice from './services/userservice';
import config from './config/global'

export default class CreateContact extends Component {
    constructor() {
        super();
        this.random = 'random text';
        this.state = {
            option:false,
            users: []
        }
    }
    componentDidMount() {
        userservice.getUsers().then(res => {
            console.log("res.data: ", res.data);
            this.setState({
                users: res.data,
                imageLocation: './images/call-icon-female-user-person-profile-avatar-with-vector-25111234.jpg'

            });
        });
    }
    handleChange = (event) => {
        var name = event.target.value;
        if (!name) {
            name = "***";
        }

        userservice.searchUser(name).then(res => {
            if (res) {
                this.setState({
                    users: res.data
                });

            }
            else {
                this.setState({
                    users: []
                });
            }
        });
    }
    handleSubmit = e => {
        console.log(this.state.formFields);
    }
    getUser() {
        userservice.getUsers().then(res => {
            console.log(res.data);
            this.setState({
                users: res.data
            });
        });
    }
    Delete = (id) => {
       
        if( window.confirm("Are you sure you want to Delete")){        
        userservice.deleteUser(id).then(res => {
            console.log(res)
            if (res.statusText === "OK") {
                
                this.getUser();
            }
        });
    }
    }
    Edit = (id) => {
        window.location.href = `/edit/${id}`;
    }
    render() {
        return (
            <>
                <div className="container my-2 py-3 bg-light">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col">
                            <div className="form-group">
                                <h5 className="text-center">Search Contact</h5>
                                <input type="text" name="name" id className="form-control" placeholder aria-describedby="helpId" onChange={this.handleChange} />

                            </div>
                        </div>
                        <div className="col">


                        </div>
                    </div>
                    <ul className="list-unstyled">
                        {
                            // console.log("this.state.users :", this.state.users)
                            this.state.users.map((item) => {
                                return <li className="media my-4 d-inline-block  text-center">


                                    <div className="card mx-4 img-thumbnail" style={{ width: '18rem' }}>
                                        {
                                            item.imagePath ? <img height="200px" width="250px" src={config.imageAddress + item.imagePath} className="card-img-top rounded " alt="..." /> : <img height="200px" width="250px" src={require('./images/call-icon-female-user-person-profile-avatar-with-vector-25111234.jpg')} className="card-img-top rounded " alt="..." />
                                        }
                                        
                                        <div className="card-body d-inline-block">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">Phone : {item.contact}</p>
                                            <p className="card-text">Address : {item.address}</p>
                                            <p className="card-text">Country : {item.country}</p>
                                            
                                            <button className="btn btn-danger" onClick={() => this.Delete(item._id)}>Delete</button>&nbsp;&nbsp;
                                            <button className="btn btn-info" onClick={() => this.Edit(item._id)}>Edit</button>
                                        </div>
                                        
                                    </div>


                                   
                                </li>
                            })
                        }

                    </ul>



                </div>
            </>

        )
    }
}
