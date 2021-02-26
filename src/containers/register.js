import React from 'react';
import { bindActionCreators } from 'redux';
import { registerNewUser } from '../actions/user';
import { connect } from 'react-redux';
import { map } from 'lodash';

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            emailId:'',
            role:'ROLE_CUSTOMER'
        }
    }
        onInputChange = (event) => {
          var name = event.target.name;
          var value = event.target.value;
          this.setState({[name]:value});
        }
        registerUser = (event) => {
            event.preventDefault();
            console.log('state',this.state);
            this.props.registerNewUser(this.state);
        }
    
    render(){
        return(
            <form>
              Username: <input onChange={this.onInputChange} type="text" name="username"></input><br></br>
              Password: <input onChange={this.onInputChange} type="password" name="password"></input><br></br>
              EmailId: <input onChange={this.onInputChange} type="text" name="emailId"></input><br></br>
              <button onClick={this.registerUser}>Submit</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({registerNewUser:registerNewUser},dispatch);
}

export default connect(null,mapDispatchToProps)(Register);