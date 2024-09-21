import React from 'react';
import { Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';

function Tasks() {

    return (
        <div>

            <Card sx={{backgroundColor: '#282c34'}}>
                <CardContent>
                    <div className='headerAppDrk'>
                        <div className='appHeaderLeftDrk'>
                        <iframe src="https://drive.google.com/file/d/1e0C39Vd5Q3Ue-vfxl5HvPUol8MHB7rdz/preview" 
                        width="560" 
                        height="315" 
                        allow="autoplay"
                        style={{border: 'none', outline: 'none'}}
                        ></iframe>

                        </div>

                        <div className='appHeaderRightDrk'>
                            <Typography sx={{ color: 'white', fontSize: '85px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px' }}>Feature:
                                <span style={{ color: '#39FF14', fontFamily: 'Dancing Script' }}> Task Manager</span></Typography>
                            <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>
                                Users can map what future they want to have, linked with Google Search API to build picture boards, and link
                                meditation videos to time your visualization sessions.
                            </Typography>
                        </div>





                    </div>
                </CardContent>
            </Card>

        </div >
    );
}

export default Tasks;
