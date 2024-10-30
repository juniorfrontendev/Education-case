import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MyComponent from "../../../icons/kilavuz";
import {MenuList} from "@mui/material";
import theme from "../../../assets/theme"
import {ThemeProvider} from '@mui/material/styles';




 export const pages = [
    {label:'Shop' , icon:<none/> , size:"small"},
    {label:'For Kindergarten' , icon:<KeyboardArrowDownOutlinedIcon/>},
    {label:'For High School' , icon:<KeyboardArrowDownOutlinedIcon />},
    {label:'For College' , icon:<KeyboardArrowDownOutlinedIcon />},
    {label:'Courses' , icon:<KeyboardArrowDownOutlinedIcon />},
    {label:'Cart' , icon: <ShoppingBagOutlinedIcon /> },
    {label:'My Account' , icon:<AccountCircleOutlinedIcon /> }];




function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElFor1, setAnchorElFor1] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElFor1(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElFor1(null);
    };

    return (
        <ThemeProvider theme={theme}>
        <AppBar position="sticky" sx={{boxShadow:'none'}}>
            <Container maxWidth="xl" sx={{backgroundColor:"primary.main"}}>
                <Toolbar disableGutters >
                    <Box
                        sx={{
                            width: '3.5%',
                            height: '3.5%',
                            display: { xs: 'none', md: 'block'},
                        }}>
                    </Box>
                    <MyComponent sx={{backgroundColor:'primary.main'}} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color:'custom.typography.main',
                            margin:'0 0',
                            textDecoration: 'none',
                            ml: 1 ,
                            '&:Hover':{
                                color:'custom.typography'}
                        }}
                    >
                        Education
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary.main"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{display: {xs: 'block', md: 'none'}}}
                        >
                            {pages.map((page, index) => (
                                <MenuList key={index} onClick={handleCloseNavMenu}
                                          sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography
                                        variant="h5"
                                        noWrap
                                        component="a"
                                        href="/home"
                                        sx={{
                                            textAlign:'Left',
                                            textDecoration:'none'
                                    }}>
                                        {page.label}
                                    </Typography>
                                </MenuList>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            width: '4%',
                            height: '4%',
                            display: { xs: 'block', md: 'none' }
                        }}>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/login"
                        sx={{
                            mr: 2,
                            hover:'true',
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',

                        }}
                    >
                        Kılavuz Koçluk
                    </Typography>


                    <Box sx={{width: "150px", flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>

                        {pages.map((page, index) => {

                            const isBlueIcon = page.label === 'Cart' || page.label === 'My Account';
                            return (
                                <Button
                                    key={index}
                                    sx={{
                                        width: "1500px",
                                        my: '1.5',
                                        color: 'inherit',
                                        display: 'flex',
                                        textTransform: 'capitalize',
                                        textAlign:'left'


                                    }}
                                    endIcon={React.cloneElement(page.icon, {sx: {color: isBlueIcon ? 'blue' : 'inherit'}})}
                                >
                                    {page.label} {page.anchor}
                                </Button>
                            );
                        })}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
    );
};

export default ResponsiveAppBar;

