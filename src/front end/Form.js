 import React from 'react';
 import './index.css';
export default class Form extends React.Component {

state= {              // state holds the value it reflect to render function
  Username:"",
  password:"",
  isError:false,
}
change =e =>{             //e refers event
    this.setState({
        [e.target.name]:e.target.value
    });
};

onSubmit1 = e =>{
    e.preventDefault();  // hide the value(data) in the url
    console.log(this.state);
}
onLogin =e =>{
    e.preventDefault();
    console.log(this.state);
    const {Username,password}=this.state;
    if(Username==='admin'&& password==="1234"){
        this.setState({
            Username:'',
            password:'',
        })
        this.props.history.push('/welcome')
    }else{
        this.setState({isError:true})
    }
   // return <Redirect to="./welcome"/>
}


render(){
     const {isError} =this.state;
    return (
    <form  onSubmit={this.onLogin}>
        {isError ?
        <div role="alert">
            <p>UserName or PassWord is InCorrect !!!</p>
        </div>
        :''
        }
        
        <label id='a'>UserName </label>
        <input 
        className="bb"
        name="Username" 
        placeholder="Username"
        value={this.state.Username} 
        onChange={e =>this.change(e)}  //setState({Username: e.target.value})}
        /> <br/>
        <label id='a'>PassWord  </label>
        <input
        className="bb"
        name="password"
        placeholder="password"
        type="password"
        value={this.state.password} 
        onChange={e =>this.change(e)}//setState({password: e.target.value})}
        /><br/>
        <button id='c'onClick={e =>this.onSubmit1(e)}>Submit</button>
        </form>
    );
}
}