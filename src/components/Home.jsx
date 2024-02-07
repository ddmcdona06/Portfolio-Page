import React from "react";
import Stack from '@mui/material/Stack';
import logo3 from '../img/cropped port.png'
import ButtonGroup from '@mui/material-next/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


function Home() {



  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px'}}>
      <Stack spacing={0.5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h2' className="home-name">Darryl McDonald</Typography>
        <Typography variant="subtitle2" sx={{color: 'white'}} >FullStack Developer</Typography>
      </Stack>
        <img src={logo3} className="App-logo" alt="logo"/>
        <Stack justifyContent="center" alignItems="center" >
          <ButtonGroup size="medium" variant="text">
            <Stack justifyContent="center" alignItems="center" spacing={-2}>
              <Tooltip title='My Story' >
                <IconButton size="large" href="/MyStory" >
                  <AutoStoriesOutlinedIcon fontSize="large" sx={{color: '#fec934'}} />
                </IconButton>
              </Tooltip>
            </Stack>
          <Stack justifyContent="center" alignItems="center" spacing={-2}>
            <Tooltip title='Projects' >
              <IconButton size="large" href="/Projects">
                <EngineeringOutlinedIcon fontSize="large" sx={{color: '#fec934'}} />
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack justifyContent="center" alignItems="center" spacing={-2}>
            <Tooltip title='darryldmcdonald@gmail.com' >
              <IconButton size="large" href='mailto:darryldmcdonald@gmail.com' target="_blank">
                <EmailOutlinedIcon fontSize="large" sx={{color: '#fec934'}} />
              </IconButton>
            </Tooltip>
          </Stack>
        </ButtonGroup>
      </Stack>
    </Box>
  )
}
export default Home