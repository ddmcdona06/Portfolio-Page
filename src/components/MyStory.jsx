import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import profilepic from '../img/profile-nobg.png'
import Tooltip from '@mui/material/Tooltip';
import ButtonGroup from '@mui/material-next/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import Stack from '@mui/material/Stack';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import linked from '../img/linkedin_black_logo.png'
import git from '../img/github.png'



function MyStory() {

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px'}}>
      <Grid container >
      <img src={profilepic} alt="" height='325px' width='auto' />
      <Card elevation={24} raised={true} sx={{background: 'transparent', shadowOpacity: 50, width: '75%', spacing: 10, borderRadius: '16px'}}>
        <CardContent>
          <Typography variant="h4" sx={{color: 'white'}} fontFamily={'cursive'}>My Story</Typography>
          <Divider sx={{ bgcolor: '#fec934'}} textAlign="center" />
          <Typography variant="h6" sx={{color: 'white'}} fontFamily={'monospace'}>
            Hey, my name is Darryl McDonald. My middle school experience of assembling a computer from individual parts was both thrilling and enlightening. Each component, like pieces in a technological puzzle, had a specific place and function. Using a soldering iron to secure connections was particularly gratifying. The hum of fans and the flicker of the screen, culminating in the classic Windows logo, instilled in me a deep sense of accomplishment and self-assurance, sparking a lasting interest in computer technology. As a developer, I am results-driven with a proven track record of conceptualizing, developing, and optimizing innovative web applications. Experienced in leading cross-functional teams to successful project outcomes, with a focus on enhancing the performance, scalability, and accessibility.
            </Typography>
            <Grid>
            <IconButton href="https://www.linkedin.com/in/darryl-d-mcdonald/" target="_blank">
              <img src={linked} alt=''width='40px' height='auto' id="linked"/>
              <Typography margin={1} sx={{color: '#fec934'}} fontFamily={'monospace'} >LinkedIn</Typography>
            </IconButton>
            <IconButton href="https://github.com/ddmcdona06" target="_blank" >
              <img src={git} alt=''width='40px' height='auto' id="linked"/>
              <Typography margin={1} sx={{color: '#fec934'}} fontFamily={'monospace'} >GitHub</Typography>
            </IconButton>
            </Grid>
        </CardContent>
      </Card>
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
            <Tooltip title='Projects' >
              <IconButton size="large" >
                <EngineeringOutlinedIcon fontSize="large" sx={{color: '#fec934'}} />
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
  );
}
export default MyStory