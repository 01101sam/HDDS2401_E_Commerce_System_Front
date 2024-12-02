// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Stack,
  ButtonGroup,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
import { useSelector, useDispatch } from 'src/store/Store';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import { increment, deleteCart, decrement } from '../../../../store/apps/eCommerce/ECommerceSlice';
import { ProductType } from 'src/types/apps/eCommerce';

const AddToCart = () => {
  const dispatch = useDispatch();

  // Get Products
  const CartProduct: ProductType[] = useSelector((state) => state.ecommerceReducer.cart);
  console.log(CartProduct);
  const Increase = (productId: number | string) => {
    dispatch(increment(productId));
  };

  const Decrease = (productId: number | string) => {
    dispatch(decrement(productId));
  };

  return (
    <Box>
      {CartProduct.length > 0 ? (
        <>
          <Box>
            <TableContainer sx={{ minWidth: 350 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>

                    <TableCell align="left">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {CartProduct.map((product) => (
                    <TableRow key={product.id}>
                      {/* ------------------------------------------- */}
                      {/* Product Image & Title */}
                      {/* ------------------------------------------- */}
                      <TableCell>
                        <Stack direction="row" alignItems="center" gap={2}>
                          <Avatar
                            src={product.thumbnail_url}
                            alt={product.thumbnail_url}
                            sx={{
                              borderRadius: '10px',
                              height: '80px',
                              width: '90px',
                            }}
                          />
                          <Box>
                            <Typography variant="h6">{product.name}</Typography>{' '}
                            <Typography color="textSecondary" variant="body1">
                              {product.category_names[0]}
                            </Typography>
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => dispatch(deleteCart(product.id))}
                            >
                              <IconTrash size="1rem" />
                            </IconButton>
                          </Box>
                        </Stack>
                      </TableCell>

                      <TableCell>
                        <ButtonGroup size="small" color="success" aria-label="small button group">
                          <Button onClick={() => Decrease(product.id)} disabled={product.qty < 2}>
                            <IconMinus stroke={1.5} size="0.8rem" />
                          </Button>
                          <Button>{product.qty}</Button>
                          <Button onClick={() => Increase(product.id)}>
                            <IconPlus stroke={1.5} size="0.8rem" />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="h6">${product.price * product.qty}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      ) : (
        <Box textAlign="center" mb={3}>
          <img src={emptyCart} alt="cart" width="200px" />
          <Typography variant="h5" mb={2}>
            Cart is Empty
          </Typography>
          <Button component={Link} to="/shop" variant="contained">
            Go back to Shopping
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AddToCart;
