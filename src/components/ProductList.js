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

class ProductList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log('ProdList did mount', this.props);
  }

  onClickDetails(details, e){
    console.log('---------onFeatureclick', details);
    //this.props.clickFeature(listValue);
  }

  addToCart(item, e){
    //console.log('bound item:', item)
    this.props.addToCart(item);
  }

  render() {
    return (
      <div className="product-list">
      <Grid  stackable relaxed padded style={{backgroundColor:'#EDEDED', padding:'4em' }}>
      {this.props.list && this.props.list.map(listValue => {
          let boundClickDetails = this.onClickDetails.bind(this, listValue.description);
          let boundAddToCart = this.addToCart.bind(this, listValue);
          return <Grid.Row key={listValue.id}>
              <div style={{backgroundColor:'white', padding:'4em'}}>
                <p style={{ fontSize: '2em', fontWeight:'bold' }}>{listValue.name}</p>
                <p onClick={boundClickDetails}>Läs mer...</p>
                <Popup
                 trigger={<p>Läs om detta</p>}
                 content={listValue.description}
                 on='click'
                 position='top right'
               />
                <p>Pris: {listValue.price} {listValue.currency}</p>
                <div dangerouslySetInnerHTML={{__html: listValue.description}} ></div>
                <Button onClick={boundAddToCart} size='large'  >
                  <FontAwesome name="shopping-cart" /> Lätt i kundkorg
                </Button>
              </div>
          </Grid.Row>;
        })}

      </Grid>
      </div>
    );
  }
}

export default ProductList;
