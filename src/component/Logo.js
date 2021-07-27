import React, { Component } from 'react';
class Logo extends Component{
    render(){
        return(
            <header>
                <h1><a href="/react_blog" onClick={function(e){
                    e.preventDefault()
                }}>June's Blog</a></h1>
                <hr></hr>
                <h3>
                    Click the Date to see What I did in Busan :)
                </h3>
            </header>
        )
    }
}

export default Logo