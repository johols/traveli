import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount(){
    const url = 'http://localhost/webshopapi/products/read.php';
    // Use Axios to maxe XHR requests
    axios.get(url)
      .then((res) => {
        this.setState({ products: res.data.product });
        console.log('products: ', res.data.product);
      });
  }

  addToCart(item, event){
    this.props.addToCart(item);
  }

  render() {
    return (
      <div className="products-container">
        <ProductList addToCart={this.addToCart.bind(this)} list={this.state.products}/>
      </div>
    );
  }
}

export default ProductsPage;
