import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import bg from '../img/escheresque-dark.png';
import Tooltip from '@mui/material/Tooltip';
import ButtonGroup from '@mui/material-next/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Send this data to a server using AJAX or other methods

    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };


  return(
    <Box  component='form' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px'}}>
      <Typography variant='h2'fontFamily={'cursive'} sx={{color: 'white'}} >Contact Me</Typography>
      <Grid width='500px' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <Card id='email-card' elevation={24} raised={true} sx={{shadowOpacity: 50, width: '75%', spacing: 10, backgroundColor: '#fec934', borderRadius: '16px' }}>
          <CardMedia image={bg} >
          <CardContent sx={{justifyContent: 'center', alignItems: 'center'}} >
            <IconButton size='large' href='mailto:darryldmcdonald@gmail.com' sx={{m: 1}} >
              <EmailIcon />
              <Typography>Email Me!</Typography>
            </IconButton>
          </CardContent>
          </CardMedia>
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
            <Tooltip title='My Story' >
                <IconButton size="large" href="/MyStory" >
                  <AutoStoriesOutlinedIcon fontSize="large" sx={{color: '#fec934'}} />
                </IconButton>
              </Tooltip>
          </Stack>
        </ButtonGroup>
      </Stack>
    </Box>
  )
}

export default Contact