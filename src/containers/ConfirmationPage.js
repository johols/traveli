import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CartList from '../components/CartList';
import { Grid, Button, Icon, Header, Container} from 'semantic-ui-react';

class ConfirmationPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log('confirmation orderid: ', this.props.match.params.orderid);
  }

  render() {
    return (
      <div className="cart-container">

        <Grid>
          <Grid.Row centered style={{margin: '2em'}}>
            <Container text>
              <Header as='h3'>Tack för din beställning</Header>
              <p>Din order har id: {this.props.match.params.orderid}</p>
              <p>Du kan titta på den mha api-anrop:</p>
              <p>localhost/webshopapi/orders/read_by_id.php?id={this.props.match.params.orderid}</p>
            </Container>
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}

export default ConfirmationPage;
