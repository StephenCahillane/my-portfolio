import React from 'react';
import { Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';

function Study() {

    return (
        <div>

            <Card sx={{ backgroundColor: '#282c34' }}>
                <CardContent>
                    <div className='headerAppDrk'>
                        <div className='appHeaderLeftDrk'>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/C8DlN5y-V7A"
                                allow="autoplay"
                                style={{ border: 'none', outline: 'none' }}
                                title="YouTube video"
                            ></iframe>
                        </div>

                        <div className='appHeaderRightDrk'>

                            <Typography sx={{ color: 'white', fontSize: '85px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px' }}>Feature:
                                <span style={{ color: '#39FF14', fontFamily: 'Dancing Script' }}> Study Center</span></Typography>
                            <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>
                                Users can set subjects, weekly and daily study goals, contains a timer to
                                track study times and also upload notes and resources.
                            </Typography>
                        </div>


                    </div>
                </CardContent>
            </Card>

        </div >
    );
}

export default Study;
