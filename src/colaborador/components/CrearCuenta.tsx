import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
    TextField,
    Button,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    IconButton,
    ListItemText
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import FolderIcon from '@mui/icons-material/Folder'

import { useDropzone } from 'react-dropzone'


interface Props {
    handleClose: () => void
    open: boolean
}

export const CrearCuenta = ({ handleClose, open }: Props) => {

    const {
        getRootProps,
        getInputProps,
        acceptedFiles
    } = useDropzone({ noDrag: true })

    const files = acceptedFiles.map((file: any) => {
        return (
            <li key={file.path}>
                {file.path}
            </li>
        )
    })

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Registro de gastos</DialogTitle>
            <DialogContent>

                <DialogContentText>
                    Rellene toda la información de los gatos, incluyendo fotografia para la evidencia.
                </DialogContentText>

                <TextField
                    margin='dense'
                    label='Titulo de la orden'
                    type='text'
                    fullWidth
                    variant='outlined'
                    style={{ marginTop: 10 }} />

                <TextField
                    id='standard-multiline-flexible'
                    label='Monto gastado'
                    fullWidth
                    variant='outlined'
                    style={{ marginTop: 10 }} />

                <TextField
                    id='standard-multiline-flexible'
                    label='Descripción'
                    fullWidth
                    multiline
                    maxRows={4}
                    variant='outlined'
                    style={{ marginTop: 10 }} />


                <hr style={{ marginTop: 20 }} />

                <TextField
                    id='standard-multiline-flexible'
                    label='Producto'
                    fullWidth
                    multiline
                    maxRows={4}
                    variant='outlined'
                    style={{ marginTop: 10 }} />

                <Button
                    variant='outlined'
                    style={{ marginTop: 10 }}
                    fullWidth>Agregar producto</Button>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
                        Productos en lista
                    </Typography>
                    <List dense={true}>
                        {!Boolean([].length) && 'Vacio'}
                        {[1, 2].map((x) =>
                            <ListItem
                                key={x}
                                secondaryAction={
                                    <IconButton
                                        edge='end'
                                        aria-label='delete'>
                                        <DeleteIcon />
                                    </IconButton>
                                }>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary='Single-line item'
                                    secondary='Secondary text'
                                />
                            </ListItem>
                        )}
                    </List>
                </Grid>

                <div
                    style={{ border: 'dashed', textAlign: 'center', marginTop: 30, cursor: 'pointer', backgroundColor: '#D3E8FF' }}
                    {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Arrastra y suelta ó click para subir imagenes</p>
                </div>

                {
                    Boolean(acceptedFiles.length) &&
                    <div>
                        <h5>Archivos</h5>
                        <ul>{files}</ul>
                    </div>
                }

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose} variant='contained'>Crear</Button>
            </DialogActions>
        </Dialog>
    )
}
