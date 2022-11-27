import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {NavLink} from "react-router-dom";
import logo from '../../images/logo.png';
import s from './Header.module.scss'
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';


class Header extends React.Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 , justifyContent: "space-between", alignItems: "center"}}>
                <AppBar position="fixed" sx={{backgroundColor: '#2e5f8f'}}>
                    <Box>
                        <Toolbar  className={s.header}>
                            <div className={s.logo}>
                                <img src={logo} alt="logo"/>
                            </div>
                            <Typography variant="h6" component="div"  sx={{flexGrow: 1, textAlign: "left"}}>
                                English
                            </Typography>
                            <MenuList className={s.header_list}>
                                <MenuItem>
                                    <NavLink to="/" className={s.header_link}>Home</NavLink>
                                </MenuItem>
                                <MenuItem>
                                    <NavLink to="/about" className={s.header_link}>About</NavLink>
                                </MenuItem>
                                <MenuItem>
                                    <NavLink to="/contacts" className={s.header_link}>Contacts</NavLink>
                                </MenuItem>
                            </MenuList>
                        </Toolbar>
                    </Box>
                </AppBar>
            </Box>
        );
    }
}

export default Header;
