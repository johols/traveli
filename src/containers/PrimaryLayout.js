import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrimaryHeader from '../containers/PrimaryHeader';
import PrimaryFooter from '../containers/PrimaryFooter';
import HomePage from '../containers/HomePage';
import ContactPage from '../containers/ContactPage';
import CartPage from '../containers/CartPage';
import PaymentPage from '../containers/PaymentPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import ProductsPage from '../containers/ProductsPage';

class PrimaryLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartitems: [],
      customerid: 1
    };
  }
  addToCart(item){
    //this.setState({cartitems:[...this.state.cartitems, item]});
    //Remember - setState is asyncronous..
    this.setState({cartitems:[...this.state.cartitems, item]}, () => {
      //console.log('add To Cart!', this.state.cartitems);
    })
  }
  removeFromCart(id){
    console.log('remove...!!', id);
    this.setState({cartitems: this.state.cartitems.filter((item) => {
      return item.id !== id;
    })});
  }
  clearCart(){
    console.log('Clear the cart..');
    this.setState({cartitems: []});
  }
  render() {
    return (
      <div className="primary-layout">
        <PrimaryHeader amount={this.state.cartitems.length}/>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/products" render={() => ( <ProductsPage addToCart={this.addToCart.bind(this)}/> )} />
            <Route path="/cart" render={() => ( <CartPage cartitems={this.state.cartitems} removeFromCart={this.removeFromCart.bind(this)}/> )} />
            <Route path="/payment" render={() => ( <PaymentPage cartitems={this.state.cartitems} clearCart={this.clearCart.bind(this)} customerid={this.state.customerid}/> )} />
            <Route path="/confirmation/:orderid" component={ConfirmationPage} />
            <Route path="/contact" component={ContactPage} />
            <Redirect to="/" />
          </Switch>
        </main>
        <PrimaryFooter />
      </div>
    );
  }
}

export default PrimaryLayout;
