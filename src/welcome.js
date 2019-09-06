import React , { Component } from 'react';

class Welcome extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h3>Welcome User!!!</h3>
            </div>
        )
    }
}


export default Welcome;
