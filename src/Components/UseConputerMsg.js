import React from 'react';
import { Typography } from '@mui/material';
import { Html, OrbitControls, useGLTF } from '@react-three/drei';


export const UseComputerMsg = () => {
    return (
        <Html position={[10, 55, 0]} center>
            <div style={{ color: 'white', background: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '5px', border: '1px solid white' }}>
                <Typography sx={{ fontFamily: 'Bebas Neue' }}>'E' to use Computer</Typography>
            </div>
        </Html>
    );
}

export default UseComputerMsg;
