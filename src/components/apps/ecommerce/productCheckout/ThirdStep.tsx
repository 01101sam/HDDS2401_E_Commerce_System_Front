// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, {Dispatch, SetStateAction, SyntheticEvent, useEffect} from 'react';
import {Box, Grid, Paper, Radio, Stack, Typography} from '@mui/material';
import payment from 'src/assets/images/products/payment.svg';
import axios from "src/utils/axios.ts";

interface deliveryType {
    id: number;
    title: string;
    description: string;
}

interface paymentType {
    value: string;
    title: string;
    description: string;
    icons?: string;
}

const Delivery: deliveryType[] = [
    {
        id: 1,
        title: 'Free delivery',
        description: 'Delivered within 1-5 days',
    },
    {
        id: 2,
        title: 'SF Express',
        description: 'Delivered within 0-2 days',
    },
];

interface Props {
    setGatewayId: Dispatch<SetStateAction<string>>;
}

const ThirdStep = ({setGatewayId}: Props) => {
    const [selectedValue, setSelectedValue] = React.useState('Free delivery');
    const [selectedPayment, setSelectedPayment] = React.useState('paypal');
    const [paymentList, setPaymentList] = React.useState<paymentType[]>([]);

    const handleDChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setSelectedValue(event.target.value);


    const handlePChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPayment(event.target.value);
        setGatewayId(event.target.value);
    }

    useEffect(() => {
        const fetchPaymentType = async () => {
            const response = await axios.get('/api/checkout/payments');

            const paymentList: paymentType[] = [];

            for (const option of response.data) {
                switch (option) {
                    case "dummy_gateway":
                        paymentList.push({
                            value: 'dummy_gateway',
                            title: 'Dummy Gateway',
                            description: '',
                        });
                        break;
                    case "free":
                        paymentList.push({
                            value: 'free',
                            title: 'No Payment',
                            description: 'No payment required.',
                        });
                        break;
                    case "stripe":
                        paymentList.push({
                            value: 'stripe',
                            title: 'Stripe',
                            description: 'You will be redirected to Stripe checkout to complete your purchase securely.',
                        });
                        break;
                }
            }

            setPaymentList(paymentList);
            setSelectedPayment(paymentList[0].value);
            setGatewayId(paymentList[0].value);
        }

        fetchPaymentType().catch(e => console.error(e));
    }, []);

    return (
        <>
            {/* ------------------------------------------- */}
            {/* Delivery Option */}
            {/* ------------------------------------------- */}
            <Paper variant="outlined" sx={{p: 3, mt: 4}}>
                <Typography variant="h6">Delivery Option</Typography>
                <Grid container spacing={3} mt={1}>
                    {Delivery.map((option) => (
                        <Grid item lg={15} xs={12} key={option.id}>
                            <Paper
                                variant="outlined"
                                sx={{
                                    p: 2,
                                    borderColor: selectedValue === option.title ? 'primary.main' : '',
                                    backgroundColor: selectedValue === option.title ? 'primary.light' : '',
                                }}
                            >
                                <Stack direction={'row'} alignItems="center" gap={1}>
                                    <Radio
                                        checked={selectedValue === option.title}
                                        onChange={handleDChange}
                                        value={option.title}
                                        name="radio-buttons"
                                        inputProps={{'aria-label': option.title}}
                                    />
                                    <Box>
                                        <Typography variant="h6">{option.title}</Typography>
                                        <Typography variant="subtitle2">{option.description}</Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
            {/* ------------------------------------------- */}
            {/* Payment Option */}
            {/* ------------------------------------------- */}
            <Paper variant="outlined" sx={{p: 3, mt: 4}}>
                <Typography variant="h6">Payment Option</Typography>
                <Grid container spacing={3} alignItems="center">
                    <Grid lg={8} xs={12} item>
                        <Grid container spacing={3} mt={2}>
                            {paymentList.map((option) => (
                                <Grid item lg={12} xs={12} key={option.value}>
                                    <Paper
                                        variant="outlined"
                                        sx={{
                                            p: 2,
                                            borderColor: selectedPayment === option.value ? 'primary.main' : '',
                                            backgroundColor: selectedPayment === option.value ? 'primary.light' : '',
                                        }}
                                    >
                                        <Stack direction={'row'} alignItems="center" gap={1}>
                                            <Radio
                                                checked={selectedPayment === option.value}
                                                onChange={handlePChange}
                                                value={option.value}
                                                name="radio-buttons"
                                                inputProps={{'aria-label': option.title}}
                                            />
                                            <Box>
                                                <Typography variant="h6">{option.title}</Typography>
                                                <Typography variant="subtitle2">{option.description}</Typography>
                                            </Box>
                                            <Box ml="auto">
                                                {option.icons ? <img src={option.icons} alt="payment"/> : ''}
                                            </Box>
                                        </Stack>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid lg={4} xs={12} item>
                        <img src={payment} alt="payment" width={'100%'}/>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default ThirdStep;
