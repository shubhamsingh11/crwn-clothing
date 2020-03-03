import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={email : '',
                    password :''};
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email : '',password : ''}) 
    }

    handleChange =(e) => {
        const {value,name} = e.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' onChange={this.handleChange} value={this.state.email} required />
                   
                    <FormInput name='password' type='password' label='password' onChange={this.handleChange} value={this.state.password} required/>
                  
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google</CustomButton>
                    </div>
                   

                    
                </form>
            </div>
        )
    }
}

export default SignIn;