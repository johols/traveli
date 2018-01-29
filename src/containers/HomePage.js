import React, { Component } from 'react';
import './App.css';
import logo from '../images/logo.svg';
import { Route, Link } from 'react-router-dom';
import { Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility } from 'semantic-ui-react';
import FontAwesome from 'react-fontawesome';

class HomePage extends Component {
  render() {
    return (
      <div>

      <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em', backgroundColor: 'steelblue' }} vertical>
            <Container text>
              <Header
                as='h1'
                content='Imagine-a-Company'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Do whatever you want when you want to.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Link to='/products'>
                <Button inverted size='huge'>Upptäck våra produkter<Icon name='right arrow' /></Button>
              </Link>
            </Container>
          </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible. Let us delight
                  your customers and empower your needs... through pure data analytics.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes thats right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                    bordered
                    rounded
                    size='medium'
                    src={require('../images/retro-selection-of-city-stamps.jpg')}
                  />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Link to='/products'>
                  <Button size='huge'>Upptäck våra produkter </Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
           <Grid celled='internally' columns='equal' stackable>
             <Grid.Row textAlign='center'>
               <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                 <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                 <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
               </Grid.Column>
               <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                 <Header as='h3' style={{ fontSize: '2em' }}>Vi berättar gärna mer om våra produkter</Header>
                 <Link to='/contact'>
                   <Button size='huge'>Kontakta oss </Button>
                </Link>
               </Grid.Column>
             </Grid.Row>
           </Grid>
         </Segment>
      </div>
    );
  }
}

export default HomePage;
