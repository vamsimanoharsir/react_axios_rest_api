import React, { Component } from 'react';
import axios from 'axios';

class HttpPost extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:'',
            username:'',
            rno:''
        }
    }
    componentDidMount(){
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state) //post data
        .then(res=>{console.log("data is : ",res)})
        .catch(err=>{console.log("error is : ",err)})
    }
    handleFunc=(event)=>{
        this.setState({
            [event.target.name]:event.target.value  //reading from textbox
        })
    }
    submitHandle=(event)=>{
            event.preventDefault(); //to stop page from reloading after submit
            console.log(this.state)
    }
    
    render() {
        const {username,id,rno}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandle}> 
                    <div>
                        id : <input type="text" name='id' value={id} onChange={this.handleFunc}></input>
                    </div> <br />
                    <div>
                        Username : <input type="text" name='username' value={username} onChange={this.handleFunc}></input>
                    </div> <br />
                    <div>
                        Roll Number : <input type="text" name='rno' value={rno} onChange={this.handleFunc}></input>
                    </div> <br />
                    Submit <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default HttpPost