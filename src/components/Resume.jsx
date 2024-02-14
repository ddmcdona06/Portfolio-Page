import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import logo3 from "../img/cropped port.png";
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material-next/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import Tooltip from '@mui/material/Tooltip';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import resumePdf from '../resume1.pdf'
import ButtonBase from '@mui/material/ButtonBase';
import adobe from '../img/pdf.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Resume() {
  
  return (
    <Box
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      margin="auto"
      display="flex"
      spacing={1}
      sx={{ marginTop: "50px" }}
    >
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        sx={{
          marginLeft: "20px",
          marginRight: "auto",
          padding: "15px",
        }}
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
            marginRight: "20px",
            padding: "15px",
          }}
        >
          <Grid direction="row" container>
            <Typography variant="h3" sx={{ color: "beige" }} fontFamily={"cursive"}>
              Darryl McDonald{" "}
              {<img alt="" className="resume-logo" src={logo3} width="45px" height="auto" />}
            </Typography>
          </Grid>
          <Typography variant="h6" sx={{ color: "#fec934" }}>
            Software Engineer
          </Typography>
          <Typography variant="body2" sx={{ color: "beige" }}>
            Certified javascript fullstack web developer eager for opportunities
            to apply my skills and knowledge. Adept at conceptualizing,
            developing, and optimizing innovative web applications. Experienced
            in leading cross-functional teams toward successful project
            outcomes, with a strong focus on enhancing the performance and
            scalability of complex systems. Excited about the prospect of
            contributing my passion for technology and acquired skills to drive
            excellence within your team. Seeking a role that allows me to
            leverage my enthusiasm and training for the benefit of your
            organization.
          </Typography>
          <Divider
            sx={{ bgcolor: "#fec934", marginBottom: "20px", marginTop: "20px" }}
            textAlign="center"
          />
          <Typography variant="h5" sx={{ color: "#fec934", marginBottom: '10px' }}>
            Experience
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#61dafb" }}>
            Operation Spark
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "beige", fontStyle: "italic" }}
          >
            Help Desk Technician
          </Typography>
          <Typography variant="body2" sx={{ color: "beige", marginBottom:'40px' }}>
            <List sx={{listStyleType: 'disc', listStylePosition: 'inside' }} >
              <ListItem sx={{display: 'list-item' }} >
                Provide technical support to bootcamp participants, assisting with programming concepts, debugging, and troubleshooting issues related to software development projects.
                </ListItem>
              <ListItem sx={{display: 'list-item' }} >
              Respond to helpdesk tickets promptly, addressing software and coding challenges bootcamp participants face, and ensuring a positive and productive experience.
              </ListItem>
              <ListItem sx={{display: 'list-item' }} >
              Stay updated on industry trends, programming languages, and development tools to provide relevant and up-to-date support to bootcamp participants.
              </ListItem>
            </List>
          </Typography>

          <Typography variant="subtitle1" sx={{ color: "#61dafb" }}>
            Capital One Bank
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "beige", fontStyle: "italic" }}
          >
            Principal Coordinator
          </Typography>
          <Typography variant="body2" sx={{ color: "beige" }}>
            <List sx={{listStyleType: 'disc', listStylePosition: 'inside' }} >
              <ListItem sx={{display: 'list-item' }} >
              Leveraged advanced data analysis techniques and auditing tools to identify irregularities, trends, and potential risks, proactively mitigating issues before they impacted financial operations.
              </ListItem>
              <ListItem sx={{display: 'list-item' }} >
              Demonstrated a systematic approach to error analysis, efficiently pinpointing root causes and implementing corrective measures, causing a 70% reduction in error rate.
              </ListItem>
              <ListItem sx={{display: 'list-item' }} >
              Played a pivotal role in safeguarding sensitive healthcare data by ensuring accurate and HIPAA-compliant information entry and promoting data integrity and privacy.
              </ListItem>
              <ListItem sx={{display: 'list-item' }} >
              Successfully identified bottlenecks and inefficiencies in the existing sorting workflow, leading to a comprehensive overhaul and a 25% reduction in processing time.
              </ListItem>
              <ListItem sx={{display: 'list-item' }} >
              Supervised and motivated the team to provide top-notch service to 300+ clients, consistently exceeding their expectations.
              </ListItem>
              <ListItem sx={{display: 'list-item' }} >
              Managed and monitored daily operations, ensuring the security and accuracy of financial transactions, resulting in an average daily deposit totaling $9 million.
              </ListItem>
              <ListItem sx={{display: 'list-item' }} >
              Streamlined task assignment processes by strategically matching tasks to associates’ individual strengths and expertise.
              </ListItem>
              <ListItem sx={{display: 'list-item' }} >
              Spearheaded and organized a wide range of events, programs, and initiatives aimed at promoting employee engagement, diversity, and professional development in the role of Southern Region Lead for Capital One Associate Engagement Network.
              </ListItem>
              <ListItem sx={{display: 'list-item' }} >
              Effectively facilitated hands-on training sessions, ensuring a deep understanding of operational software functionalities and proficient equipment operation.
              </ListItem>
            </List>
          </Typography>
          <Divider
            sx={{ bgcolor: "#fec934", marginBottom: "20px", marginTop: "20px" }}
            textAlign="center"
          />
          <Typography variant="h5" sx={{ color: "#fec934", marginBottom: '10px' }}>
            Skills
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#61dafb" }}>
            Proficient:
          </Typography>
          <Typography variant="body2" sx={{ color: "beige", marginBottom: '20px' }}>
            Javascript | Material UI | React.js | Node.js | Express.js | MySQL | Git Workflow
            | Routing | API’s | Axios | CSS | Debugging | Team Leadership | Problem Solving
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#61dafb" }}>
            Additional:
          </Typography>
          <Typography variant="body2" sx={{ color: "beige" }}>
            Typescript | Bootstrap | TypeORM | Sequelize.js | AWS EC2 | MongoDB
            | Data Modeling | Passport.js | Google OAuth2.0  | Putty | Data Integrity
            | HIPAA | Financial Analysis
          </Typography>
          <Divider
            sx={{ bgcolor: "#fec934", marginBottom: "20px", marginTop: "20px" }}
            textAlign="center"
          />
          <Typography variant="h5" sx={{ color: "#fec934", marginBottom: '10px' }}>
            Education
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#61dafb" }}>
            Operation Spark
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "beige" }}
          >
            Advanced Software Engineering Immersive Program
            <List sx={{listStyleType: 'disc', listStylePosition: 'inside', color: "beige" }} >
              <ListItem sx={{display: 'list-item' }} >IBC Fundamentals of Javascript Level III</ListItem>
              <ListItem sx={{display: 'list-item' }} >IBC Functional Programming Level III</ListItem>
              <ListItem sx={{display: 'list-item' }} >IBC Web Development Level III</ListItem>
          </List>
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#61dafb" }}>
            Loyola University New Orleans
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "beige" }}
          >
            Bachelor of the Arts, Theater Business Management
          </Typography>
          <Divider
            sx={{ bgcolor: "#fec934", marginBottom: "20px", marginTop: "20px" }}
            textAlign="center"
          />
          <Typography variant="h5" sx={{ color: "#fec934", marginBottom: '10px' }}>
            Organizations/Volunteerism
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#61dafb" }}>
            Alpha Phi Alpha Fraternity, Inc.
          </Typography>
          <Typography variant="body2" sx={{ color: "beige", marginBottom: '10px' }}>
            Treasurer | Financial Secretary | Corresponding Secretary
            Sergeant-at-Arms | Membership Intake Officer
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#61dafb" }}>
            Project Butterfly New Orleans
          </Typography>
          <Typography variant="body2" sx={{ color: "beige", marginBottom: '10px'  }}>
            Board of Directors
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#61dafb" }}>
            Youth Run NOLA
          </Typography>
          <Typography variant="body2" sx={{ color: "beige", marginBottom: '10px'  }}>
            504K Race Committee
            | Race Day Volunteer
            | Event Team Leadership
          </Typography>
          <ButtonBase href={resumePdf} target="_blank" rel="noreferrer" sx={{color: '#fec934'}} >
            <img alt="" src={adobe} width='50px' height='auto'/>
            Download Resume
          </ButtonBase>
        </Card>
        <Stack justifyContent="center" alignItems="center" >
          <ButtonGroup size="medium" variant="text">
          <Stack justifyContent="center" alignItems="center" spacing={-2}>
            <Tooltip title="Home">
              <IconButton size="large" href="/">
                <HouseOutlinedIcon fontSize="large" sx={{ color: "#fec934" }} />
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
      </Grid>
    </Box>
  );
}
export default Resume;
