import React, { Component } from 'react';
import './App.css';
import { Container,
  Grid,
  Header,
  List,
  Segment} from 'semantic-ui-react';

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
                    <List.Item>Skeppsgatan 18</List.Item>
                    <List.Item>789 98 Uppsala</List.Item>
                    <List.Item>Telefon: 018 - 88 99 77 6</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Magna fermentum iaculis eu non diam phasellus. Pharetra convallis posuere morbi leo urna molestie at</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
    );
  }
}

export default PrimaryHeader;
