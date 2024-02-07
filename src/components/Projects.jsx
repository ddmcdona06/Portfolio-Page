import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import ButtonGroup from "@mui/material-next/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import scv from "../img/Scav2.png";
import CardActionArea from '@mui/material/CardActionArea';
import Divider from '@mui/material/Divider';
import story from '../img/StoryTime.png'
import ButtonBase from '@mui/material/ButtonBase';
import resolute from '../img/reso.png'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function Projects() {


  return (
    <Box
      margin={5}
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <Typography
        variant="h4"
        sx={{ color: "white" }}
        fontFamily={"cursive"}
        marginBottom={3}
      >
        Projects
      </Typography>
      <Divider sx={{ bgcolor: '#fec934', marginBottom: '20px' }} textAlign="center" />
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        direction='row'
        sx={{spacing: 80, marginBottom: '50px' }}
      >
        <Card
          elevation={24}
          raised={true}
          className="scv-card"
          sx={{
            background: "transparent",
            shadowOpacity: 50,
            spacing: 10,
            borderRadius: "16px",
            marginRight: '20px',
          }}
        >
          <CardActionArea>
            <Tooltip title='ScavenJourney' >
              <CardMedia>
                <ButtonBase href="https://github.com/ddmcdona06/scavenjourneys" target="_blank">
                  <img alt="" src={scv} width="500px" height="296px" />
                </ButtonBase>
              </CardMedia>
            </Tooltip>
          </CardActionArea>
        </Card>
        <Card
          elevation={24}
          raised={true}
          className="scv-card"
          sx={{
            background: "transparent",
            shadowOpacity: 50,
            spacing: 10,
            borderRadius: "16px",
          }}
        >
          <CardActionArea>
            <Tooltip title='StoryTime' >
              <CardMedia>
                <ButtonBase href="https://github.com/ddmcdona06/StoryTime" target="_blank">
                  <img alt="" src={story} width='500px' height='300px' />
                </ButtonBase>
              </CardMedia>
            </Tooltip>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        direction='row'
        sx={{spacing: 80, marginBottom: '50px'}}
      >
        <Card
          elevation={24}
          raised={true}
          className="scv-card"
          sx={{
            background: "transparent",
            shadowOpacity: 50,
            spacing: 10,
            borderRadius: "16px",
            marginRight: '20px',
          }}
        >
          <CardActionArea>
            <Tooltip title='Resolution (Legacy)' >
              <CardMedia>
                <ButtonBase href="https://github.com/ddmcdona06/resolution" target="_blank">
                  <img alt="" src={resolute} width="500px" height="300px" />
                </ButtonBase>
              </CardMedia>
            </Tooltip>
          </CardActionArea>
        </Card>
      </Grid>
      <Stack justifyContent="center" alignItems="center">
        <ButtonGroup size="medium" variant="text">
          <Stack justifyContent="center" alignItems="center" spacing={-2}>
            <Tooltip title="Home">
              <IconButton size="large" href="/">
                <HouseOutlinedIcon fontSize="large" sx={{ color: "#fec934" }} />
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack justifyContent="center" alignItems="center" spacing={-2}>
            <Tooltip title="My Story">
              <IconButton size="large" href="/MyStory">
                <AutoStoriesOutlinedIcon
                  fontSize="large"
                  sx={{ color: "#fec934" }}
                />
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack justifyContent="center" alignItems="center" spacing={-2}>
            <Tooltip title='Resume' >
              <IconButton size="large" href="/Resume">
                <ArticleOutlinedIcon fontSize="large" sx={{color: '#fec934'}} />
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack justifyContent="center" alignItems="center" spacing={-2}>
            <Tooltip title="darryldmcdonald@gmail.com">
              <IconButton
                size="large"
                href="mailto:darryldmcdonald@gmail.com"
                target="_blank"
              >
                <EmailOutlinedIcon fontSize="large" sx={{ color: "#fec934" }} />
              </IconButton>
            </Tooltip>
          </Stack>
        </ButtonGroup>
      </Stack>
    </Box>
  );
}

export default Projects;
