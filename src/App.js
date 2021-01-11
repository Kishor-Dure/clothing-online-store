import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';

import HomePage from '../src/Component/Pages/Homepages/homepage.component';
import ShopPage from './Component/Pages/Shop/shop.component';
import CheckoutPage from '../src/Component/Pages/checkout/checkout.component';
import SignInAndSignUpPage from './Component/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './Component/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utility';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount () {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot (snapShot => {
          setCurrentUser({

              id: snapShot.id,
              ...snapShot.data ()
          });

        });
      }
        setCurrentUser (userAuth);
    });
  }
  componentWillUnmount (){
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component ={CheckoutPage} />
          <Route exact path='/signin'
           render={()=> this.props.currentUser ?
           (<Redirect to ='/' />): (<SignInAndSignUpPage />) } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch (setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
