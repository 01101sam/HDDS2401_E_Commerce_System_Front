// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {Box, Typography, Button, Alert} from '@mui/material';
import {useNavigate} from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import {Stack} from '@mui/system';
import {registerType} from 'src/types/auth/auth';
import {Form, useFormik, FormikProvider} from 'formik';
import * as Yup from 'yup';
import useAuth from 'src/guards/authGuard/UseAuth';
import useMounted from 'src/guards/authGuard/UseMounted';

const AuthRegister = ({title, subtitle}: registerType) => {
    const mounted = useMounted();
    const {signUp} = useAuth();
    const navigate = useNavigate();


    const registerSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string(),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            submit: null,
        },

        validationSchema: registerSchema,

        onSubmit: async (values, {setErrors, setStatus, setSubmitting}) => {
            try {
                await signUp(values.email, values.password, values.firstName, values.lastName);
                navigate('/auth/login');
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

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h3" mb={1}>
                    {title}
                </Typography>
            ) : null}

            <Box>
                {errors.submit && (
                    <Box mt={2}>
                        <Alert severity="error">{errors.submit}</Alert>
                    </Box>
                )}
                <FormikProvider value={formik}>
                    <Form onSubmit={handleSubmit}>
                        <Stack mb={3}>
                            <Stack direction="row" spacing={2}>
                                <Box flex={1}>
                                    <CustomFormLabel htmlFor="first-name">First Name</CustomFormLabel>
                                    <CustomTextField
                                        id="first-name"
                                        variant="outlined"
                                        fullWidth
                                        {...getFieldProps('firstName')}
                                        error={Boolean(touched.firstName && errors.firstName)}
                                        helperText={touched.firstName && errors.firstName}
                                    />
                                </Box>
                                <Box flex={1}>
                                    <CustomFormLabel htmlFor="last-name">Last Name</CustomFormLabel>
                                    <CustomTextField
                                        id="last-name"
                                        variant="outlined"
                                        fullWidth
                                        {...getFieldProps('lastName')}
                                        error={Boolean(touched.lastName && errors.lastName)}
                                        helperText={touched.lastName && errors.lastName}
                                    />
                                </Box>
                            </Stack>

                            <CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
                            <CustomTextField
                                id="email"
                                variant="outlined"
                                fullWidth
                                {...getFieldProps('email')}
                                error={Boolean(touched.email && errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                            <CustomTextField
                                id="password"
                                variant="outlined"
                                fullWidth
                                {...getFieldProps('password')}
                                error={Boolean(touched.password && errors.password)}
                                helperText={touched.password && errors.password}
                            />
                        </Stack>
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            fullWidth
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Sign Up
                        </Button>
                    </Form>
                </FormikProvider>
            </Box>
            {subtitle}
        </>
    );
};

export default AuthRegister;
