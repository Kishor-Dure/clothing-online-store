import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from '../src/Component/Pages/Homepages/homepage.component';
import ShopPage from './Component/Pages/Shop/shop.component';
import SignInAndSignUpPage from './Component/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './Component/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utility';

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot (snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data ()
            } 
          })
            
        });
      }
        this.setState({currentUser: userAuth}); 
    }); 
  }

  render () {
    return (
      <div >
        <Header currentUser= {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}


 
export default App;
