import React from 'react';
import { Card, CardContent, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MouseIcon from '@mui/icons-material/Mouse';




 export const ControlsCard = () => {
    
    
    return (
        <Card 
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 5, width: '100%', height: '320px', backgroundColor: 'rgb(30,30,30)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}
        className='controls-card'
        >
            <CardContent>
              <List sx={{ color: 'white', textAlign: 'left', mx: 'auto', maxWidth: '600px' }}>

                <ListItem sx={{ backgroundColor: 'rgb(25,25,25)', border: '1px solid #39FF14', mt: 1, width: '500px' }}>
                  <ListItemIcon>
                    <MouseIcon sx={{ color: '#39FF14' }} />
                  </ListItemIcon>
                  <ListItemText primary="Zoom In & Out" />
                </ListItem>


                <ListItem sx={{ backgroundColor: 'rgb(25,25,25)', border: '1px solid #39FF14', mt: 1 }}>
                  <ListItemIcon sx={{ color: '#39FF14', ml: 0.75 }}>
                    W
                  </ListItemIcon>
                  <ListItemText primary="Move Forward" />
                </ListItem>

                <ListItem sx={{ backgroundColor: 'rgb(25,25,25)', border: '1px solid #39FF14', mt: 1 }}>
                  <ListItemIcon sx={{ color: '#39FF14', ml: 0.75 }}>
                    S
                  </ListItemIcon>
                  <ListItemText primary="Move Backward" />
                </ListItem>

                <ListItem sx={{ backgroundColor: 'rgb(25,25,25)', border: '1px solid #39FF14', mt: 1 }}>
                  <ListItemIcon sx={{ color: '#39FF14', ml: 0.75 }}>
                    A
                  </ListItemIcon>
                  <ListItemText primary="Move Up" />
                </ListItem>

                <ListItem sx={{ backgroundColor: 'rgb(25,25,25)', border: '1px solid #39FF14', mt: 1 }}>
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
