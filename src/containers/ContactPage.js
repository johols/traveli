import React, { Component } from 'react';
import './App.css';
import { Grid, Container, Header, Segment, Icon } from 'semantic-ui-react';

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-page">
        <Segment style={{ padding: '8em 0em' }} vertical>
           <Container text>
             <Header as='h3' style={{ fontSize: '2em', color:'grey' }}>Har du frågor? Kontakta oss!</Header>

             <Grid container stackable relaxed>
              <Grid.Row>
                <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.9)', padding: '2em', marginTop:'2em', color: '#272727' }}>
                  <Icon name='mail' size='huge'/>
                  <p style={{fontSize:'1.33em'}}>
                    info@support.se
                  </p>
                </Grid.Column>

              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.3)',paddingBottom: '1em' }}>
                  <Icon name='mobile' size='massive'/>
                  <p style={{fontSize:'1.33em', color: '#272727'}}>
                    077-777 1337
                  </p>
                </Grid.Column>
              </Grid.Row>
             </Grid>

           </Container>
        </Segment>
      </div>
    );
  }
}

export default ContactPage;
