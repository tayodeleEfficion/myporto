/** @format */

import SimpleCards from 'components/Cards/SimpleCards';
import React from 'react';
import Badge from 'reactstrap/lib/Badge';
import Button from 'reactstrap/lib/Button';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';

function Card3() {
  return (
    <section className='section section-lg pt-lg-0 mt--100'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg='12'>
            <Row className='row-grid'>
              <Col lg='4'>
                <SimpleCards
                  icon='atom'
                  color='primary'
                  title='Frontend'
                  description='Here are my Frontend Projects'
                  badges={[
                    'React',
                    'Javacript',
                    'Redux',
                    'React Native',
                    'Recoil',
                  ]}
                />
              </Col>
              <Col lg='4'>
                <SimpleCards
                  icon='ui-04'
                  color='success'
                  title='Backend'
                  description=' Backend Projects'
                  badges={['Nodejs', 'Java', 'Python', 'Graphql', 'Rest Api']}
                />
              </Col>
              <Col lg='4'>
                <SimpleCards
                  icon='palette'
                  color='warning'
                  title='Database'
                  description='Database Sysytem'
                  badges={[
                    'Mongodb',
                    'Firebase',
                    'Amazon web Services',
                    'SQL&Postgres',
                  ]}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Card3;
