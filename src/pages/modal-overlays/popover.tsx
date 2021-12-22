import React from 'react';
import { Row, Col, Card, CardBody, Button, Tabs, Tab, Popover, ContextMenu } from 'oah-ui';
import { Link } from 'gatsby';
import SEO from '../../components/SEO';

export default function PopoverPage() {
  return (
    <>
      <SEO title="Popover" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Tiny">
            <header>Popover Position</header>
            <CardBody id="popoverScroll">
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="left"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Left</Button>
              </Popover>
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="right"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Right</Button>
              </Popover>
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Top</Button>
              </Popover>
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="bottom"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Bottom</Button>
              </Popover>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Tiny">
            <header>Simple Popovers</header>
            <CardBody className="popoverScroll">
              <Popover
                eventListener=".popoverScroll"
                className="with-margin inline-block"
                trigger="click"
                placement="top"
                overlay={
                  <Tabs activeIndex={0} fullWidth>
                    <Tab title="Tab 1" icon="icon ion-ios-home" responsive>
                      Content 1
                    </Tab>
                    <Tab title="Tab 2" icon="icon ion-ios-star-outline" responsive>
                      Content 2
                    </Tab>
                  </Tabs>
                }
              >
                <Button fullWidth>on click</Button>
              </Popover>
              <Popover
                eventListener=".popoverScroll"
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                overlay={
                  <Card className="popover-card">
                    <header>Hello!</header>
                    <CardBody>Hello, how are you today?</CardBody>
                  </Card>
                }
              >
                <Button fullWidth>on hover</Button>
              </Popover>
              <Popover
                eventListener=".popoverScroll"
                className="with-margin inline-block"
                trigger="focus"
                placement="top"
                overlay={
                  <Card className="popover-card">
                    <header>Hello!</header>
                    <CardBody>Hello, how are you today?</CardBody>
                  </Card>
                }
              >
                <Button fullWidth>on focus</Button>
              </Popover>
              <ContextMenu
                className="with-margin inline-block"
                placement="bottom"
                items={[
                  { title: 'Profile', link: { to: '/modal-overlays/tooltip' } },
                  { title: 'Log out', link: { to: '/logout' } },
                ]}
                Link={Link}
              >
                <Button fullWidth>Context Menu</Button>
              </ContextMenu>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
