import React, { Component } from 'react';
import axios from 'axios'

class HttpGet extends Component {
    constructor(props) {
        super(props);
        this.state={
            post:[]
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log("data is : ", res)
                this.setState({ post: res.data })
            })
            .catch((err) => { console.log("error is : ", err) })
        
    }
    
    render() {
        let {post}=this.state
        return (
            <div>
                {
                    post.map(post=><div key={post.id}>{post.title}</div>) //if we did not specify key we will get an error in the console as keys are not unique
                }
            </div>
        );
    }
}

export default HttpGet;