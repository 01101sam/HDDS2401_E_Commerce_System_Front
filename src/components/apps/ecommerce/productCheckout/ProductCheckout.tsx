// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {sum} from 'lodash';
import {Box, Button, Stack} from '@mui/material';
import AddToCart from '../productCart/AddToCart';

import {IconArrowBack} from '@tabler/icons-react';
import {useSelector} from 'src/store/Store';
import HorizontalStepper from './HorizontalStepper';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FinalStep from './FinalStep';
import {ProductType} from 'src/types/apps/eCommerce';
import axios from "src/utils/axios.ts";

const ProductCheckout = () => {
    const checkout = useSelector((state) => state.ecommerceReducer.cart);
    const steps = ['Cart', 'Billing & address', 'Payment'];
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const [addressId, setAddressId] = React.useState('');
    const [gatewayId, setGatewayId] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleCheckout = () => {
        const pay = async () => {
            const cartResponse = await axios.get('/api/checkout/summary');

            const response = await axios.post('/api/checkout/pay?' + new URLSearchParams({
                cart_id: cartResponse.data.cart_id,
                address_id: addressId,
                gateway: gatewayId,
            }));

            setTimeout(() => window.open(response.data.redirect_url), 1000 * 3);
        }

        setIsSubmitting(true);
        pay()
            .then(() => handleNext())
            .catch(e => console.error(e))
            .finally(() => setIsSubmitting(false));
    }

    const total = sum(checkout.map((product: ProductType) => product.price * product.qty));

    return (
        <Box>
            <HorizontalStepper
                steps={steps}
                activeStep={activeStep}
                finalStep={<FinalStep/>}
            >
                {/* ------------------------------------------- */}
                {/* Step1 */}
                {/* ------------------------------------------- */}
                {activeStep === 0 ? (
                    <>
                        <Box my={3}>
                            <AddToCart/>
                        </Box>
                        {checkout.length > 0 ? (
                            <>
                                {/* ------------------------------------------- */}
                                {/* Cart Total */}
                                {/* ------------------------------------------- */}
                                <FirstStep total={total}/>
                                <Stack direction={'row'} justifyContent="space-between">
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                    >
                                        Back
                                    </Button>
                                    <Button variant="contained" onClick={handleNext}>
                                        Checkout
                                    </Button>
                                </Stack>
                            </>
                        ) : (
                            ''
                        )}
                    </>
                ) : activeStep === 1 ? (
                    <>
                        {/* ------------------------------------------- */}
                        {/* Step2 */}
                        {/* ------------------------------------------- */}
                        <SecondStep nextStep={handleNext} setAddressId={setAddressId}/>
                        <FirstStep total={total}/>
                        <Stack direction={'row'} justifyContent="space-between">
                            <Button color="inherit" disabled={activeStep !== 1} onClick={handleBack}>
                                Back
                            </Button>
                            <Button color="inherit" variant="outlined">
                                Select Address to go next
                            </Button>
                        </Stack>
                    </>
                ) : (
                    <>
                        {/* ------------------------------------------- */}
                        {/* Step3 */}
                        {/* ------------------------------------------- */}
                        <ThirdStep setGatewayId={setGatewayId}/>
                        <FirstStep total={total}/>
                        <Stack direction={'row'} justifyContent="space-between">
                            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack}>
                                <IconArrowBack/> Back
                            </Button>
                            <Button onClick={handleCheckout} size="large" variant="contained" disabled={isSubmitting}>
                                Complete an Order
                            </Button>
                        </Stack>
                    </>
                )}
            </HorizontalStepper>
        </Box>
    );
};

export default ProductCheckout;
