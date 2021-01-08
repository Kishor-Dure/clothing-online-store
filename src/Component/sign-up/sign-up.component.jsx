import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utility';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confrimPassword: ''
        }
    } 
    handleSumbit = async event => {
        event.preventDefault();
        
        const {displayName, email, password, confrimPassword} = this.state;

        if (password !== confrimPassword) {
            alert ("Password don't match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword (email, password);
            await createUserProfileDocument (user, {displayName});

            this.setState ({
                displayName: '',
                email: '',
                password: '',
                confrimPassword: ''
            })
        } catch (error) {
            console.log (error);
        }
    }
    handleChange = event => {
        const {name, value } = event.target;

        this.setState({[name]: value});
    } 
    render() {
        const {displayName, email, password, confrimPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'> I do not have account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSumbit}>
                    <FormInput 
                        type='text'
                        name= 'displayname'
                        value= {displayName}
                        onChange= {this.handleChange}
                        label= 'Display Name'
                        required
                    />
                     <FormInput 
                        type='email'
                        name= 'email'
                        value= {email}
                        onChange= {this.handleChange}
                        label= 'Email'
                        required
                    />
                     <FormInput 
                        type='password'
                        name= 'password'
                        value= {password}
                        onChange= {this.handleChange}
                        label= 'Password'
                        required
                    />
                     <FormInput 
                        type='password'
                        name= 'confirm password'
                        value= {confrimPassword}
                        onChange= {this.handleChange}
                        label= 'confirm password'
                        required
                    />
                    <CustomButton type='sumbit'>SIGN UP </CustomButton>
                                         
                </form>
            </div>
        );
    }
}

export default SignUp;
