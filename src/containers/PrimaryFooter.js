import React, { Component } from 'react';
import logo from '../images/logo.svg';
//import backgroundImg from '../images/abstract-triangle-mosaic.jpg';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
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

class PrimaryHeader extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '3em 0em', backgroundColor:'#555'}}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Innehåll' />
                  <List link inverted>
                    <List.Item as='a'>Om Företaget</List.Item>
                    <List.Item as='a'>Produkter</List.Item>
                    <List.Item as='a'>Besök oss</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Kontakt' />
                  <List link inverted>
                    <List.Item>Salagatan 18</List.Item>
                    <List.Item>789 98 Uppsala</List.Item>
                    <List.Item>Telaefon: 018 - 88 99 77 6</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
    );
  }
}

export default PrimaryHeader;
