import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

function Future() {





    return (
        <div>

            <Card sx={{ backgroundColor: '#1c2027' }}>
                <CardContent>

                    <div className='headerApp'>
                        <div className='appHeaderLeft'>
                            <Typography sx={{ color: 'white', fontSize: '85px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px' }}>Feature:
                                <span style={{ color: '#39FF14', fontFamily: 'Dancing Script' }}> Future Building</span></Typography>
                            <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>
                                Users can map what future they want to have, linked with Google Search API to build picture boards, and link
                                meditation videos to time your visualization sessions.
                            </Typography>
                        </div>

                        <div className='appHeaderRightDrk'>
                            <iframe src="https://drive.google.com/file/d/1NRXyMRIjxw2Gj9tf0ayoQxJaxQ67X8qm/preview"
                                width="560"
                                height="315"
                                allow="autoplay"
                                style={{ border: 'none', outline: 'none' }}>
                            </iframe>
                        </div>

                    </div>
                    </CardContent>
                    </Card>
                </div>
                );
}

                export default Future;
