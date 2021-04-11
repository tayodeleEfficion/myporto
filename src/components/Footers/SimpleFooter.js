/**
 * /*!
 *
 * =========================================================
 * Argon Design System React - v1.1.0
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/argon-design-system-react
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)
 *
 * Coded by Creative Tim
 *
 * =========================================================
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * @format
 */

/*eslint-disable*/
import SocialMediaButtons from 'components/Buttons/SocialMediaButtons';
import React from 'react';
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=' footer'>
          <Container>
            <Row className=' row-grid align-items-center mb-5'>
              <Col lg='6'>
                <h3 className=' text-primary font-weight-light mb-2'>
                  Thank you for visiting my portfolio!
                </h3>
                <h4 className=' mb-0 font-weight-light'>
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className='text-lg-center btn-wrapper' lg='6'>
                <SocialMediaButtons
                  color='twitter'
                  link='https://twitter.com/creativetim'
                  icon='twitter'
                  description='Follow me'
                />
                <SocialMediaButtons
                  color='facebook'
                  link='https://www.facebook.com/creativetim'
                  icon='facebook-square'
                  description='Like me'
                />
                <SocialMediaButtons
                  color='github'
                  link='https://github.com/creativetimofficial'
                  icon='github'
                  description='star me'
                />
              </Col>
            </Row>
            <hr />

            <div className=' copyright'>
              © {new Date().getFullYear()}{' '}
              <a href='/profile' target='_blank'>
                Ayodele Tunde- powered by REACT
              </a>
              .
            </div>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
