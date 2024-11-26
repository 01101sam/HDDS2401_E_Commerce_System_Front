import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// MUI Elements
import {
  Box,
  Grid,
  Typography,
  Chip,
  Button,
  Rating,
  Divider,
  Stack,
  ButtonGroup,
} from '@mui/material';

import { useSelector, useDispatch } from 'src/store/Store';
import { fetchProducts, addToCart } from 'src/store/apps/eCommerce/ECommerceSlice.tsx';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import AlertCart from '../productCart/AlertCart';
import { ProductType } from 'src/types/apps/eCommerce';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const Id: any = useParams();

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get Products
  const product: ProductType = useSelector((state) => state.ecommerceReducer.products[Id.id - 1]);
  
  //set qty
  const [count, setCount] = useState(1);

  // for alert when added something to cart
  const [cartAlert, setCartAlert] = React.useState(false);

  const handleClick = () => {
    setCartAlert(true);
  };

  const handleClose = (reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setCartAlert(false);
  };

  return (
    <Box p={2}>
      {product ? (
        <>
          <Box display="flex" alignItems="center">
            {/* ------------------------------------------- */}
            {/* Badge and category */}
            {/* ------------------------------------------- */}
            <Chip label="In Stock" color="success" size="small" />
            <Typography color="textSecondary" variant="caption" ml={1} textTransform="capitalize">
              {product.category}
            </Typography>
          </Box>
          {/* ------------------------------------------- */}
          {/* Title and description */}
          {/* ------------------------------------------- */}
          <Typography fontWeight="600" variant="h4" mt={1}>
            {product.title}
          </Typography>
          {/* ------------------------------------------- */}
          {/* Price */}
          {/* ------------------------------------------- */}
          <Typography mt={2} variant="h4" fontWeight={600}>
            ${product.price}
          </Typography>
          {/* ------------------------------------------- */}
          {/* Ratings */}
          {/* ------------------------------------------- */}
          <Stack direction={'row'} alignItems="center" gap="10px" mt={2} pb={3}>
            <Rating name="simple-controlled" size="small" value={product.rating} readOnly />
            (236 reviews)
          </Stack>
          <Divider />
          
          {/* ------------------------------------------- */}
          {/* Qty */}
          {/* ------------------------------------------- */}
          <Stack direction="row" alignItems="center" pb={5} py={4}>
            <Typography variant="h6" mr={4}>
              QTY:
            </Typography>
            <Box>
              <ButtonGroup size="small" color="secondary" aria-label="small button group">
                <Button key="one" onClick={() => setCount(count < 2 ? count : count - 1)}>
                  <IconMinus size="1.1rem" />
                </Button>
                <Button key="two">{count}</Button>
                <Button key="three" onClick={() => setCount(count + 1)}>
                  <IconPlus size="1.1rem" />
                </Button>
              </ButtonGroup>
            </Box>
          </Stack>
          <Divider />

          {/* ------------------------------------------- */}
          {/* Buttons */}
          {/* ------------------------------------------- */}
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} lg={4} md={6}>
              <Button
                color="primary"
                size="large"
                fullWidth
                component={Link}
                variant="contained"
                to="/apps/eco-checkout"
                onClick={() => dispatch(addToCart(product))}
              >
                Buy Now
              </Button>
            </Grid>
            <Grid item xs={12} lg={4} md={6}>
              <Button
                color="error"
                size="large"
                fullWidth
                variant="contained"
                onClick={() => dispatch(addToCart(product)) && handleClick()}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
          {/* ------------------------------------------- */}
          {/* Alert When click on add to cart */}
          {/* ------------------------------------------- */}
          <AlertCart handleClose={handleClose} openCartAlert={cartAlert} />
        </>
      ) : (
        'No product'
      )}
    </Box>
  );
};

export default ProductDetail;
