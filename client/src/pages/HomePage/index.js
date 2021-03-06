import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Container } from 'react-bootstrap';
import { productActions } from '../../redux/actions';
import './HomePage.css';
import ProductCard from '../../components/ProductCard';

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
        {/* {loading ? (
          <Row
            style={{
              backgroundColor: 'white',
            }}
          >
            {new Array(10).fill(null).map(() => (
              <ProductCard />
            ))}
          </Row>
        ) : ( */}
        <>
          {products.length > 0 && (
            <Row
              style={{
                backgroundColor: 'white',
              }}
            >
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </Row>
          )}
        </>
        {/* )} */}
      </Container>
    </div>
  );
}

export default HomePage;
