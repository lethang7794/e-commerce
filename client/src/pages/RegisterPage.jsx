import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import authActions from '../redux/actions/auth.actions';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = formData;
    if (password !== password2) {
      setErrors({ ...errors, password2: 'Passwords do not match' });
      return;
    }
    dispatch(authActions.register({ name, email, password }));
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className='text-center mb-3'>
            <h1 className='text-primary'>Sign Up</h1>
            <p className='lead'>Create Your Account</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className='form-text text-danger'>{errors.name}</small>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='email'
                placeholder='Email Address'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className='form-text text-danger'>{errors.email}</small>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <small className='form-text text-danger'>
                  {errors.password}
                </small>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                name='password2'
                value={formData.password2}
                onChange={handleChange}
              />
            </Form.Group>

            {loading ? (
              <Button
                className='btn-block'
                variant='primary'
                type='button'
                disabled
              >
                <span
                  className='spinner-border spinner-border-sm'
                  role='status'
                  aria-hidden='true'
                ></span>
                Loading...
              </Button>
            ) : (
              <Button className='btn-block' type='submit' variant='primary'>
                Register
              </Button>
            )}

            <p>
              Already have an account? <Link to='/login'>Sign In</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
