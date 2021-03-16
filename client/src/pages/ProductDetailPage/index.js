import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

import { productActions } from '../../redux/actions';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(productActions.getOneProduct(id));
  }, [dispatch, id]);

  return (
    <Container>
      {!error && (
        <div className='mb-5'>
          <h4>{product ? product.name : <Skeleton />}</h4>
        </div>
      )}
    </Container>
  );
};

export default ProductDetailPage;
