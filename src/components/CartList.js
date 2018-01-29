import React, { Component } from 'react';
import { Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Popup } from 'semantic-ui-react';
import FontAwesome from 'react-fontawesome';
import { Route, Link } from 'react-router-dom';

class CartList extends Component {

  constructor(props) {
    super(props);
  }

  removeFromCart(id, e){
    this.props.removeFromCart(id);
  }

  render() {
    return (
      <div className="cart-list">
      <Grid  stackable centered padded style={{backgroundColor:'#EDEDED', padding:'2em' }}>
      {this.props.items && this.props.items.map(item => {
          let boundRemoveFromCart = this.removeFromCart.bind(this, item.id);
          return <Grid.Row key={item.id}>
              <div style={{backgroundColor:'white', padding:'2em'}}>
                <p style={{ fontSize: '1.2em', fontWeight:'bold' }}>{item.name}</p>
                <p style={{ }}>{ item.price } { item.currency }</p>
                <Button onClick={boundRemoveFromCart} size='small'  >
                  <FontAwesome name="remove" /> Ta bort
                </Button>
              </div>
          </Grid.Row>;
        })}

      </Grid>
      </div>
    );
  }
}

export default CartList;
