/** @format */

import React from 'react';
import Badge from 'reactstrap/lib/Badge';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';

function Features({ myref }) {
  return (
    <section className='section section-lg mt--150' ref={myref}>
      <Container>
        <Row className='row-grid align-items-center'>
          <Col className='order-md-2' md='6'>
            <img
              alt='...'
              className='img-fluid floating'
              src={require('assets/img/theme/promo-1.png')}
            />
          </Col>
          <Col className='order-md-1' md='6'>
            <div className='pr-md-5'>
              <div className='icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5'>
                <i className='ni ni-settings-gear-65' />
              </div>
              <h3>REAT AND REACT NATIVE</h3>
              <p>SPA has made building front ends more fun than ever before</p>
              <ul className='list-unstyled mt-5'>
                <li className='py-2'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <Badge className='badge-circle mr-3' color='success'>
                        <i className='ni ni-settings-gear-65' />
                      </Badge>
                    </div>
                    <div>
                      <h6 className='mb-0'>Carefully crafted components</h6>
                    </div>
                  </div>
                </li>
                <li className='py-2'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <Badge className='badge-circle mr-3' color='success'>
                        <i className='ni ni-html5' />
                      </Badge>
                    </div>
                    <div>
                      <h6 className='mb-0'>Resusable Components</h6>
                    </div>
                  </div>
                </li>
                <li className='py-2'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <Badge className='badge-circle mr-3' color='success'>
                        <i className='ni ni-satisfied' />
                      </Badge>
                    </div>
                    <div>
                      <h6 className='mb-0'>
                        Awesome State management, bot with core and third party
                        libraries
                      </h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
