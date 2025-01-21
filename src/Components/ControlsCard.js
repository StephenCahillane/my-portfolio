import React from 'react';
import { Card, CardContent, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MouseIcon from '@mui/icons-material/Mouse';




 export const ControlsCard = () => {
    
    
    return (
        <Card sx={{ mb: 5, width: '100%', height: '450px', backgroundColor: '#3a3f48', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
            <CardContent>
              <img src='logo-cropped.png' style={{ display: 'block', margin: '0 auto', height: '100px' }}></img>
              <List sx={{ color: 'white', textAlign: 'left', mx: 'auto', maxWidth: '600px', mt: 2 }}>

                <ListItem sx={{ backgroundColor: '#1c2027', border: '1px solid white', mt: 1 }}>
                  <ListItemIcon>
                    <MouseIcon sx={{ color: '#39FF14' }} />
                  </ListItemIcon>
                  <ListItemText primary="Zoom In & Out" />
                </ListItem>


                <ListItem sx={{ backgroundColor: '#1c2027', border: '1px solid white', mt: 1 }}>
                  <ListItemIcon sx={{ color: '#39FF14', ml: 0.75 }}>
                    W
                  </ListItemIcon>
                  <ListItemText primary="Move Forward" />
                </ListItem>

                <ListItem sx={{ backgroundColor: '#1c2027', border: '1px solid white', mt: 1 }}>
                  <ListItemIcon sx={{ color: '#39FF14', ml: 0.75 }}>
                    S
                  </ListItemIcon>
                  <ListItemText primary="Move Backward" />
                </ListItem>

                <ListItem sx={{ backgroundColor: '#1c2027', border: '1px solid white', mt: 1 }}>
                  <ListItemIcon sx={{ color: '#39FF14', ml: 0.75 }}>
                    A
                  </ListItemIcon>
                  <ListItemText primary="Move Up" />
                </ListItem>

                <ListItem sx={{ backgroundColor: '#1c2027', border: '1px solid white', mt: 1 }}>
                  <ListItemIcon sx={{ color: '#39FF14', ml: 0.75 }}>
                    D
                  </ListItemIcon>
                  <ListItemText primary="Move Down" />
                </ListItem>

              </List>
            </CardContent>
          </Card>
    );
}

export default ControlsCard;
