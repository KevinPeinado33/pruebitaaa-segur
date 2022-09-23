import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Tooltip,
    Avatar,
    Menu,
    MenuItem
}                       from '@mui/material'
import MenuIcon         from '@mui/icons-material/Menu'
import AddIcon          from '@mui/icons-material/Add'
import SearchIcon       from '@mui/icons-material/Search'

import { useBottomApp } from '../hooks/useBottomApp'
import { CrearCuenta }  from '../../colaborador/components/CrearCuenta'

export const BottomAppBar = () => {

    const {
        StyledFab,
        open,
        anchorEl,
        openDialog,
        handleClick,
        handleClose,
        handleClickOpenDialog,
        handleCloseDialog
    } = useBottomApp()    

    return (
        <>
            <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <IconButton color='inherit' aria-label='open drawer'>
                        <MenuIcon />
                    </IconButton>
                    <StyledFab 
                        color='secondary' 
                        aria-label='add'
                        onClick={handleClickOpenDialog}>
                        <Tooltip title='Agregar gasto' placement='top'>
                            <AddIcon />
                        </Tooltip>
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color='inherit'>
                        <SearchIcon />
                    </IconButton>
                    <IconButton 
                        color='inherit'
                        onClick={handleClick}>
                        <Avatar
                            alt='Remy Sharp'
                            src='https://i.ytimg.com/vi/Jv46d9s_HuA/maxresdefault.jpg'/>
                    </IconButton>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}>
                        <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
                        <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            
            <CrearCuenta 
                handleClose={handleCloseDialog}
                open={openDialog}/>
        </>
    )
}
