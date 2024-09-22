import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';


function Routine() {


    return (
        <div>

            <Card sx={{ backgroundColor: '#1c2027' }}>
                <CardContent>
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
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/dOhnK2BSzbU"
                                allow="autoplay"
                                style={{ border: 'none', outline: 'none' }}
                                title="YouTube video"
                            ></iframe>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Routine;
