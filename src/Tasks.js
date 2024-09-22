import React from 'react';
import { Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';

function Tasks() {

    return (
        <div>

            <Card sx={{ backgroundColor: '#282c34' }}>
                <CardContent>
                    <div className='headerAppDrk'>
                        <div className='appHeaderLeftDrk'>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/iZqbf5mQxBk"
                                allow="autoplay"
                                style={{ border: 'none', outline: 'none' }}
                                title="YouTube video"
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
