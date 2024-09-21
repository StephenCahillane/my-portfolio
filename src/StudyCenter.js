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
                            <iframe src="https://drive.google.com/file/d/1R4jaj4VyhrVkwqVYGp2oUgwKJMmK0w0x/preview"
                                width="560"
                                height="315"
                                allow="autoplay"
                                style={{ border: 'none', outline: 'none' }}
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
