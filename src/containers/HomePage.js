import React, { Component } from 'react';
import './HomePage.css';
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
          <Header as='h1' content='Att resa fritt' inverted style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}/>
          <Header as='h2' content='Do whatever you want when you want to.' inverted style={{ fontSize: '1.7em', fontWeight: 'normal' }}/>
          <Link to='/products'>
            <Button inverted size='huge'>Upptäck våra produkter<Icon name='right arrow' /></Button>
          </Link>
        </Container>
      </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <h3>Vi hjälper våra kunder till bättre upplevelser</h3>
                <p style={{ fontSize: '1.33em' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h3>Innovation och erfarenhet</h3>
                <p style={{ fontSize: '1.33em' }}>
                  Malesuada proin libero nunc consequat interdum varius sit. Turpis egestas maecenas
                  pharetra convallis posuere morbi leo urna. Et pharetra pharetra massa massa ultricies
                  mi quis hendrerit. Vitae nunc sed velit dignissim sodales ut eu sem integer. Dictum sit
                  amet justo donec enim diam vulputate. Massa enim nec dui nunc. Non sodales neque sodales
                  ut etiam sit amet nisl purus.
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
                 <h3>"Dessa tillval är toppen!"</h3>
                 <p style={{ fontSize: '1.33em' }}>Booker DeWitt, besökare Columbia</p>
               </Grid.Column>
               <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                 <h3>Vi berättar gärna mer om våra produkter</h3>
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
