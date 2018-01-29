import React, { Component } from 'react';
import './App.css';
import { NavLink, Link } from 'react-router-dom';
import { Button,
  Container,
  Label,
  Menu,
  Segment,
  Visibility } from 'semantic-ui-react';
import FixedMenu from '../containers/FixedMenu';
import FontAwesome from 'react-fontawesome';
import './PrimaryHeader.css';

class PrimaryHeader extends Component {
  state = {};

  //hideFixedMenu = () => this.setState({ visible: false });
  hideFixedMenu = () =>{ console.log('hide');};
  //showFixedMenu = () => this.setState({ visible: true });
  showFixedMenu = () =>{ console.log('show');};
  render() {
    const { visible } = this.state;

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}>
          <Segment inverted textAlign='center' style={{ minHeight: 100, padding: '1em 0em', backgroundColor: 'steelblue' }} vertical>
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as={NavLink} to='/home'>Start</Menu.Item>
                <Menu.Item as={NavLink} to='/products'>Produkter</Menu.Item>
                <Menu.Item as={NavLink} to='/contact'>Kontakt</Menu.Item>
                <Menu.Item position='right'>
                  <Link to='/cart'>
                    {this.props.amount >0 && <Label color='teal' >{this.props.amount}</Label>}
                    <Button inverted ><FontAwesome name="shopping-cart" /></Button>
                  </Link>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Visibility>
      </div>
    );
  }
}

export default PrimaryHeader;
