import React from "react";
import ProjectCarousel from './Carousel'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import ButtonGroup from '@mui/material-next/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import Stack from '@mui/material/Stack';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import scv from '../img/scvnjrny_logo_stacked.svg'

function Projects() {
  return (
    <Box margin={5} justifyContent='center' alignContent='center' alignItems='center' >
        <Typography variant="h2" sx={{color: 'white'}} fontFamily={'cursive'} marginBottom={3} >Projects</Typography>
      <Grid justifyContent='center' alignContent='center' alignItems='center' xs={8} >
        <img src={scv} alt="" width='400px' height='auto' />
      </Grid>
      <Stack justifyContent="center" alignItems="center" >
          <ButtonGroup size="medium" variant="text">
            <Stack justifyContent="center" alignItems="center" spacing={-2}>
              <Tooltip title='Home'>
                <IconButton size="large" href="/" >
                  <HouseOutlinedIcon fontSize="large" sx={{color: '#fec934'}} />
                </IconButton>
              </Tooltip>
            </Stack>
          <Stack justifyContent="center" alignItems="center" spacing={-2}>
          <Tooltip title='My Story' >
                <IconButton size="large" href="/MyStory" >
                  <AutoStoriesOutlinedIcon fontSize="large" sx={{color: '#fec934'}} />
                </IconButton>
              </Tooltip>
          </Stack>
          <Stack justifyContent="center" alignItems="center" spacing={-2}>
            <Tooltip title='darryldmcdonald@gmail.com' >
              <IconButton size="large" href='mailto:darryldmcdonald@gmail.com' target="_blank" >
                <EmailOutlinedIcon fontSize="large" sx={{color: '#fec934'}} />
              </IconButton>
            </Tooltip>
          </Stack>
        </ButtonGroup>
      </Stack>
    </Box>
  )
}

export default Projects