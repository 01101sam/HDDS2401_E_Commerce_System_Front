// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {Alert, Box, Button, Stack} from '@mui/material';
import {Link} from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import useAuth from "src/guards/authGuard/UseAuth.tsx";
import * as Yup from "yup";
import {Form, FormikProvider, useFormik} from "formik";
import useMounted from "src/guards/authGuard/UseMounted.tsx";

const AuthForgotPassword = () => {
    const mounted = useMounted();
    const {resetPassword} = useAuth();

    const ResetSchema = Yup.object().shape({
        email: Yup.string().email('Email is invalid').required('Email is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: 'demo@demo.com',
            submit: null,
        },

        validationSchema: ResetSchema,

        onSubmit: async (values, {setErrors, setStatus, setSubmitting}) => {
            try {
                const result = await resetPassword(values.email);

                setErrors({submit: result.data.detail});
                if (mounted.current) {
                    setStatus({success: true});
                    setSubmitting(true);
                }
            } catch (err: any) {
                if (mounted.current) {
                    setStatus({success: false});
                    setErrors({submit: err.detail});
                    setSubmitting(false);
                }
            }
        },
    });

    const {errors, touched, handleSubmit, isSubmitting, getFieldProps} = formik;

    return (<>
        {errors.submit && (
            <Box mt={2}>
                <Alert severity="error">{errors.submit}</Alert>
            </Box>
        )}
        <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit}>
                <Stack mt={4} spacing={2}>
                    <CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
                    <CustomTextField
                        id="email"
                        variant="outlined"
                        fullWidth
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />

                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Forgot Password
                    </Button>
                    <Button color="primary" size="large" fullWidth component={Link} to="/auth/login">
                        Back to Login
                    </Button>
                </Stack>
            </Form>
        </FormikProvider>
    </>);
};

export default AuthForgotPassword;
