import React, { useState, Component } from 'react';
import api from '../services/api';

class UploadTest extends Component {


    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        console.log(this.state.file)
        e.preventDefault();
        const formData = new FormData();

        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        api.post("/uploadImage",formData,config)
            .then((response) => {
                console.log(response.data.file.path)
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        
        this.setState({file:e.target.files[0]});
        
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