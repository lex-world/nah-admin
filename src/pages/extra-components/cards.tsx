import { Row, Col, Card, CardBody, CardHeader, CardFooter } from 'oah-ui';
import React from 'react';
import SEO from '../../components/SEO';

export default function Cards() {
  return (
    <>
      <SEO title="Cards" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader>Simple card</CardHeader>
            <CardBody>Hello Card component this body of card</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Tiny">
            <CardHeader>Card with size</CardHeader>
            <CardBody>
              Hello Card component this body of card Hello Card component this body of card Hello Card component this
              body of card Hello Card component this body of card
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card status="Info">
            <CardHeader>Status card</CardHeader>
            <CardBody>Hello Card component this body of card</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card status="Primary">
            <CardHeader>Status card</CardHeader>
            <CardBody>Hello Card component this body of card</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card status="Primary" accent="Info">
            <CardHeader>Status and accent card</CardHeader>
            <CardBody>Hello Card component this body of card</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card accent="Info">
            <CardHeader>Card with accent</CardHeader>
            <CardBody>Hello Card component this body of card</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
}
