import React from 'react';
import { Typography } from '@mui/material';


function VisionBoard() {


    return (
        <div>


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


                    <iframe src="https://drive.google.com/file/d/1jYGzBBQhXy2gaHFYfRi339StRs4BtPK1/preview"
                        width="560"
                        height="315"
                        allow="autoplay"
                        style={{border: 'none', outline: 'none'}}>
                    </iframe>



                </div>
            </div>
        </div>
    );
}

export default VisionBoard;
