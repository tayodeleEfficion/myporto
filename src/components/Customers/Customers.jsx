/** @format */

import React from 'react';
import Card from 'reactstrap/lib/Card';
import CardImg from 'reactstrap/lib/CardImg';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';

function Customers({ myref }) {
  return (
    <section className='section bg-secondary' ref={myref}>
      <Container>
        <Row className='row-grid align-items-center'>
          <Col md='6'>
            <Card className='bg-default shadow border-0'>
              <CardImg
                alt='...'
                src={require('assets/img/theme/img-1-1200x1000.jpg')}
                top
              />
              <blockquote className='card-blockquote'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='svg-bg'
                  preserveAspectRatio='none'
                  viewBox='0 0 583 95'
                >
                  <polygon className='fill-default' points='0,52 583,95 0,95' />
                  <polygon
                    className='fill-default'
                    opacity='.2'
                    points='0,42 583,95 683,0 0,95'
                  />
                </svg>
                <h4 className='display-3 font-weight-bold text-white'>
                  Design System with REST or GRAPHQL Architectures
                </h4>
                <p className='lead text-italic text-white'>
                  awsesome Business Logic using nodejs, leveraging on chrome v8
                  engines, mind blowing architectures with REST o GRAPHQL
                </p>
              </blockquote>
            </Card>
          </Col>
          <Col md='6'>
            <div className='pl-md-5'>
              <div className='icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5'>
                <i className='ni ni-settings' />
              </div>
              <h3>My Backend Stack</h3>
              <p className='lead'>
                The inexhaustible features of javascript for backend
                developmemnt has been so awesome
              </p>
              <p>
                Using the Rest design pattern, with all its powers and features
              </p>
              <p>
                Also the Graphql architecture for bandwidth management is greate
                tool i use as well
              </p>
              <a
                className='font-weight-bold text-warning mt-5'
                href='#pablo'
                onClick={(e) => e.preventDefault()}
              >
                Building Scalable Business Logic
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Customers;
