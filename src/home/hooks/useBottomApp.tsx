import { useState }    from 'react'
import { styled, Fab } from '@mui/material'

export const useBottomApp = () => {

    const [anchorEl, setAnchorEl]     = useState<null | HTMLElement>(null)
    const open                        = Boolean(anchorEl)

    const [openDialog, setOpenDialog] = useState(false)


    const handleClick                 = ({ currentTarget }: React.MouseEvent<HTMLElement>) => setAnchorEl(currentTarget)
    const handleClose                 = () => setAnchorEl(null)
    
    const handleClickOpenDialog       = () => setOpenDialog(true)    
    const handleCloseDialog           = () => setOpenDialog(false)

    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    })

    return {
        StyledFab,
        open,
        anchorEl,
        openDialog,
        handleClick,
        handleClose,
        handleClickOpenDialog,
        handleCloseDialog
    }
    
}
