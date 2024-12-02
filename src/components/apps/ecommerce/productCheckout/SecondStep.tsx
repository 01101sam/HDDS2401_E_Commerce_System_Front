import {Button, Grid, Paper, Typography} from '@mui/material';
import {IconDeviceMobile} from '@tabler/icons-react';
import {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import axios from "src/utils/axios.ts";

interface phoneNumberType {
    country_code: number;
    number: string;
}

interface addressType {
    id: string;
    street1: string;
    street2?: string;
    city: string;
    state: string;
    country: string;
    zip_code?: string;

    phone_number: phoneNumberType;
}

const addressList: addressType[] = [];

interface Props {
    nextStep: (event: SyntheticEvent | Event) => void;
    setAddressId: Dispatch<SetStateAction<string>>;
}

const SecondStep = ({nextStep, setAddressId}: Props) => {
    const [addresses, setAddresses] = useState<addressType[]>(addressList);

    function saveAddressId(self: any, id: string) {
        setAddressId(id);
        nextStep(self);
    }

    useEffect(() => {
        const fetchAddress = async () => {
            const response = await axios.get('/api/address');

            setAddresses(response.data);
        }

        fetchAddress().catch(e => console.error(e));
    }, []);

    return (
        <>
            <Grid container spacing={3} mb={3} mt={1}>
                {addresses.map(address => (
                    <Grid item lg={4} xs={12} key={address.id}>
                        <Paper variant="outlined" sx={{p: 3}}>
                            {/*<Typography variant="h6" mb={2}>*/}
                            {/*    {address.id}*/}
                            {/*</Typography>*/}
                            <Typography gutterBottom>
                                {address.street1} {address.street2 ? ", " + address.street2 : ''}
                                <br/>
                                {address.city}, {address.state}, {address.country}
                                {address.zip_code && <br/>}
                                {address.zip_code ? address.zip_code : ''}
                            </Typography>
                            <Typography variant="h6" my={3} alignItems="center" display="flex" gap={1}>
                                <IconDeviceMobile/> +{address.phone_number.country_code} {address.phone_number.number}
                            </Typography>
                            <Button variant="outlined" onClick={(self) => saveAddressId(self, address.id)}>
                                Deliver To this address
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default SecondStep;
