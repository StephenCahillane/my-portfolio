import React from 'react';
import { Html } from '@react-three/drei';


const ComputerScreen = () => {
    return (
        <Html position={[-130, 14, -35]} center>
            <div style={{ color: 'white', borderRadius: '5px', width: '400px', padding: '10px' }}>
                <img src="1684511227977 (1).jpg" alt="Example Image" style={{ borderRadius: '50%', width: '75px', height: '75px', marginBottom: '10px' }} />

            </div>
        </Html>
    );
}

export default ComputerScreen;
