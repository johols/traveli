import React, { Component } from 'react';
import { Button,
  Grid } from 'semantic-ui-react';
import FontAwesome from 'react-fontawesome';

class ProductList extends Component {

  addToCart(item, e){
    //console.log('bound item:', item)
    this.props.addToCart(item);
  }

  render() {
    return (
      <div className="product-list">
      <Grid  stackable relaxed padded style={{backgroundColor:'#EDEDED'}}>
      {this.props.list && this.props.list.map(listValue => {
          let boundAddToCart = this.addToCart.bind(this, listValue);
          return <Grid.Row key={listValue.id}>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={8}>
              <div style={{backgroundColor:'white', padding:'2em'}}>
                <p style={{ fontSize: '2em', fontWeight:'bold' }}>{listValue.name}</p>

                <p><strong>Pris:</strong> {listValue.price} {listValue.currency}</p>
                <div dangerouslySetInnerHTML={{__html: listValue.description}} ></div>
                <Button onClick={boundAddToCart} size='large' style={{marginTop:'1em'}} >
                  <FontAwesome name="shopping-cart" /> Lägg i kundkorg
                </Button>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
            </Grid.Column>
          </Grid.Row>;
        })}

      </Grid>
      </div>
    );
  }
}

export default ProductList;
