import {Avatar, Box, IconButton, Tooltip, Typography, useMediaQuery} from '@mui/material';
import {AppState, useSelector} from 'src/store/Store';
import img1 from 'src/assets/images/profile/user-1.jpg';
import {IconPower} from '@tabler/icons-react';
import {Link, useNavigate} from 'react-router-dom';
import useAuth from "src/guards/authGuard/UseAuth.tsx";

export const Profile = () => {
    const customizer = useSelector((state: AppState) => state.customizer);
    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
    const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
    const {logOut, user} = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box
            display={'flex'}
            alignItems="center"
            gap={2}
            sx={{m: 3, p: 2, bgcolor: `${'secondary.light'}`}}
        >
            {!hideMenu ? (
                <>
                    <Avatar alt="Remy Sharp" src={img1}/>

                    <Box>
                        <Typography variant="h6">{user?.firstName}</Typography>
                        <Typography variant="caption">{(user?.roles || []).sort()[0]}</Typography>
                    </Box>
                    <Box sx={{ml: 'auto'}}>
                        <Tooltip title="Logout" placement="top" onClick={handleLogout}>
                            <IconButton
                                color="primary"
                                component={Link}
                                to="auth/login"
                                aria-label="logout"
                                size="small"
                            >
                                <IconPower size="20"/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </>
            ) : (
                ''
            )}
        </Box>
    );
};
