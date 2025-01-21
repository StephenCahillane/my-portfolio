import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';



export const LoadingBox = () => {
    return (
        <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '170vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '10px'
              }}
            >
              <div className='loadingScreen'>
                <Typography sx={{ color: 'white', textAlign: 'center', fontFamily: 'Bebas Neue', mb: 3, fontSize: '28px' }}>Loading 3D Model</Typography>
                <CircularProgress sx={{ color: 'white' }} size={125} />
              </div>
            </Box>
    );
}

export default LoadingBox;
