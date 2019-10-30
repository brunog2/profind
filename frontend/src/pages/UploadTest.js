import React, { useState, Component } from 'react';
import api from '../services/api';

class UploadTest extends Component {


    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        
    }
    onChange(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',e.target.files[0]);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        api.post("/uploadImage",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
            </div>
            
        )
    }
}

export default UploadTest;