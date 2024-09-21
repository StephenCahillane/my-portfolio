import React from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';

function Future() {




    
    return (
        <div>
         

            <div className='headerApp'>
                <div className='appHeaderLeft'>
                    <Typography sx={{ color: 'white', fontSize: '85px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px' }}>Feature: 
                    <span style={{color: '#39FF14', fontFamily: 'Dancing Script'}}> Future Building</span></Typography>
                    <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>
                        Users can map what future they want to have, linked with Google Search API to build picture boards, and link
                        meditation videos to time your visualization sessions.
                    </Typography>
                </div>

                <div className='appHeaderRight'>
                    

                    
                </div>
            </div>
        </div>
    );
}

export default Future;
