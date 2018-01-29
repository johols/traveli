import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CartList from '../components/CartList';
import { Grid, Button, List, Radio, Icon} from 'semantic-ui-react';
import axios from 'axios';

class PaymentPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    //console.log('customerid ', this.props.customerid);
  }

  placeOrder(){
    let cartitems = this.props.cartitems.map(item => ({ product_id: item.id,
      product_name: item.name, price: item.price, currency: item.currency }));
    let payload = {
      "customer_id": this.props.customerid,
      "products": cartitems
    };

    axios.post('http://localhost/webshopapi/orders/create.php', payload)
    .then(function(response){
      console.log('saved successfully', response);
      // TODO: go to confirmation page
    });
  }

  render() {
    return (
      <div className="payment-container">
        <Grid>
          <Grid.Row centered style={{marginTop: '1em'}}>
            <p>Antal varor: {this.props.cartitems.length}</p>
          </Grid.Row>
          <Grid.Row centered style={{marginBottom: '1em'}}>
            <p>Summa: {this.props.cartitems.reduce((prev,next) => Number(prev) + Number(next.price),0)} SEK</p>

          </Grid.Row>

          <Grid.Row columns={3} style={{marginBottom: '1em'}}>
            <Grid.Column width={5}>
            </Grid.Column>
            <Grid.Column width={6} style={{padding: '1em', border: '1px solid grey'}}>
              <h4>Välj betalsätt</h4>
              <List>
                <List.Item>
                  <Radio label='SWISH' />
                </List.Item>
                <List.Item>
                  <Radio label='VISA' />
                </List.Item>
                <List.Item>
                  <Radio label='Mastercard' />
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{margin: '2em'}}>
            {this.props.cartitems.length >= 1 &&
              <Button onClick={this.placeOrder.bind(this)} primary size='huge'>Utför betalning<Icon name='right arrow' /></Button>
            }
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}

export default PaymentPage;
