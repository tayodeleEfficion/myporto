/** @format */

import React from 'react';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';

function Feature6({ myref }) {
  return (
    <section className='section pb-0 bg-gradient-warning' ref={myref}>
      <Container>
        <Row className='row-grid align-items-center'>
          <Col className='order-lg-2 ml-lg-auto' md='6'>
            <div className='position-relative pl-md-5'>
              <img
                alt='...'
                className='img-center img-fluid'
                src={require('assets/img/ill/ill-2.svg')}
              />
            </div>
          </Col>
          <Col className='order-lg-1' lg='6'>
            <div className='d-flex px-3'>
              <div>
                <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                  <i className='ni ni-building text-primary' />
                </div>
              </div>
              <div className='pl-4'>
                <h4 className='display-3 text-white'>NoSQL & SQL</h4>
                <p className='text-white'>
                  i use NOSQL as well as SQl Systems in managing and maintaining
                  datasource
                </p>
              </div>
            </div>
            <Card className='shadow shadow-lg--hover mt-5'>
              <CardBody>
                <div className='d-flex px-3'>
                  <div>
                    <div className='icon icon-shape bg-gradient-success rounded-circle text-white'>
                      <i className='ni ni-satisfied' />
                    </div>
                  </div>
                  <div className='pl-4'>
                    <h5 className='title text-success'>Mongodb</h5>
                    <p>An awesome nosql support for maintaining data</p>
                    <a
                      className='text-success'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className='shadow shadow-lg--hover mt-5'>
              <CardBody>
                <div className='d-flex px-3'>
                  <div>
                    <div className='icon icon-shape bg-gradient-warning rounded-circle text-white'>
                      <i className='ni ni-active-40' />
                    </div>
                  </div>
                  <div className='pl-4'>
                    <h5 className='title text-warning'>Serverless</h5>
                    <p>
                      I also use serverless data maintenance technique with
                      firebase and Amazon web servicws
                    </p>
                    <a
                      className='text-warning'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* SVG separator */}
      <div className='separator separator-bottom separator-skew zindex-100'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon className='fill-white' points='2560 0 2560 100 0 100' />
        </svg>
      </div>
    </section>
  );
}

export default Feature6;
