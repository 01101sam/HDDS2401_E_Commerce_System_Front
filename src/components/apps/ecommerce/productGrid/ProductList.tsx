// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import {
  Box,
  Grid,
  Stack,
  CardContent,
  useMediaQuery,
  Typography,
  Rating,
  Fab,
  Tooltip,
  Button,
  Theme,
  Skeleton,
} from '@mui/material';
import { useSelector, useDispatch } from 'src/store/Store';
import {
  fetchProducts,
  addToCart,
  filterReset,
} from 'src/store/apps/eCommerce/ECommerceSlice.tsx';
import ProductSearch from './ProductSearch';
import { IconBasket, IconMenu2 } from '@tabler/icons-react';
import AlertCart from '../productCart/AlertCart';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import BlankCard from '../../../shared/BlankCard';
import { ProductType } from 'src/types/apps/eCommerce';

interface Props {
  onClick: (event: React.SyntheticEvent | Event) => void;
}

const ProductList = ({ onClick }: Props) => {
  const dispatch = useDispatch();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getVisibleProduct = (
    products: ProductType[],
    filters: any,
    search: string,
  ) => {
    // FILTER PRODUCTS
    if (filters.category !== 'All') {
      //products = filter(products, (_product) => includes(_product.category, filters.category));
      products = products.filter((_product) => _product.category_names.includes(filters.category));
    }

    //FILTER PRODUCTS BY Search
    if (search !== '') {
      products = products.filter((_product) =>
        _product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      );
    }

    return products;
  };

  const getProducts = useSelector((state) =>
    getVisibleProduct(
      state.ecommerceReducer.products,
      state.ecommerceReducer.filters,
      state.ecommerceReducer.productSearch,
    ),
  );

  // for alert when added something to cart
  const [cartalert, setCartalert] = React.useState(false);

  const handleClick = () => {
    setCartalert(true);
  };

  const handleClose = (reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setCartalert(false);
  };

  // skeleton
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      {/* ------------------------------------------- */}
      {/* Header Detail page */}
      {/* ------------------------------------------- */}
      <Stack direction="row" justifyContent="space-between" pb={3}>
        {lgUp ? (
          <Typography variant="h5">Products</Typography>
        ) : (
          <Fab onClick={onClick} color="primary" size="small">
            <IconMenu2 width="16" />
          </Fab>
        )}
        <Box>
          <ProductSearch />
        </Box>
      </Stack>

      {/* ------------------------------------------- */}
      {/* Page Listing product */}
      {/* ------------------------------------------- */}
      <Grid container spacing={3}>
        {getProducts.length > 0 ? (
          <>
            {getProducts.map((product) => (
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sm={6}
                display="flex"
                alignItems="stretch"
                key={product.id}
              >
                {/* ------------------------------------------- */}
                {/* Product Card */}
                {/* ------------------------------------------- */}
                {isLoading ? (
                  <>
                    <Skeleton
                      variant="rectangular"
                      width={270}
                      height={300}
                      sx={{ borderRadius: (theme) => theme.shape.borderRadius / 5 }}
                    ></Skeleton>
                  </>
                ) : (
                  <BlankCard className="hoverCard">
                    <Typography>
                      <img src={product.thumbnail_url} alt="img" width="100%" />
                    </Typography>
                    <Tooltip title="Add To Cart">
                      <Fab
                        size="small"
                        color="primary"
                        onClick={() => dispatch(addToCart(product)) && handleClick()}
                        sx={{ bottom: '75px', right: '15px', position: 'absolute' }}
                      >
                        <IconBasket size="16" />
                      </Fab>
                    </Tooltip>
                    <CardContent sx={{ p: 3, pt: 2 }}>
                      <Typography variant="h6">{product.name}</Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        mt={1}
                      >
                        <Stack direction="row" alignItems="center">
                          <Typography variant="h6">${product.price}</Typography>
                        </Stack>
                        <Rating name="read-only" size="small" value={product.rating.average} readOnly />
                      </Stack>
                    </CardContent>
                  </BlankCard>
                )}
                <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
                {/* ------------------------------------------- */}
                {/* Product Card */}
                {/* ------------------------------------------- */}
              </Grid>
            ))}
          </>
        ) : (
          <>
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <Box textAlign="center" mt={6}>
                <img src={emptyCart} alt="cart" width="200px" />
                <Typography variant="h2">There is no Product</Typography>
                <Typography variant="h6" mb={3}>
                  The Product you are searching is no longer available.
                </Typography>
                <Button variant="contained" onClick={() => dispatch(filterReset())}>
                  Try Again
                </Button>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default ProductList;
