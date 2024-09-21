import React from 'react';
import { Typography } from '@mui/material';


function Routine() {


    return (
        <div>


            <div className='headerApp'>
                <div className='appHeaderLeft'>
                    <Typography sx={{ color: 'white', fontSize: '85px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px' }}>Feature:
                        <span style={{ color: '#39FF14', fontFamily: 'Dancing Script' }}> Daily Routine</span></Typography>
                    <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>
                        Users can set and edit Daily Routines, and also mark complete to track progress, including email reminders and
                        notifications.
                    </Typography>
                </div>

                <div className='appHeaderRightDrk'>
                    <iframe src="https://drive.google.com/file/d/1blyk3mtJCtByUqOZ-tCFEVB1n0zuQzU3/preview" 
                    width="560" 
                    height="315" 
                    allow="autoplay"
                    style={{border: 'none', outline: 'none'}}
                    ></iframe>
                </div>

            </div>
        </div>
    );
}

export default Routine;
