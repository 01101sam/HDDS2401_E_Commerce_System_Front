import {useEffect} from 'react';
import {Box} from '@mui/material';
import {useSelector, useDispatch} from 'src/store/Store';
import {useParams} from 'react-router-dom';

//Carousel slider for product
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';


//fetch product
import {fetchProducts} from 'src/store/apps/eCommerce/ECommerceSlice';
import {ProductType} from 'src/types/apps/eCommerce';

const ProductCarousel = () => {
    const dispatch = useDispatch();
    const Id: any = useParams();

    // Get Product
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // Get Products
    const product: ProductType = useSelector((state) => state.ecommerceReducer.products[Id.id - 1]);
    const getProductImage = product ? product.thumbnail_url : '';

    return (
        <Box>
            <Box>
                <img
                    src={getProductImage}
                    alt={getProductImage}
                    width="100%"
                    style={{borderRadius: '5px'}}
                />
            </Box>
        </Box>
    );
};

export default ProductCarousel;
