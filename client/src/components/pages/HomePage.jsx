import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Container } from 'react-bootstrap';
import { productActions } from '../../redux/actions';
import './HomePage.css';
import ProductCard from '../ProductCard';

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
                  <ProductCard key={product._id} product={product} />
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
