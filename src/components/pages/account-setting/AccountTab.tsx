// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {CardContent, Grid, Typography, Box, Avatar, Button, Stack} from '@mui/material';

// components
import BlankCard from '../../shared/BlankCard';
import CustomTextField from '../../forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';

// images
import user1 from 'src/assets/images/profile/user-1.jpg';

const AccountTab = () => {
    return (
        <Grid container spacing={3}>
            {/* Change Profile */}
            <Grid item xs={12} lg={6}>
                <BlankCard>
                    <CardContent>
                        <Typography variant="h5" mb={1}>
                            Change Profile
                        </Typography>
                        <Typography color="textSecondary" mb={3}>Change your profile picture from here</Typography>
                        <Box textAlign="center" display="flex" justifyContent="center" height={272}>
                            <Box>
                                <Avatar
                                    src={user1}
                                    alt={user1}
                                    sx={{width: 120, height: 120, margin: '0 auto'}}
                                />
                                <Typography variant="subtitle1" color="textSecondary" mb={4}>
                                    Allowed JPG, GIF or PNG. Max size of 800K
                                </Typography>
                            </Box>
                        </Box>
                        <Stack direction="row" sx={{justifyContent: 'end'}} spacing={2} mt={3}>
                            <Button variant="contained" color="primary" component="label">
                                Upload
                                <input hidden accept="image/*" multiple type="file"/>
                            </Button>
                            <Button variant="outlined" color="error">
                                Reset
                            </Button>
                        </Stack>
                    </CardContent>
                </BlankCard>
            </Grid>
            {/*  Change Password */}
            <Grid item xs={12} lg={6}>
                <BlankCard>
                    <CardContent>
                        <Typography variant="h5" mb={1}>
                            Change Password
                        </Typography>
                        <Typography color="textSecondary" mb={3}>To change your password please confirm
                            here</Typography>
                        <form>
                            <CustomFormLabel
                                sx={{
                                    mt: 0,
                                }}
                                htmlFor="text-cpwd"
                            >
                                Current Password
                            </CustomFormLabel>
                            <CustomTextField
                                id="text-cpwd"
                                // v"MathewAnderson"
                                variant="outlined"
                                fullWidth
                                type="password"
                            />
                            {/* 2 */}
                            <CustomFormLabel htmlFor="text-npwd">New Password</CustomFormLabel>
                            <CustomTextField
                                id="text-npwd"
                                // v"MathewAnderson"
                                variant="outlined"
                                fullWidth
                                type="password"
                            />
                            {/* 3 */}
                            <CustomFormLabel htmlFor="text-conpwd">Confirm Password</CustomFormLabel>
                            <CustomTextField
                                id="text-conpwd"
                                // v"MathewAnderson"
                                variant="outlined"
                                fullWidth
                                type="password"
                            />
                        </form>
                        <Stack direction="row" sx={{justifyContent: 'end'}} spacing={2} mt={3}>
                            <Button variant="contained" color="primary" component="label">
                                Update
                            </Button>
                            <Button variant="outlined" color="error">
                                Reset
                            </Button>
                        </Stack>
                    </CardContent>
                </BlankCard>
            </Grid>
            {/* Edit Details */}
            <Grid item xs={12}>
                <BlankCard>
                    <CardContent>
                        <Typography variant="h5" mb={1}>
                            Personal Details
                        </Typography>
                        <Typography color="textSecondary" mb={3}>To change your personal detail , edit and save from
                            here</Typography>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <CustomFormLabel
                                        sx={{
                                            mt: 0,
                                        }}
                                        htmlFor="text-name"
                                    >
                                        First Name
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="text-name"
                                        // v"Mathew Anderson"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {/* 2 */}
                                    <CustomFormLabel
                                        sx={{
                                            mt: 0,
                                        }}
                                        htmlFor="text-store-name"
                                    >
                                        Last Name
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="text-store-name"
                                        // v"Maxima Studio"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {/* 5 */}
                                    <CustomFormLabel
                                        sx={{
                                            mt: 0,
                                        }}
                                        htmlFor="text-email"
                                    >
                                        Email
                                    </CustomFormLabel>
                                    <CustomTextField
                                        id="text-email"
                                        // v"info@modernize.com"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </form>
                        <Stack direction="row" sx={{justifyContent: 'end'}} spacing={2} mt={3}>
                            <Button variant="contained" color="primary" component="label">
                                Update
                            </Button>
                            <Button variant="outlined" color="error">
                                Reset
                            </Button>
                        </Stack>
                    </CardContent>
                </BlankCard>
            </Grid>
        </Grid>
    );
};

export default AccountTab;
