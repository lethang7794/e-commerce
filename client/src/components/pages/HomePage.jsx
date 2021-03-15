import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productActions } from '../../redux/actions';
import './HomePage.css';

function HomePage() {
  const [pageNum, setPageNum] = useState(1);

  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const totalPageNum = useSelector((state) => state.product.totalPageNum);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getAllProducts(pageNum));
  }, [dispatch, pageNum]);

  return (
    <div className='HomePage'>
      <Container>
        {loading ? (
          <div>Loading</div>
        ) : (
          <>
            {products.length ? (
              <Row
                style={{
                  backgroundColor: 'white',
                }}
              >
                {products.map((product) => (
                  <Col
                    as={Link}
                    to={'/'}
                    xs={6}
                    md={4}
                    lg={3}
                    xl={2}
                    className='ProductCard text-reset text-decoration-none d-flex flex-column py-3'
                    key={product._id}
                  >
                    <div className='embed-responsive embed-responsive-1by1'>
                      {product.images.length > 1 && (
                        <div className='product__image__wrapper product__image__wrapper--secondary embed-responsive-item d-flex justify-content-center '>
                          <img
                            className='product__image product__image--secondary'
                            style={{
                              maxWidth: '100%',
                              objectFit: 'contain',
                            }}
                            src={product.images[1].imageUrl}
                            alt=''
                          />
                        </div>
                      )}

                      <div
                        className='product__image__wrapper product__image__wrapper--primary embed-responsive-item d-flex justify-content-center'
                        style={{
                          opacity: product.images.length <= 1 && '1',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0',
                            backgroundColor: 'white',
                            zIndex: '1',
                          }}
                        ></div>
                        <img
                          className='product__image product__image--primary'
                          style={{
                            maxWidth: '100%',
                            objectFit: 'contain',
                            zIndex: '2',
                          }}
                          src={product.images[0].imageUrl}
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='product__info flex-grow-1 d-flex flex-column mt-1'>
                      <div
                        className='product__name flex-grow-1'
                        // style={{
                        //   whiteSpace: 'nowrap',
                        //   overflow: 'hidden',
                        //   textOverflow: 'ellipsis',
                        // }}
                        // style={{
                        //   overflow: 'hidden',
                        //   whiteSpace: 'nowrap',
                        //   textOverflow: 'ellipsis',
                        //   height: '3rem',
                        // }}
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                          overflow: 'hidden',
                          fontSize: '0.8125rem',
                        }}
                      >
                        {product.name}
                      </div>
                      <div
                        className='product__price'
                        style={{
                          fontSize: '0.9375rem',
                          fontWeight: '500',
                          lineHeight: '1.5rem',
                        }}
                      >
                        {product.price}$
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ) : (
              <p>There are no products</p>
            )}
          </>
        )}
      </Container>
    </div>
  );
}

export default HomePage;
