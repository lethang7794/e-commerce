import React from 'react';
import PublicNavBar from '../PublicNavBar';
import { Container, Row, Col } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import AlertMsg from '../AlertMsg';

const AdminLayout = () => {
  return (
    <>
      <PublicNavBar />
      <Container fluid>
        <Row>
          <Col md={9} lg={10}>
            <AlertMsg />
            <Switch>
              <Route exact path='/'>
                Admin Page
              </Route>
              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLayout;
