import React from 'react';
import { Typography } from '@mui/material';
import { Html } from '@react-three/drei';

const ComputerDirectionScreen = () => {
    return (
        <Html position={[-130, 55, 10]} center>
            <div style={{ color: 'white', borderRadius: '5px', width: '400px' }}>
                <Typography sx={{ fontFamily: 'Bebas Neue', border: '1px solid white', mb: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>Press 'f' to exit Computer</Typography>
                <Typography sx={{ fontFamily: 'Bebas Neue', border: '1px solid white', mb: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>Press 'L' for LinkedIn</Typography>
                <Typography sx={{ fontFamily: 'Bebas Neue', border: '1px solid white', mb: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>Press 'T' for Twitter</Typography>
                <Typography sx={{ fontFamily: 'Bebas Neue', border: '1px solid white', mb: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>Press 'Y' for YouTube</Typography>
            </div>
        </Html>
    );
}

export default ComputerDirectionScreen;
