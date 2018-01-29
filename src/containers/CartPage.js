import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartList from '../components/CartList';
import { Grid, Button, Icon} from 'semantic-ui-react';

class CartPage extends Component {

  removeFromCart(id, event){
    this.props.removeFromCart(id);
  }

  render() {
    return (
      <div className="cart-container">
        <CartList items={this.props.cartitems} removeFromCart={this.removeFromCart.bind(this)}/>

        <Grid>
          <Grid.Row centered style={{margin: '2em'}}>
            {this.props.cartitems.length < 1 && <h3>Kundkorgen är tom..</h3>}
            {this.props.cartitems.length >= 1 &&
              <Link to='/payment'>
                <Button primary size='huge'>Till kassan<Icon name='right arrow' /></Button>
                </Link>
            }
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}

export default CartPage;
