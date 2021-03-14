import React from 'react';
import PublicNavBar from '../PublicNavBar';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import AlertMsg from '../AlertMsg';
// import PrivateRoute from '../Routes/PrivateRoute';

const PublicLayout = () => {
  return (
    <>
      <PublicNavBar />
      <Container>
        <AlertMsg />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
