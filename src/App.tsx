import { useState } from 'react'

import {
  CssBaseline,
  Paper,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Stack
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { BottomAppBar } from './home/components/BottomAppBar'

const App = () => {

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => setExpanded(isExpanded ? panel : false)

  return (
    <>
      <CssBaseline />

      <Paper square sx={{ pb: '10px' }}>

        <Stack
          direction='row'
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}>
          <Typography
            gutterBottom
            variant='h4'
            component='div'
            sx={{ p: 2 }}>

            Mis cargos
          </Typography>

          <Typography
            gutterBottom
            variant='h6'
            component='div'
            sx={{ p: 3 }}>
            Total:
            &nbsp;
            <Chip
              size="small"
              label="12000"
              variant="outlined" />
          </Typography>
        </Stack>

      </Paper>

      <List>

        <ListItem disablePadding>

          <Accordion
            style={{ width: '100%' }}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Compra de fierros
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Se gastó 1290 soles.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </ListItem>

        <ListItem disablePadding>
          <Accordion
            style={{ width: '100%' }}
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Pago de baseado techo
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Se gastó 6520 soles.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <ListItem disablePadding>
          <Accordion
            style={{ width: '100%' }}
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Pago de albañil
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Se gastó 6520 soles.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>

      </List>

      <BottomAppBar />
    </>
  )
}

export default App