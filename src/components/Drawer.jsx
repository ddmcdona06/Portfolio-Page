import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function PortDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem disablePadding sx={{color: 'black'}} components={Link} href='/MyStory'>
            <ListItemButton href='/MyStory' >
              <ListItemIcon>
                <EngineeringIcon sx={{color: 'black'}} />
              </ListItemIcon>
              <ListItemText primary='My Story' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{color: 'black'}} >
            <ListItemButton>
              <ListItemIcon>
                <ConstructionIcon sx={{color: 'black'}} />
              </ListItemIcon>
              <ListItemText primary='Projects' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{color: 'black'}} >
            <ListItemButton>
              <ListItemIcon>
                <ConnectWithoutContactIcon sx={{color: 'black'}} />
              </ListItemIcon>
              <ListItemText primary='Contact' />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['Explore'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{color: '#fec934'}} variant='outlined' onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{sx: {backgroundColor: '#fec934'}}}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
