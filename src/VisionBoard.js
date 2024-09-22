import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';


function VisionBoard() {


    return (
        <div>
            <Card sx={{ backgroundColor: '#1c2027' }}>
                <CardContent>

                    <div className='headerApp'>
                        <div className='appHeaderLeft'>
                            <Typography sx={{ color: 'white', fontSize: '85px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px' }}>Feature:
                                <span style={{ color: '#39FF14', fontFamily: 'Dancing Script' }}> Vision Board</span></Typography>
                            <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>
                                Users can upload images and write text to create a Vision Board aligning with
                                their vision.
                            </Typography>
                        </div>

                        <div className='appHeaderRight'>


                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/v-Qjn-J8RGc"
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

export default VisionBoard;
