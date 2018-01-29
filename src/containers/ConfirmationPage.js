import React, { Component } from 'react';
import { Grid, Header, Container} from 'semantic-ui-react';

class ConfirmationPage extends Component {
  
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
