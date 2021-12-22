import { Col, Row, Card, Tabs, Tab } from 'oah-ui';
import React from 'react';
import SEO from '../../components/SEO';

const TabPage = () => {
  return (
    <>
      <SEO title="Tabs" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <Tabs activeIndex={0} fullWidth>
              <Tab
                title="Tab 1"
                icon="icon ion-ios-home"
                badge={{ status: 'Danger', title: '11', position: 'topStart' }}
                responsive
              >
                <h1>Content 1</h1>
              </Tab>
              <Tab
                title="Tab 2"
                icon="icon ion-ios-star-outline"
                badge={{ status: 'Info', title: '11', position: 'bottomEnd' }}
                responsive
              >
                <h1>Content 2</h1>
              </Tab>
              <Tab
                title="Tab 3"
                icon="icon ion-ios-switch"
                badge={{ status: 'Success', title: '11', position: 'topStart' }}
                responsive
              >
                <h1>Content 3</h1>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default TabPage;
